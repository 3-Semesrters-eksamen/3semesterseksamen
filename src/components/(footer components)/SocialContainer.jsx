import TweetItem from "./TweetItem";

const tweets = [
  { id: 1, text: "It is a long established fact that a reader will be distracted by the readable...", time: "5 hours ago" },
  { id: 2, text: "It is a long established fact that a reader will be distracted by the readable...", time: "5 hours ago" },
];

export default function SocialContainer() {
  return (
    <div>
      <p className="mb-6 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#e8004d]">Recent Tweets</p>
      {tweets.map((tweet) => (
        <TweetItem key={tweet.id} text={tweet.text} time={tweet.time} />
      ))}
    </div>
  );
}
