"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "@/app/globals.css";
import Sidebar from "@/components/sidebar";
import { registerLicense } from "@syncfusion/ej2-base";
import { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { cn } from "@/lib/utils";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import ButtonComponent from "@/components/Button";
import {
  SearchOutlined,
  SaveOutlined,
  PlusOutlined,
  CloseOutlined,
  PrinterOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import NavbarTimeComponent from "@/components/Clock";
import { IntlProvider } from "react-intl";
import dynamic from "next/dynamic";
import TaskModal from "@/components/TaskModal";
import { TaskForm2 } from "@/components/TaskForm2";

const NoSSR = dynamic(() => import("@/components/Clock"), { ssr: false });
// Registering Syncfusion license key
registerLicense(
  "ORg4AjUWIQA/Gnt2VlhhQlJCfV5AQmJKYVF2R2BJfVRydF9DZEwxOX1dQl9gSH9SdURnWnxed3xcQGA="
);

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex  gap-0 dark:text-white dark:bg-black w-fit">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          <IntlProvider locale="en">
            <div className={cn("relative", isOpen ? "open" : "close", "w-fit")}>
              <div
                className={cn(
                  "bg-white  justify-content-center w-fit rounded-md shadow-md flex lg:grid-cols-10 md:grid-clos-7 gap-1 border m-0 p-3  dark:bg-black",
                  "sticky-header",
                  isScrolling ? "fixed" : ""
                )}
              >
                <Button
                  icon={<CloseOutlined />}
                  className="dark:text-white"
                  type="default"
                >
                  Close
                </Button>
                <Button
                  icon={<SaveOutlined />}
                  className="dark:text-white"
                  type="default"
                >
                  Save
                </Button>
                <Button
                  icon={<PlusOutlined />}
                  className="dark:text-white"
                  type="default"
                >
                  New
                </Button>
                <div className="w-fit">
                  <Input
                    showCount
                    placeholder="Search..."
                    style={{ width: "100%" }}
                    suffix={
                      <SearchOutlined
                        onClick={() => alert("Search successful")}
                      />
                    }
                  />
                </div>
                <div>
                  <Button className="dark:text-white" icon={<UploadOutlined />}>
                    Upload
                  </Button>
                </div>
                <div>
                  <Button
                    className="dark:text-white"
                    icon={<PrinterOutlined />}
                  >
                    Print
                  </Button>
                </div>
                <div className="bg-blue-500 text-white h-fit mt-[0.5px] rounded-md shadow-md dark:bg-white dark:text-black p-1 w-fit flex flex-row text-sm  md:hidden lg:block">
                  <NoSSR />
                </div>
                <div className="flex justify-center text-sm mt-[0.5px] align-middlebg-white rounded-md h-fit  w-fit p-1 text-black dark:text-white shadow-md md:hidden lg:block">
                  <p>Welcome Bernard</p>
                </div>
                <div className="flex justify-center align-middle shadow-lg rounded-full w-fit h-fit">
                  <Image
                    src="/60111.jpg"
                    style={{ width: "auto", height: "auto" }}
                    width="30"
                    height="30"
                    alt="user image"
                    className="rounded-full"
                  />
                </div>
                <div className="flex justify-center align-middle shadow-lg rounded-full w-fit h-fit md:hidden lg:block">
                  <TaskModal/>
                </div>
              </div>
              <StyledComponentsRegistry>
                <div className="">{children}</div>
              </StyledComponentsRegistry>
            </div>
          </IntlProvider>
        </div>
      </body>
    </html>
  );
}
