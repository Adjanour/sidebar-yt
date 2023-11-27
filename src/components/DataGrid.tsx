// 'use client';
// import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
// import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
// import {data} from "@/app/task/assignments/datasource";

// export default function DataGrid() {

//     let gridInstance;
//     return (<div className='control-pane'>
//             <div className='control-section'>
//                 <GridComponent id="Grid" dataSource={data} ref={grid => gridInstance = grid} allowPaging={true}>
//                     <ColumnsDirective>
//                         <ColumnDirective field='OrderId' headerText='Task ID' width='120' textAlign='Right'></ColumnDirective>
//                         <ColumnDirective field='CustomerId' headerText='Task Name' width='160'></ColumnDirective>
//                         <ColumnDirective field='ShipName' headerText='Task Description' width='120' textAlign='Right'/>
//                         <ColumnDirective field='fullName' headerText='Freight' width='150'  textAlign='Right'/>

//                     </ColumnsDirective>
//                     <Inject services={[Page]}/>
//                 </GridComponent>
//             </div>
//             <div id='waitingpopup' className='waitingpopup'>
//                 <span id='gif' className='image'></span>
//             </div>
//         </div>)
// };
import { useEffect, useState } from "react";
import { Ajax } from "@syncfusion/ej2-base";
import Link from "next/link";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Sort,
  Filter,
  Group,
} from "@syncfusion/ej2-react-grids";
import axios from "axios";

type UserData = {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
};
interface data {
  count: number;
  next: string;
  previous: string;
  results: UserData[];
}
function DataGrid() {
  const [data, setData] = useState<UserData>();
  useEffect(() => {
    // const ajax = new Ajax('http://localhost:8000/api/user/tasks/', 'GET');
    // ajax.send();
    // ajax.onSuccess = (data: any) => {
    //   console.log(data)
    // setData(JSON.parse(data));
    // }
    const Axios = axios.get("http://localhost:8000/api/user/tasks/");
    Axios.then((res) => {
      console.log(res.data);
      setData(res.data.results);
    });
  }, []);

  const filterSettings: object = { type: "Excel" };
  const pageSettings: object = { pageSize: 6 };

  return (
    <GridComponent
      dataSource={data}
      allowPaging={true}
      height={200}
      allowGrouping={true}
      allowSorting={true}
      allowFiltering={true}
      pageSettings={pageSettings}
      filterSettings={filterSettings}
    >
      <ColumnsDirective>
       <ColumnDirective
          field="taskId"
          headerText="Task ID"
          textAlign="Left"
        ></ColumnDirective>
        <ColumnDirective
          field="taskName"
          headerText="Task Name"
        ></ColumnDirective>
        <ColumnDirective
          field="taskDescription"
          headerText="Task Description"
          textAlign="Left"
        />
        <ColumnDirective
          field="fullName"
          headerText="Assigned To"
          textAlign="Left"
        />
        <ColumnDirective
          field="AssignerFullName"
          headerText="Assigned By"
          textAlign="Left"
        />
        <ColumnDirective
          field="taskProgress"
          headerText="Progress"
          format="P2"
          textAlign="Left"
        />
      </ColumnsDirective>
      <Inject services={[Page, Sort, Filter, Group]} />
    </GridComponent>
  );
}
export default DataGrid;
