import ReserveForm from "./ReserveForm";
const NIGHTS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function ReserveTable() {
  return (
    <div className=" md:max-w-xl border border-[#2a2a2a] rounded min-h-screen max-w-md mx-auto p-4 flex flex-col gap-3">
      <ReserveForm />
    </div>
  );
}
