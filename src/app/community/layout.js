import NavlinkSearch from "@/app/community/_components/NavLinkSearch";
import PageTitle from "@/app/community/_components/PageTitle";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div>
      <PageTitle />
      <div className="container mx-auto   mt-16 flex justify-between">
        {/* Left Section */}
        <NavlinkSearch />

        {/* Right Section */}

        {children}
      </div>
    </div>
  );
}
