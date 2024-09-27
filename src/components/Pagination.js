"use client";

import Link from "next/link"; // Import Link from next/link
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, forwardRef } from "react";

const Pagination = forwardRef(({ totalPages }, ref) => {
  const searchParams = useSearchParams();
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter();
  const initialPage = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    // Update the current page when the URL changes
    setCurrentPage(initialPage);
  }, [initialPage]);

  const handlePageChange = (pageNumber) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", pageNumber);

    router.push(`${window.location.pathname}?${params.toString()}`, {
      shallow: true,
      scroll: false,
    });

    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }

    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
          className={`flex items-center justify-center p-2  rounded font-[400] text-[24px] ${
            page === currentPage ? "text-black" : "text-[#8E8E8E]"
          } w-[32px] h-[32px]`}
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
      {/* Previous Button */}
      <Link
        href={{
          pathname: pathname,
          query: {
            ...Object.fromEntries(searchParams.entries()),
            page: currentPage - 1,
          }, // Decrease page number
        }}
        shallow
      >
        <button
          disabled={currentPage === 1}
          className="flex items-center justify-center text-black rounded-lg disabled:bg-black bg-black w-[32px] h-[32px]"
        >
          <span
            className="material-symbols-outlined text-white "
            style={{ fontSize: "15px" }}
          >
            west
          </span>
        </button>
      </Link>

      {/* Render Page Numbers */}
      {renderPageNumbers()}

      {/* Next Button */}
      <Link
        href={{
          pathname: pathname,
          query: {
            ...Object.fromEntries(searchParams.entries()),
            page: currentPage + 1,
          }, // Increase page number
        }}
        shallow
      >
        <button
          disabled={currentPage === totalPages}
          className="flex items-center justify-center text-black rounded-lg disabled:bg-black bg-black w-[32px] h-[32px]"
        >
          <span
            className="material-symbols-outlined text-white"
            style={{ fontSize: "15px" }}
          >
            east
          </span>
        </button>
      </Link>
    </div>
  );
});

Pagination.displayName = "Pagination";
export default Pagination;
