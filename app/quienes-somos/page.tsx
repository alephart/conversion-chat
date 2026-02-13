import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Quiénes somos – Conversion Chat",
  description:
    "Conversion Chat es desarrollado por SANGO, agencia especializada en marketing médico y estrategia comercial para clínicas de medicina estética, dermatología y cirugía plástica.",
};

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
            Conversion Chat nace de la experiencia directa en consultorios y
            clínicas reales. No desarrollamos tecnología genérica — diseñamos
            sistemas conversacionales con enfoque comercial, lenguaje médico y
            uso responsable de inteligencia artificial.
          </p>
        </div>

        {/* Origen */}
        <section className="mb-16 rounded-2xl bg-muted/40 p-8 sm:p-12">
          <h2 className="mb-4 text-2xl font-bold">Desarrollado por SANGO</h2>
          <p className="mb-4 text-muted-foreground">
            Conversion Chat es una solución de inteligencia artificial aplicada
            a la conversión médica, desarrollada por{" "}
            <strong className="text-foreground">SANGO</strong>, agencia
            especializada en marketing médico, estrategia comercial y
            posicionamiento para clínicas de medicina estética, dermatología y
            cirugía plástica.
          </p>
          <p className="mb-4 text-muted-foreground">
            Durante años, en SANGO hemos acompañado médicos y equipos
            comerciales en la estructuración de sus procesos de atención, ventas
            y comunicación con pacientes. Conversion Chat surge como la
            evolución natural de ese conocimiento, integrando tecnología,
            estrategia y criterio médico en un solo sistema conversacional.
          </p>
          <p className="text-muted-foreground">
            Nace de la experiencia directa en consultorios y clínicas reales,
            entendiendo de primera mano uno de los principales puntos críticos
            del sector:{" "}
            <strong className="text-foreground">
              la conversación previa a la cita y su impacto directo en la
              conversión
            </strong>
            .
          </p>
        </section>

        {/* Propósito */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Nuestro propósito</h2>
          <p className="mb-6 text-muted-foreground">
            Conversion Chat es el punto donde la experiencia clínica, la
            estrategia comercial y la tecnología se alinean para{" "}
            <strong className="text-foreground">
              convertir conversaciones en citas reales
            </strong>
            .
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Experiencia clínica",
                body: "Conocemos el lenguaje médico, las objeciones reales del paciente y los protocolos que cada especialidad requiere.",
              },
              {
                title: "Estrategia comercial",
                body: "Cada conversación está diseñada para educar, calificar y guiar al paciente hacia la valoración médica.",
              },
              {
                title: "Tecnología responsable",
                body: "IA ética, transparente y alineada con la responsabilidad que exige el sector médico. Nunca reemplaza al médico.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border p-6"
              >
                <h3 className="mb-2 font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Aviso IA responsable */}
        <section className="mb-16 rounded-2xl border border-border bg-card p-8">
          <h2 className="mb-4 text-xl font-bold">
            Uso responsable de IA en entornos médicos
          </h2>
          <p className="mb-4 text-muted-foreground">
            Conversion Chat utiliza inteligencia artificial como herramienta de
            apoyo a la comunicación,{" "}
            <strong className="text-foreground">
              no como sustituto del criterio médico
            </strong>
            .
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "No realiza diagnósticos",
              "No prescribe tratamientos",
              "No reemplaza la consulta médica presencial o virtual",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-primary">—</span> {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Toda la información entregada por el agente tiene fines educativos,
            orientativos y comerciales. La responsabilidad de las decisiones
            clínicas recae exclusivamente en el profesional de la salud.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center">
          <p className="mb-6 text-muted-foreground">
            ¿Quieres ver Conversion Chat funcionando en tu especialidad?
          </p>
          <Button asChild size="lg">
            <Link href="/#registro">Solicitar una demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
