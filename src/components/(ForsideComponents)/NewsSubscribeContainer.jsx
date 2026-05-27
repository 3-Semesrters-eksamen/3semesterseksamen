import Button from "@/components/(globalComponents)/Btn";

const NewsSubsriberContainer = () => {
  return (
    <main className="">
      <div className="flex items-center justify-center px-8 py-15 pb-20 bg-black max-w-[2200px] mx-auto ">
        <div className="w-full max-w-[420px]">
          <p className="text-lg uppercase font-normal text-white text-center mb-[0.6rem]">WANT THE LATES NIGHT CLUB NEWS</p>

          <p className="text-sm text-white text-center mb-8 leading-[1.6]">
            Subscribe to our newsletter and never miss an <span className="text-nightclub-pink">Event</span>
          </p>

          <div className="flex items-center gap-4">
            <input type="text" placeholder="Enter your email" className="border-b border-white w-72 text-white placeholder:text-white/50 bg-transparent px-4 py-3 hover:border-nightclub-pink focus:outline-none" />
            <Button label="SUBSCRIBE" className="inline-flex m-6" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsSubsriberContainer;
