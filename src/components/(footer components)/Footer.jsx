import FooterContainer from "./FooterContainer";
import FooterInfo from "./FooterInfo";
import FooterNews from "./FooterNews";
import SocialContainer from "./SocialContainer";

export default function Footer() {
  return <FooterContainer colLeft={<FooterInfo />} colMiddle={<FooterNews />} colRight={<SocialContainer />} />;
}
