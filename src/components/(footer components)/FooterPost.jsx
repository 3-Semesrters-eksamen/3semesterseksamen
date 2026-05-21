import Image from "next/image";
import FooterPostCards from "@/components/(footer components)/FooterPostCards.jsx";

const FooterPost = () => {
  return (
    <div>
      <p className="mb-6 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#e8004d]">Recent Posts</p>
      <FooterPostCards pic={<Image src="/contentImg/recent_post1.jpg" alt="post1" width={80} height={80} />} text={"Lorem Ipsum is simply dummy text of the printing and typesetting."} date={"April 17, 2018"} />
      <FooterPostCards pic={<Image src="/contentImg/recent_post2.jpg" alt="post2" width={80} height={80} />} text={"Lorem Ipsum is simply dummy text of the printing and typesetting."} date={"April 17, 2018"} />
    </div>
  );
};

export default FooterPost;
