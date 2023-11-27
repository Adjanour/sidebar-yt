'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from 'next/image';
import "@/app/globals.css";
import Sidebar from "@/components/sidebar";
import { registerLicense } from '@syncfusion/ej2-base';
import { useState } from "react";
import { Input,Button } from "antd";
import { cn } from "@/lib/utils";
import StyledComponentsRegistry from "@/lib/AntdRegistry"
import ButtonComponent from "@/components/Button";
import { SearchOutlined,SaveOutlined,PlusOutlined,CloseOutlined,PrinterOutlined,UploadOutlined} from '@ant-design/icons';
import NavbarTimeComponent from "@/components/Clock";
import { IntlProvider } from 'react-intl';
import dynamic from 'next/dynamic'
 
const NoSSR = dynamic(() => import('@/components/Clock'), { ssr: false })
// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2VlhhQlJCfV5AQmJKYVF2R2BJfVRydF9DZEwxOX1dQl9gSH9SdURnWnxed3xcQGA=');


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen,setIsOpen] = useState(true)
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex  gap-0 dark:text-white dark:bg-black">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          <IntlProvider locale="en">
          <div className={cn("relative",isOpen ?"open":"close")}>
            <div className={cn("bg-white fixed z-[100]  justify-content-center w-fit rounded-md shadow-md flex grid-cols-10 gap-1 border mb-2  p-3  dark:bg-black",isOpen ?"ml-[60px]":"ml-[80px]")}>
              <div className="bg-white rounded-md shadow-md dark:text-black  p-1">2 of 10</div>
              <Button icon={<CloseOutlined />} className="dark:text-white" type="default">Close</Button>
              <Button icon={<SaveOutlined />} className="dark:text-white" type="default">Save</Button>
              <Button icon={<PlusOutlined />} className="dark:text-white" type="default">New</Button>
              
              <div className="w-fit"><Input showCount placeholder="Search..." style={{width:'100%'}}
      suffix={<SearchOutlined onClick={()=>alert("Search successful")}/>}/></div>
              <div><Button className="dark:text-white" icon={<UploadOutlined/>}>Upload</Button></div>
              <div><Button className="dark:text-white" icon={<PrinterOutlined/>}>Print</Button></div>
             <div className="bg-blue-500 text-white rounded-md shadow-md dark:bg-white dark:text-black p-1"><NoSSR/></div>
              <div className="flex justify-center align-middlebg-white rounded-md  w-fit p-1 text-black dark:text-white shadow-md"><p>Welcome Bernard</p></div>
              <div className="flex justify-center align-middle shadow-lg rounded-full w-fit"><Image src="/60111.jpg"style={{width:"auto",height:"auto"}} width="30" height="30" alt="user image" className="rounded-full"/></div>
            </div>
            
              <StyledComponentsRegistry><div className="mt-[60px]">{children}</div></StyledComponentsRegistry>
           
          </div>
          </IntlProvider>
          
        </div>
      </body>
    </html>
  );
}
