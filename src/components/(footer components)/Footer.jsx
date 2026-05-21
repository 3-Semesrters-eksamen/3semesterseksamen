import FooterContainer from "@/components/(footer components)/FooterContainer.jsx";
import FooterInfo from "@/components/(footer components)/FooterInfo.jsx";
import FooterPost from "@/components/(footer components)/FooterPost.jsx";
import SocialContainer from "@/components/(footer components)/FooterPost.jsx";

export default function Footer() {
  return (
    <section
      style={{
        backgroundImage: "url('/events/LandingBg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="relative w-full overflow-hidden font-sans text-white"
    >
      <FooterContainer colLeft={<FooterInfo />} colMiddle={<FooterPost />} colRight={<SocialContainer />} />
    </section>
  );
}
