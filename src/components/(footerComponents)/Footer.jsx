import FooterContainer from "@/components/(footerComponents)/FooterContainer.jsx";
import FooterInfo from "@/components/(footerComponents)/FooterInfo.jsx";
import FooterPost from "@/components/(footerComponents)/FooterPost.jsx";
import SocialContainer from "@/components/(footerComponents)/SocialContainer";

export default function Footer() {
  return (
    <section
      className="relative w-full overflow-hidden max-w-[1400px] mx-auto px-4 "
      style={{
        backgroundImage: "url('/backgrounds/footerbg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/90 z-10  " />

      <div className="relative z-20 max-w-[1200px] mx-auto px-4">
        <FooterContainer colLeft={<FooterInfo />} colMiddle={<FooterPost />} colRight={<SocialContainer />} />
      </div>
    </section>
  );
}
