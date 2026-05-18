import PickTable from "./PickTable";
import ReserveTable from "./ReserveTable";
import H1 from "@/components/(globalComponents)/H1";

export default function BookTableContainer() {
  return (
    <div className=" bg-[#111]">
      <div>
        <div className="flex items-center justify-center">
          <H1 className="text-white text-xl mb-6">BOOK TABLE</H1>
        </div>

        <PickTable />
        <ReserveTable />
      </div>
    </div>
  );
}
