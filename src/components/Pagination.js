"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Pagination = ({ totalPages }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")),
  );

  const handlePageChange = (pageNumber) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", pageNumber);
    router.push(`${window.location.pathname}?${params.toString()}`, undefined, {
      shallow: true,
    });
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    pageNumbers.push(1);

    const startPage = Math.max(currentPage - 2, 2);
    const endPage = Math.min(currentPage + 2, totalPages - 1);

    if (startPage > 2) {
      pageNumbers.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages - 1) {
      pageNumbers.push("...");
    }

    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers.map((page, index) =>
      typeof page === "number" ? (
        <button
          key={index}
          onClick={() => handlePageChange(page)}
          className={` flex items-center justify-center p-2 border rounded ${page === currentPage ? "bg-[#D9D9D9] text-white" : "bg-white text-[#000000]"} w-[32px] h-[32px] `}
        >
          {page}
        </button>
      ) : (
        <span key={index} className="p-2">
          {page}
        </span>
      ),
    );
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4 mb-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center text-black bg-white rounded disabled:bg-white border border-[#D9D9D9] w-[32px] h-[32px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center text-black bg-white rounded disabled:bg-white border border-[#D9D9D9] w-[32px] h-[32px] "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
