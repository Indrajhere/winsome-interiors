import Image from "next/image";
import { contactDetails, footerLinks, socialLinks } from "../lib/const";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

// Define social media icons mapping
const socialIcons = {
  Facebook: <FaFacebookF size={20} />,
  Twitter: <FaTwitter size={20} />,
  Instagram: <FaInstagram size={20} />,
  LinkedIn: <FaLinkedinIn size={20} />,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const { quickLinks, policies } = footerLinks;

  return (

    <footer
      id="footer"
      className="bg-[var(--color-olive)] text-[var(--color-cream)] pt-16 pb-8 border-t border-primary"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 mb-12 items-start">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image src="/images/logo-cream-new.png"
               alt="winsome Logo" 
               width = {140}
               height ={120}
               />
              {/* <h3 className="text-xl font-medium text-white">Antarnaa</h3> */}
            </div>
            <p className="mb-4 text-cream">
              Your trusted companion for authentic Ayurvedic wellness,
              connecting you with expert practitioners for personalized care.
            </p>
            <div className="flex gap-4">
              {Object.keys(socialLinks).map((platform, index) => (
                <a
                  key={index}
                  href={socialLinks[platform]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream hover:text-sand transition"
                  aria-label={platform}
                >
                  {socialIcons[platform]}
                </a>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div className="md:pt-12">
            <h3 className="text-xl font-medium mb-4 text-cream">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-cream hover:text-sand transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* /* Contact Us */}
          <div className="md:pt-12">
            <h3 className="text-xl font-medium mb-4 text-cream">Contact Us</h3>
            <ul className="space-y-2 grid grid-cols-12 items-center justify-center">
              <FaMapMarkerAlt size={22} className="text-white" />
              <a
                href={contactDetails.location}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-sand transition col-span-11"
              >
                {contactDetails.address}
              </a>

              <FaPhoneAlt size={20} className="text-cream mt-1" />
              <a
                href="tel:+919899898998"
                className="text-cream col-span-11 hover:text-sand transition"
              >
                {contactDetails.phone}
              </a>

              <FaEnvelope size={20} className="text-cream mt-1" />
              <a
                href={`mailto:${contactDetails.email}`}
                className="text-cream col-span-11 hover:text-sand transition"
              >
                {contactDetails.email}
              </a>

              <FaGlobe size={20} className="text-white mt-2" />
              <a
                href={`http://${contactDetails.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream col-span-11 hover:text-sand transition"
              >
                {contactDetails.website}
              </a>
            </ul>
          </div>
        </div>
        {/* Bottom Row */}
        <div className="border-t border-sand pt-8 text-center text-cream">
          <p className="text-cream">
            © {currentYear} Winsome Interiors. All rights reserved.
          </p>
          {/* <div className="flex justify-center md:gap-12 gap-6 mt-4">
            {policies.map((policy, index) => (
              <Link
                key={index}
                href={policy.href}
                className="text-cream hover:text-sand transition"
              >
                {policy.label}
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
