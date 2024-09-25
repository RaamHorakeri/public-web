import { useEffect, useState } from "react";
import { getMonth } from "date-fns";
import Calendar from "./Calendar";

export default function MyCalendar({ setActiveId, activeDate, setActiveDate }) {
  const [value, onChange] = useState();

  useEffect(() => {
    const previousMonth = getMonth(value);
    const today = new Date();
    const currentmonth = today.getMonth();

    if (
      (currentmonth !== previousMonth && activeDate) ||
      (currentmonth == previousMonth && !activeDate && value)
    ) {
      setActiveDate(value);
    }
  }, [value, setActiveDate]);
  return (
    <div>
      <Calendar
        setActiveId={setActiveId}
        setActiveDate={setActiveDate}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
