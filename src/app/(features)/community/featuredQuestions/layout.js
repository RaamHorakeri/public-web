import { Suspense } from "react";
import Loading from "./loading";

export default function Layout({ children }) {
  return (
    <div>
      <div className="container mx-auto  mt-16 flex justify-between">
        <Suspense fallback={<Loading />} />
        {children}
      </div>
    </div>
  );
}
