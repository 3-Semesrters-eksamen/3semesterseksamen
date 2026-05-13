import FooterButton from "./FooterButton";
import { FaSnapchatGhost, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function SocialConList() {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/45">Stay Connected With Us</p>
      <div className="flex gap-3">
        <FooterButton href="#" ariaLabel="Facebook">
          <FaFacebook size={18} />
        </FooterButton>
        <FooterButton href="#" ariaLabel="Twitter">
          <FaTwitter size={18} />
        </FooterButton>
        <FooterButton href="#" ariaLabel="Snapchat">
          <FaSnapchatGhost size={18} />
        </FooterButton>
        <FooterButton href="#" ariaLabel="Instagram">
          <FaInstagram size={18} />
        </FooterButton>
      </div>
    </div>
  );
}
