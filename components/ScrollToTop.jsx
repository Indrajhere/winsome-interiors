"use client";

import { useEffect, useState } from "react";
import { RiArrowUpDoubleFill } from "react-icons/ri";


export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        flex items-center justify-center
        bg-white/20 backdrop-blur-md
        border border-white/30
        text-black
cursor-pointer
        shadow-lg
        hover:bg-white/30
        hover:scale-110 hover:shadow-xl
        transition-all duration-300
      "
        >
            <RiArrowUpDoubleFill size={24} strokeWidth={0.5} />
        </button>
    );
}
