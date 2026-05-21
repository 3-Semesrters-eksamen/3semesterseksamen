import { FaTwitter } from "react-icons/fa";

const tweets = [
  { id: 1, text: "It is a long established fact that a reader will be distracted by the readable...", time: "5 hours ago" },
  { id: 2, text: "It is a long established fact that a reader will be distracted by the readable...", time: "5 hours ago" },
];

export default function SocialContainer() {
  return (
    <div>
      <p className="mb-6 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#e8004d]">Recent Tweets</p>
      {tweets.map((tweet) => (
        <div key={tweet.id} className="flex gap-3 mb-4">
          <FaTwitter className="mt-1 shrink-0 text-[#e8004d]" size={16} />
          <div>
            <p className="text-white text-sm font-semibold leading-snug">{tweet.text}</p>
            <span className="text-pink-500 text-xs">{tweet.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
