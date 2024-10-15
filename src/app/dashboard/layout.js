import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex  min-h-screen">
      <div>
        <SideNav />
      </div>
      <div className="flex-grow flex flex-col">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}
