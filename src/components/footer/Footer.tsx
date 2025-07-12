import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { PiLinktreeLogo } from "react-icons/pi";

export const Footer = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 justify-center mb-8">
        {icons.map((icon) => (
          <a
            key={icon.name}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gold transition-colors"
          >
            <icon.Icon className="text-5xl outline-2 rounded-full p-2" />
          </a>
        ))}
      </div>

      <p className="text-[20px] text-white font-poppins text-center">
        With &lt;3 from the hexlabs team <br />
        <a
          className="underline"
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
        >
          MLH Code of Conduct
        </a>
      </p>

      <img src="/footer.webp" alt="footer graphic" className="w-full" />
    </div>
  );
};

const icons = [
  {
    name: "X",
    Icon: FaXTwitter,
    link: "https://x.com/thehexlabs",
  },
  {
    name: "LinkTree",
    Icon: PiLinktreeLogo,
    link: "https://linktr.ee/thehexlabs",
  },
  {
    name: "Facebook",
    Icon: FaFacebook,
    link: "https://www.facebook.com/TheHexLabs/",
  },
  {
    name: "Website",
    Icon: IoGlobeOutline,
    link: "https://hexlabs.org/",
  },
  {
    name: "Instagram",
    Icon: FaInstagram,
    link: "https://www.instagram.com/thehexlabs/",
  },
];
