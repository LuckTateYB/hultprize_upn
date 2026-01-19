import { motion } from "framer-motion";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import { SiTiktok, SiWhatsapp } from "react-icons/si";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/hult-prize-at-upn-lima/posts/?feedView=all", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/hultprizeupn/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@HultPrizeUPNLIMA", label: "YouTube" },
    { icon: SiTiktok, href: "https://www.tiktok.com/@hultprize.upn", label: "TikTok" },
  { icon: SiWhatsapp, href: "https://chat.whatsapp.com/IGkzVgCKm8Y1jTLbRxcnmH", label: "WhatsApp" },
];

const TopBar = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-secondary py-2"
    >
      <div className="container mx-auto px-4 flex justify-end items-center gap-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground/80 hover:text-accent transition-colors"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={label}
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default TopBar;
