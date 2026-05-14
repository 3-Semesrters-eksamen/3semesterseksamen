import ReserveForm from "./ReserveForm";
const NIGHTS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function ReserveTable() {
  return (
    <div className="border border-[#2a2a2a] rounded-[3px] p-[16px_14px] flex flex-col gap-3.5">
      <h2 className="text-[11px] font-bold tracking-[0.22em] text-[#aaa] m-0 pb-2.5 border-b border-[#2a2a2a] font-mono">BOOK A TABLE</h2>

      <ReserveForm />
    </div>
  );
}
