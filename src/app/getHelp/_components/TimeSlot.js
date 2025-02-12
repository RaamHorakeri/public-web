export default function TimeSlot({ slot, activeId, setActiveId }) {
  return (
    <button
      onClick={() => setActiveId(slot?.id)}
      className={`border-[1px] p-2  rounded-[8px] min-w-[138px] ${activeId === slot?.id ? "border-[#01010C] border-[2px]  font-[600]" : "border-[#E2E0FF]"}`}
    >
      {slot?.slot}
    </button>
  );
}
