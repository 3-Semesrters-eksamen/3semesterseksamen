import Image from "next/image";
export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-56 md:w-72 lg:w-[28rem]">
        <Image src="/icon/Logo.svg" alt="Night Club" width={0} height={0} className="w-full h-auto" />
      </div>

      <div className="w-56 md:w-72 lg:w-[28rem]">
        <Image src="/hero/hagt.svg" alt="Have a good time" width={0} height={0} className="w-full h-auto" />
      </div>

      <div className="w-72 md:w-72 lg:w-[20rem] mt-1">
        <Image src="/bottom_line.png" alt="" width={1364} height={20} className="w-96 h-20" />
      </div>
    </div>
  );
}
