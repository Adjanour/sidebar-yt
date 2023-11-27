"use server";
import { useRouter } from 'next/router';
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next';

export const onFinish = async (values: any) => {
  console.log(values);
    if(!values) return;
    const response = await axios.post("http://localhost:8000/api/user/token/",values)
    
     const data =  response.data
   
     console.log(data)
      
     return data;
    }



interface TaskData {
  task_name: string;
  start_date: {
    "$D": number;
    "$H": number;
    "$L": string;
    "$M": number;
    "$W": number;
    "$d": Date;
    "$isDayjsObject": true;
    "$m": number;
    "$ms": number;
    "$s": number;
    "$u": undefined;
    "$x": { };
    "$y": number;
  };
  end_date: {
    "$D": number;
    "$H": number;
    "$L": string;
    "$M": number;
    "$W": number;
    "$d": Date;
    "$isDayjsObject": true;
    "$m": number;
    "$ms": number;
    "$s": number;
    "$u": undefined;
    "$x": { };
    "$y": number;
  };
  assigned_by: string[];
  assigned_to: string[];
  task_status: number;
  task_priority: number;
  task_description: string;
}

export  async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { data }: { data: TaskData } = req.body;

    // Destructure data
    const {
      task_name,
      start_date,
      end_date,
      assigned_by,
      assigned_to,
      task_status,
      task_priority,
      task_description,
    } = data;

    // Convert Day.js date objects to standard JavaScript Date objects
    const jsStartDate = start_date.$d;
    const jsEndDate = end_date.$d;

    // Check if it's a multiple task assignment
    if (Array.isArray(assigned_to) && assigned_to.length > 1) {
      // Create a new task
      const taskResponse = await fetch('http://127.0.0.1:8000/api/user/task/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskName: task_name,
          taskStartDate: jsStartDate,
          taskEndDate: jsEndDate,
          taskStatusId: task_status,
          taskPriorityId: task_priority,
          taskDescription: task_description,
        }),
      });

      const taskData = await taskResponse.json();

      // Loop through assigned_to and create task assignments
      for (const assigneeName of assigned_to) {
        // Fetch the user ID based on the assigneeName, replace with actual logic
        const assigneeId = assigneeName

        await fetch('http://127.0.0.1:8000/user/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tkaId: taskData.taskId,
            tkaAssignee: assigneeId,
            tkaAssigner: assigned_by[0],
          }),
        });
      }

      res.status(200).json({ success: true });
    } else {
      // Handle single task assignment logic here
      // ...
      res.status(200).json({ success: true });
    }
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// // Replace this with actual logic to fetch user ID based on the assigneeName
// async function fetchUserId(assigneeName: string): Promise<number> {
//   // Simulated logic, replace with actual logic to fetch user ID
//   if (assigneeName === 'bernard') {
//     return 1; // Replace with the actual user ID
//   } else {
//     return 2; // Replace with the actual user ID
//   }
// }
