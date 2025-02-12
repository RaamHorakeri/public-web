import {
  add,
  differenceInDays,
  endOfMonth,
  format,
  setDate,
  startOfMonth,
  sub,
  getDate,
} from "date-fns";
import Cell from "./Cell";
import { useState } from "react";

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function rangeArray(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

export default function Calendar({
  setActiveId,
  setActiveDate,
  value = new Date(),
  onChange,
}) {
  const [displayValue, setDisplayValue] = useState(value);

  const startDate = startOfMonth(displayValue);
  const endDate = endOfMonth(displayValue);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

  const prevMonth = () => {
    setDisplayValue(sub(displayValue, { months: 1 }));
    setActiveDate(null);
    setActiveCell(null);
    setActiveId(null);
  };
  const nextMonth = () => {
    setDisplayValue(add(displayValue, { months: 1 }));
    setActiveDate(null);
    setActiveCell(null);
    setActiveId(null);
  };

  const today = new Date();
  const dayOfMonth = getDate(today);
  const Range = rangeArray(dayOfMonth, dayOfMonth + 4);

  const [activeCell, setActiveCell] = useState(null);

  const handleClick = (index) => {
    setActiveCell(index);
    const date = setDate(displayValue, index + 1);
    onChange(date);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-7 items-center justify-center text-center gap-[2px]">
        <Cell isArrow={true} onClick={prevMonth}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "16px" }}
          >
            arrow_back_ios
          </span>
        </Cell>
        <Cell></Cell>
        <Cell className="col-span-3 text-[#1A1A1A] font-[700] text-[18px]">
          {format(displayValue, "LLLL yyyy")}
        </Cell>
        <Cell></Cell>
        <Cell isArrow={true} onClick={nextMonth}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "16px" }}
          >
            arrow_forward_ios
          </span>
        </Cell>

        {weeks.map((week) => (
          <Cell
            key={week}
            className=" uppercase text-[#1A1A1A] font-[700] text-[18px]"
          >
            {week}
          </Cell>
        ))}

        {Array.from({ length: prefixDays }).map((_, index) => (
          <Cell key={index} />
        ))}

        {Array.from({ length: numDays }).map((_, index) => {
          const date = index + 1;

          return (
            <Cell
              key={date}
              isActive={activeCell === index}
              onClick={() => handleClick(index)}
              isInRange={Range.includes(date)}
              selectedValue={displayValue}
            >
              {date}
            </Cell>
          );
        })}

        {Array.from({ length: suffixDays }).map((_, index) => (
          <Cell key={index} />
        ))}
      </div>
    </div>
  );
}
