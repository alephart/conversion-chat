import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/politica-privacidad", label: "Política de privacidad" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#060c1f]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/">
              <Image
                src="/images/logos/logo-positivo.png"
                alt="Conversion Chat"
                width={160}
                height={54}
                className="h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-xs text-white/40">
              IA aplicada a conversaciones médicas reales.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-xs text-white/40">
            &copy; {year} SANGO Laboratorio Creativo
          </p>
        </div>
      </div>
    </footer>
  );
}
