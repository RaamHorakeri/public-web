'use client'

import Image from 'next/image';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {


    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            onPageChange(pageNumber);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

       
        pageNumbers.push(1);

       
        const startPage = Math.max(currentPage - 2, 2);
        const endPage = Math.min(currentPage + 2, totalPages - 1);

       
        if (startPage > 2) {
            pageNumbers.push('...');
        }
       
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        if (endPage < totalPages - 1) {
            pageNumbers.push('...');
        }

        if (totalPages > 1) {
            pageNumbers.push(totalPages);
        }

        return pageNumbers.map((page, index) =>
            typeof page === 'number' ? (
                <button
                    key={index}
                    onClick={() => handlePageChange(page)}
                    className={` flex items-center justify-center p-2 border rounded ${page === currentPage ? 'bg-[#D9D9D9] text-white' : 'bg-white text-[#000000]'} w-[32px] h-[32px] `}
                >
                    {page}
                </button>
            ) : (
                <span key={index} className="p-2">
                    {page}
                </span>
            )
        );

    }

    return (
        <div className="flex justify-center items-center space-x-2 mt-4 mb-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center text-white bg-white rounded disabled:bg-white border border-[#D9D9D9] w-[32px] h-[32px]"
            >
                <Image src='/images/left.png' alt='leftIcon' width={12} height={12} />
            </button>

            {renderPageNumbers()}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center text-white bg-white rounded disabled:bg-white border border-[#D9D9D9] w-[32px] h-[32px] "
            >
                <Image src='/images/right.png' alt='rightIcon' width={12} height={12} />
            </button>
        </div>
    );
};

export default Pagination;
