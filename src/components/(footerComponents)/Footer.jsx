import FooterContainer from "@/components/(footerComponents)/FooterContainer.jsx";
import FooterInfo from "@/components/(footerComponents)/FooterInfo.jsx";
import FooterPost from "@/components/(footerComponents)/FooterPost.jsx";
import SocialContainer from "@/components/(footerComponents)/SocialContainer";

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
