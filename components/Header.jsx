"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import RequestQuoteBtn from "./RequestQuoteBtn";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setHidden(false);
        return;
      }

      if (currentScrollY > lastScrollY) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  const navLinkClasses = `relative after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0
   after:bg-sand/70 after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-olive/80 transition-transform duration-300 ease-in-out
    ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >


      <div className="mx-auto container px-6 min-h-24 md:py-6 h-16 flex items-center justify-between">
        {/* Logo */}

        <Link href="/" className="text-xl font-semibold text-olive hidden sm:block ml-10">
          <Image
            src="/images/logo-cream-new.png"
            alt="Winsome Interiors Logo"
            width={100}
            height={60}
          />
        </Link>

         <Link href="/" className="text-xl font-semibold text-olive sm:hidden">
          <Image
            src="/images/logo-cream-kitchen.png"
            alt="Winsome Interiors Logo"
            width={80}
            height={60}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 text-cream text-lg font-light">
          <Link className={navLinkClasses} href="/">Home</Link>
          <Link
            className={navLinkClasses}
            href="/services">
            Services
          </Link>
          <Link className={navLinkClasses} href="/contact">Contact</Link>
          <Link className={navLinkClasses} href="/about">About Us</Link>
        </nav>

        <div className="sm:hidden">
          <Image src="/images/logo-cream-text.png"
            alt="Winsome Interiors Logo"
            width={160}
             height={50} />
        </div>

        {/* Desktop button */}
        <div className="hidden sm:block">
          <RequestQuoteBtn inverted={true} />
        </div>

        {/* Mobile menu */}
        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
