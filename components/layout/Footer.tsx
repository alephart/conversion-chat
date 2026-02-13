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
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/">
              {/* Light mode: logo negro */}
              <Image
                src="/images/logos/logo-negativo.png"
                alt="Conversion Chat"
                width={160}
                height={54}
                className="h-9 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity block dark:hidden"
              />
              {/* Dark mode: logo blanco */}
              <Image
                src="/images/logos/logo-positivo.png"
                alt="Conversion Chat"
                width={160}
                height={54}
                className="h-9 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity hidden dark:block"
              />
            </Link>
            <p className="text-xs text-muted-foreground">
              IA aplicada a conversaciones médicas reales.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground">
            &copy; {year} SANGO Laboratorio Creativo
          </p>
        </div>
      </div>
    </footer>
  );
}
