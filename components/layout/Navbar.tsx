"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#060c1f]/90 backdrop-blur supports-[backdrop-filter]:bg-[#060c1f]/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/logo-positivo.png"
            alt="Conversion Chat"
            width={180}
            height={60}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/80 glow-cyan"
          >
            <Link href="/#demo">Ver demo en vivo</Link>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-white/80 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#060c1f] md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="mt-2 glow-cyan">
              <Link href="/#demo" onClick={() => setOpen(false)}>
                Ver demo en vivo
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
