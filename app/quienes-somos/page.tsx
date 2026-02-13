import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Quiénes somos – AgentIA",
  description:
    "Conoce al equipo detrás de AgentIA y nuestra misión de democratizar la inteligencia artificial para empresas de todos los tamaños.",
};

const team = [
  {
    name: "Ana Torres",
    role: "CEO & Co-fundadora",
    bio: "Ingeniera de sistemas con 12 años construyendo productos SaaS en mercados hispanohablantes.",
  },
  {
    name: "Carlos Vega",
    role: "CTO & Co-fundador",
    bio: "Especialista en LLMs y arquitecturas distribuidas. Ex-investigador en NLP en la Universidad Politécnica.",
  },
  {
    name: "Laura Méndez",
    role: "Head of Product",
    bio: "Diseñadora de experiencias con foco en reducir la fricción entre humanos y sistemas inteligentes.",
  },
];

export default function QuienesSomosPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Quiénes somos
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Somos un equipo de ingenieros, diseñadores y expertos en IA con una
            misión clara: que cualquier empresa pueda beneficiarse del poder de
            los agentes inteligentes.
          </p>
        </div>

        {/* Misión */}
        <section className="mb-20 rounded-2xl bg-muted/40 p-8 sm:p-12">
          <h2 className="mb-4 text-2xl font-bold">Nuestra misión</h2>
          <p className="mb-4 text-muted-foreground">
            Creemos que la inteligencia artificial no debería ser exclusiva de
            las grandes corporaciones. AgentIA nació en 2023 con el objetivo de
            poner en manos de pymes y startups la misma tecnología que usan las
            empresas del Fortune 500.
          </p>
          <p className="text-muted-foreground">
            No vendemos humo: cada funcionalidad que lanzamos ha sido validada
            por clientes reales que miden resultados reales. Si no funciona, no
            lo publicamos.
          </p>
        </section>

        {/* Equipo */}
        <section className="mb-20">
          <h2 className="mb-10 text-2xl font-bold">El equipo</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-border p-6"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                  {member.name[0]}
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="mb-2 text-sm text-primary/80">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <p className="mb-6 text-muted-foreground">
            ¿Quieres saber más o hablar con el equipo?
          </p>
          <Button asChild size="lg">
            <Link href="/#registro">Solicita una demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
