"use client";
import { useEffect, useState } from "react";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import { ICellFormatter } from "@syncfusion/ej2-react-grids";
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
import { Ajax } from "@syncfusion/ej2-base";
import axios from "axios";

export default function DataGrid() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // const ajax = new Ajax("http://localhost:8000/api/user/tasks/", "GET");
    // ajax.send();
    // ajax.onSuccess = (data: any) => {
    //   setData(JSON.parse(data));
    // };
    const Axios = axios.get('http://localhost:8000/api/user/tasks/');
      Axios.then((res)=>{
        console.log(res.data)
        setData(res.data.results)
      })
  }, []);
  const filterSettings: object = { type: "Excel" };
  const pageSettings: object = { pageSize: 20 };

  const percentageFormatter  = (taskProgress:object) => {
    console.log(taskProgress)
    return `${(+taskProgress * 100).toFixed(2)}%`;
  };

  let gridInstance;

  return (
    <div className="p-1 bg-white shadow-md rounded-md grid grid-cols-1 ">
      <div className="control-pane">
        <div className="control-section">
          <GridComponent
            id="Grid"
            dataSource={data}
            ref={(grid) => (gridInstance = grid)}
            allowPaging={true}
            allowGrouping={true}
            allowSorting={true}
            allowFiltering={true}
            allowResizing={true}
            pageSettings={pageSettings}
            filterSettings={filterSettings}
            loadingIndicator={{indicatorType: 'Shimmer'}}
            height={500}
          >
            <ColumnsDirective>
              <ColumnDirective
                field="taskId"
                headerText="Task ID"
                width="120"
                textAlign="Left"
              ></ColumnDirective>
              <ColumnDirective
                field="taskName"
                headerText="Task Name"
                width="160"
              ></ColumnDirective>
              <ColumnDirective
                field="taskDescription"
                headerText="Task Description"
                width="120"
                textAlign="Left"
              />
              <ColumnDirective
                field="fullName"
                headerText="Assigned To"
                width="150"
                textAlign="Left"
              />
              <ColumnDirective 
              field="AssignerFullName"
              headerText="Assigned By"
                width="150"
                textAlign="Left"
                />
                <ColumnDirective 
              field="taskProgress"
              headerText="Progress"
                width="150"
                format="P2"
                textAlign="Left"
                />
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group]} />
          </GridComponent>
        </div>
        <div id="waitingpopup" className="waitingpopup">
          <span id="gif" className="image"></span>
        </div>
      </div>
    </div>
  );
}
