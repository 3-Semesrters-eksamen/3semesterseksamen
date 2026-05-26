const NewsSubsriberContainer = () => {
  return (
    <main className="">
      <div className="flex items-center justify-center p-8 px-4 bg-black max-w-[2200px] mx-auto px-4">
        <div className="w-full max-w-[420px]">
          <p className="text-[0.78rem] font-bold tracking-[0.12em] text-white text-center mb-[0.6rem]">WANT THE LATES NIGHT CLUB NEWS</p>

          <p className="text-[0.75rem] text-white text-center mb-8 leading-[1.6]">
            Subscribe to our newsletter and never miss an <span className="text-[#e8003a]">Event</span>
          </p>

          <input type="text" placeholder="Enter your email" className="border-b-2 border-white text-white placeholder:text-white/50 bg-transparent px-4 py-2 mr-4" />
          <button className=" text-white px-4 py-2 border-t-2 border-b-2 border-white">Subscribe</button>
        </div>
      </div>
    </main>
  );
};
<span className="text-[#e8003a]">CLUB</span>;
export default NewsSubsriberContainer;
