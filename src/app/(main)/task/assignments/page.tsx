"use client";
import { useState ,useEffect} from "react";
import {TaskForm2}  from "@/components/TaskForm2"
import DataGrid from "@/components/DataGrid";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Sort,
  Filter,
  Group,
} from "@syncfusion/ej2-react-grids";
import { data } from "./datasource";



export default function Task() {
  const [taskData, setTaskData] = useState([]);


  return (
    <div>
      
      <div className="flex lg:grid-cols-2 sm:gird-cols-1  h-1\4 dark:bg-black dark:text-white ">
        {/* <TaskForm
          inputClass="form"
          formButtonClass="btn btn-primary"
          labelClass="form-label"
          formClass="form"
          divClass="taskContainer"
        /> */}
        <TaskForm2/>
        <div className="bg-white p-2 dark:bg-black dark:text-white dark:border-[1px] shadow-md rounded-md">
          <div className="bg-gray-200 dark:bg-white dark:text-black rounded-md mb-1">
            <p className="mr-5 text-2xl">TaskDetails</p>
          </div>
          <DataGrid/>
        </div>
      </div>
      <div className="bg-white p-2 shadow-md mt-3 rounded-md">
        <DataGrid />
      </div>
    </div>
  );
}
