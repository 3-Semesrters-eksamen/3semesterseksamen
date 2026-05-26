import FooterButton from "@/components/(footerComponents)/FooterButton.jsx";
import { FaSnapchatGhost, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function SocialConList() {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Stay Connected With Us</p>
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
