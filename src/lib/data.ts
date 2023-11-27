import axios from "axios";
import { Status } from "./definitions";
export async function getUsers() {
  const response = await axios.get("http://localhost:8000/api/user/uesrs/");
  const data = response.data;
  return data;
}

export async function getUser(id: string) {
  const response = await axios.get(`http://localhost:8000/api/user/${id}`);
  const data = response.data;
  return data;
}

export async function getStatus(){
    try{
        const response =  await axios.get("http://localhost:8000/api/user/task-status/");
        const data:Status[] = response.data;
        return data;
    }
    catch(error){
        console.log(error);
        throw new Error('Failed to fetch revenue data.');
    }
    
}

export async function getPrio(){
    const response = await axios.get("http://localhost:8000/api/user/task-priority/");
    const data = response.data;
    return data;
}
export async function getServerSideProps() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('en-US', {
    timeZone:'America/New_York'
  });

  const currentTime = new Date();

  return {
   
      currentDate: formattedDate,
      currentTime: currentTime,

  };
}