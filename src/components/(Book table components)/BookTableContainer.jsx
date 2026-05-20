import PickTable from "./PickTable";
import ReserveTable from "./ReserveTable";
import LilleHero from "@/components/(globalComponents)/LilleHero";

export default function BookTableContainer() {
  return (
    <div className=" bg-[#111]">
      <div>
        <LilleHero className="text-3xl md:text-5xl">BOOK A TABLE</LilleHero>

        <PickTable />
        <ReserveTable />
      </div>
    </div>
  );
}
