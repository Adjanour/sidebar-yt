
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex mt-[200px] align-middle justify-center dark:text-white dark:bg-black">
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}
