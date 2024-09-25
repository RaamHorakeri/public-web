import clsx from "clsx";
import { getDate } from "date-fns";

const Cell = ({
  isArrow = false,
  onClick,
  children,
  className,
  isActive = false,
  isInRange = false,
  selectedValue,
}) => {
  const today = new Date();
  const month = today.getMonth();
  const selectedMonth = selectedValue?.getMonth();
  const dayOfMonth = getDate(today);
  const isCurrentMonth = month === selectedMonth;
  const isToday = dayOfMonth === children && isCurrentMonth;

  return (
    <>
      <div
        onClick={!isActive && (isInRange || isArrow) ? onClick : undefined}
        className={clsx(
          "h-[45px]   flex items-center justify-center select-none transition-colors rounded-[48px]",
          {
            "cursor-pointer hover:bg-gray-200 active:bg-gray-200 w-[48px]":
              !isActive && onClick,
            "font-bold text-white bg-black w-[48px]":
              isActive && isCurrentMonth,
            "bg-[#EBEAFF]": isCurrentMonth && isInRange,
          },
          className,
        )}
      >
        {children}
        {isToday && <span className=" absolute mt-4 text-[20px]">.</span>}
      </div>
    </>
  );
};

export default Cell;
