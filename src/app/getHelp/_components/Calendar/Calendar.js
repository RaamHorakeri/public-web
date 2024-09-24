import { useEffect, useState } from "react";
import Calendar from "react-calendar";

export default function MyCalendar({ setActiveDate }) {
  const [value, onChange] = useState(new Date());
  useEffect(() => {
    setActiveDate(value);
  }, [value, setActiveDate]);
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
