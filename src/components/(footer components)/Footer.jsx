import FooterContainer from "./FooterContainer";
import FooterInfo from "./FooterInfo";
import FooterPost from "./FooterPost";
import SocialContainer from "./SocialContainer";

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
