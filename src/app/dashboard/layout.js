"use client";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const [display, setDisplay] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName.includes("dashboard/profile")) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  });

  return (
    <div className="flex  min-h-screen">
      <div>
        <SideNav />
      </div>
      <div className="flex-grow flex flex-col">
        {display && <DashboardHeader />}
        {children}
      </div>
    </div>
  );
}
