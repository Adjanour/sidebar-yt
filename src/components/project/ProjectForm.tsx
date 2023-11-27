"use client";
import TokenEdit from "@/components/TokenEdit";
import { useState, useEffect } from "react";
import { Form, Input, DatePicker, message } from "antd";
import SelectComponent from "@/components/Select";
import SelectComponent2 from "@/components/Select3";
import ButtonComponent from "@/components/Button";
import { TextArea } from "@/components/TextArea";
import Image from "next/image";

function ProjectForm() {
  return (
    <div className="p-2 bg-white rounded-md shadow-md border w-fit">
      <div className="bg-gray-200 rounded-md mb-1  dark:bg-white dark:text-black">
        <p className=" text-2xl">Project Details</p>
      </div>
      <div className="flex flex-row">
        <div id="form" className="mr-3">
          <Form className="m-auto dark:text-white">
            <table className="mt-3 mb-1 dark:text-white">
              <tbody>
                <tr>
                  <td className="flex float-right  items-center justify-center mt-1 ">
                    <label className=" align-middle text-sm font-medium ">
                      Starts:
                    </label>
                  </td>

                  <td>
                    <Form.Item name="start_date" className="mb-0">
                      <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                  </td>
                  <td className="flex float-right items-center justify-center">
                    {" "}
                    <label className="block text-sm font-medium">Ends:</label>
                  </td>
                  <td>
                    <Form.Item name="end_date" className="mb-0">
                      <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                  </td>
                </tr>
                <tr>
                <td className="flex float-right  items-center justify-center mt-1 ">
                    <label className=" align-middle text-sm font-medium ">
                      Project Name:
                    </label>
                  </td>
                  <td colSpan={3}>
                    <Form.Item name="project_name" className="mb-0">
                      <Input
                        placeholder="Enter project name..."
                        style={{ width: "100%" }}
                      />
                    </Form.Item>
                  </td>
                  <td>
                  
            <Image
              src="/60111.jpg"
              width={60}
              height={60}
              alt="Project logo"
              className="rounded-full"
              style={{ width: "auto", height: "auto" }}
            />
                  </td>
                </tr>
                <tr>
                <td className="flex float-right  items-center justify-center mt-1 ">
                    <label className=" align-middle text-sm font-medium ">
                      Members:
                    </label>
                  </td>
                  <td colSpan={4}>
                    <Form.Item name="project_members" className="mb-0">
                      <TokenEdit
                        placeholder="Select projeect members"
                        endpoint="users"
                      />
                    </Form.Item>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan={4}>
                    <Form.Item name="project_description" className="mb-0">
                      <TextArea
                        rows={10}
                        cols={60}
                        className="mt-1 p-1 w-full border rounded-md"
                      />
                    </Form.Item>
                  </td>
                </tr>
              </tbody>
            </table>
          </Form>
        </div>
       
      </div>
      <div>
        <div className="bg-white rounded-md w-full shadow-md h-5">

        </div>
      </div>
    </div>
  );
}

export default ProjectForm;
