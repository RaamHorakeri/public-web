"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto  mt-16 flex justify-center items-center flex-col">
      <h2>{error.message || "Something went wrong!"}</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
