import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div>
      <div className="container mx-auto  mt-16 flex justify-between">
        {/* <Suspense fallback={<Loading />} > */}
        {children}
        {/* </Suspense> */}
      </div>
    </div>
  );
}
