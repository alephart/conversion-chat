import Link from "next/link";

const footerLinks = [
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/politica-privacidad", label: "Política de privacidad" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight">
            AgentIA
          </Link>

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

          <p className="text-sm text-muted-foreground">
            &copy; {year} AgentIA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
