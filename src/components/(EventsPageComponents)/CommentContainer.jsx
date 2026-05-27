import Btn from "../(globalComponents)/Btn";

const CommentContainer = () => {
  return (
    <div>
      <div
        className="min-h-screen flex flex-col p-8 px-6 box-border"
        style={{
          backgroundImage: "url('/backgrounds/pattern_bg.jpg')",
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        <div className="flex flex-col gap-3 mb-6">
          <input
            className="
            w-full bg-transparent border border-white rounded-sm
            text-white text-sm tracking-wider px-4 py-4 outline-none
            transition-colors duration-200 placeholder-white/30
            focus:border-[#e8003a]
          "
            type="text"
            placeholder="Your Name"
          />
          <input
            className="
            w-full bg-transparent border border-white rounded-sm
            text-white text-sm tracking-wider px-4 py-4 outline-none
            transition-colors duration-200 placeholder-white/30
            focus:border-[#e8003a]
          "
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className="
            w-full bg-transparent border border-white rounded-sm
            text-white text-sm tracking-wider px-4 py-4 outline-none
            transition-colors duration-200 placeholder-white/30
            focus:border-[#e8003a] resize-y min-h-80
          "
            placeholder="Your Comment"
          />
        </div>

        <div className="flex justify-end">
          <Btn label="Submit" />
        </div>
      </div>
    </div>
  );
};

export default CommentContainer;
