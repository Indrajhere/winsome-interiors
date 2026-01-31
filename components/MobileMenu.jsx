"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import RequestQuoteBtn from "./RequestQuoteBtn";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button aria-label="Open menu">
          <Menu className="h-6 w-6 text-sand" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="top"
        className="h-screen w-full p-0 [&>button]:hidden"
      >
        {/* Top bar */}
        <div className="h-16 px-6 flex items-center justify-between border-b">
          <span className="text-lg font-semibold"></span>

          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-0"
          >
            <X className="h-8 w-8" />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] gap-8 text-xl text-olive font-medium">

          <Image src="/images/logo-olive.png" alt="Winsome Interiors Logo" width={200} height={50} />

          <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="/projects" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About Us
          </Link>

                       <RequestQuoteBtn inverted = {false}/>

         
        </nav>
      </SheetContent>
    </Sheet>
  );
}
