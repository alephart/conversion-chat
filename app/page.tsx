import Link from "next/link";
import { Button } from "@/components/ui/button";
import RegistroForm from "@/components/sections/RegistroForm";
import { ArrowRight, Bot, Zap, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Conversaciones naturales",
    description:
      "Tu agente entiende el contexto, recuerda el historial y responde como un experto humano, disponible 24/7.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Automatización sin código",
    description:
      "Conecta tu agente a tus herramientas existentes en minutos. Sin desarrolladores, sin fricciones.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Seguro y conforme",
    description:
      "Tus datos permanecen en tu infraestructura. Cumplimiento GDPR y cifrado de extremo a extremo.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Analítica en tiempo real",
    description:
      "Conoce exactamente qué preguntan tus clientes, dónde abandonan y cómo mejorar cada conversación.",
  },
];

const steps = [
  {
    number: "01",
    title: "El problema que todos conocen",
    body: "Tu equipo dedica horas a responder las mismas preguntas una y otra vez. El talento humano se gasta en tareas repetitivas mientras los clientes esperan.",
  },
  {
    number: "02",
    title: "Una nueva forma de trabajar",
    body: "AgentIA aprende de tu documentación, tus procesos y tu tono de voz. Se convierte en el primer punto de contacto que nunca descansa, nunca se equivoca en lo básico y siempre escala cuando es necesario.",
  },
  {
    number: "03",
    title: "Resultados medibles desde el día uno",
    body: "Nuestros clientes reducen el volumen de soporte un 60% en el primer mes. El equipo humano se enfoca en lo que realmente importa: cerrar ventas y construir relaciones.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary/70">
            Inteligencia artificial aplicada
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            El agente que trabaja
            <br />
            <span className="text-primary">mientras tú creces</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Automatiza atención al cliente, ventas y operaciones internas con un
            agente de IA entrenado sobre tu propio negocio. Sin código, sin
            fricciones.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="#registro">
                Solicitar demo gratuita <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/quienes-somos">Conoce el equipo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Todo lo que necesitas, nada de lo que no
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
            AgentIA está diseñado para equipos que quieren resultados rápidos
            sin sacrificar el control.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-background p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  {f.icon}
                </div>
                <h3 className="mb-2 font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            De la frustración a la eficiencia
          </h2>
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex flex-col gap-6 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-shrink-0">
                  <span className="text-5xl font-black text-primary/20">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { stat: "60%", label: "Reducción en tickets de soporte" },
              { stat: "24/7", label: "Disponibilidad sin interrupciones" },
              { stat: "3 días", label: "Tiempo medio de implantación" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-5xl font-black tracking-tight text-primary">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Formulario */}
      <section id="registro" className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Empieza hoy, gratis
          </h2>
          <p className="mb-10 text-center text-muted-foreground">
            Completa el formulario y nos ponemos en contacto en menos de 24 h
            para mostrarte AgentIA con tus propios datos.
          </p>
          <RegistroForm />
        </div>
      </section>
    </>
  );
}
