import FooterPost from "./FooterPost";

const posts = [
  { id: 1, image: null, text: "Lorem Ipsum is simply dummy text of the printing and typesetting.", date: "April 17, 2018" },
  { id: 2, image: null, text: "Lorem Ipsum is simply dummy text of the printing and typesetting.", date: "April 17, 2018" },
];

export default function FooterNews() {
  return (
    <div>
      <p className="mb-6 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#e8004d]">Recent Posts</p>
      {posts.map((post) => (
        <FooterPost key={post.id} image={post.image} text={post.text} date={post.date} />
      ))}
    </div>
  );
}
