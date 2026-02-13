import Link from "next/link";
import { Button } from "@/components/ui/button";
import RegistroForm from "@/components/sections/RegistroForm";
import {
  ArrowRight,
  Bot,
  Clock,
  Shield,
  BarChart3,
  CheckCircle2,
  XCircle,
  MessageCircle,
  Filter,
  CalendarCheck,
} from "lucide-react";

// ─── Datos ────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Habla como humano",
    description:
      "Responde con lenguaje médico profesional, entiende el contexto y recuerda cada conversación. Disponible 24/7 sin que nadie se agote.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Respuesta en segundos",
    description:
      "Ningún paciente espera. Ninguna consulta queda sin respuesta. Conversion Chat reacciona al instante, a cualquier hora del día.",
  },
  {
    icon: <Filter className="h-6 w-6" />,
    title: "Filtra intención real",
    description:
      "Separa a los curiosos de los pacientes con intención real de consulta. Tu equipo solo atiende leads calificados.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Analítica de conversaciones",
    description:
      "Conoce qué preguntan tus pacientes, dónde se frena la conversación y cómo mejorar cada interacción para cerrar más citas.",
  },
];

const siHace = [
  "Responde 24/7 sin descanso ni suplentes",
  "Educa al paciente sobre procedimientos y tratamientos",
  "Filtra intención real de consulta",
  "Lleva al paciente hacia la valoración médica profesional",
];

const noHace = [
  "Diagnosticar ni emitir conceptos clínicos",
  "Prometer resultados estéticos o médicos",
  "Reemplazar al médico tratante",
];

const steps = [
  {
    number: "01",
    title: "El problema que todos conocen",
    body: "Tu equipo dedica horas a responder las mismas preguntas una y otra vez. Las recepcionistas se saturan, los leads se enfrían y los pacientes desaparecen antes de agendar.",
  },
  {
    number: "02",
    title: "Un agente que trabaja como tu mejor vendedor",
    body: "Conversion Chat aprende el lenguaje de tu clínica, los tratamientos que ofreces y el tono profesional que cuidas. Se convierte en el primer punto de contacto que nunca descansa, nunca improvisa y siempre guía al paciente hacia la valoración.",
  },
  {
    number: "03",
    title: "Resultados medibles desde el primer mes",
    body: "Menos tickets, más citas agendadas, equipo enfocado en lo que importa. La conversión no se pierde en la consulta — se pierde mucho antes, y ahí es exactamente donde actuamos.",
  },
];

const paraQuien = [
  "Tu WhatsApp nunca descansa y tu equipo sí necesita hacerlo",
  "Tus leads se quedan atascados en el precio sin avanzar",
  "Explicar un tratamiento toma párrafos interminables",
  "Tu equipo se quema respondiendo las mismas preguntas",
  "Muchos pacientes preguntan y desaparecen sin agendar",
  "Sabes que podrías vender más, pero no identificas dónde se pierde el lead",
];

const howItWorks = [
  { icon: <MessageCircle className="h-5 w-5" />, step: "01", title: "El paciente escribe", body: "A través de WhatsApp o cualquier canal digital, en cualquier momento del día o la noche." },
  { icon: <Clock className="h-5 w-5" />, step: "02", title: "El agente responde en segundos", body: "Sin tiempos de espera ni plantillas genéricas. Una respuesta personalizada al instante." },
  { icon: <Bot className="h-5 w-5" />, step: "03", title: "Educa, aclara y ordena la conversación", body: "Explica el tratamiento, resuelve dudas frecuentes y gestiona las expectativas del paciente." },
  { icon: <Filter className="h-5 w-5" />, step: "04", title: "Filtra curiosos vs. pacientes reales", body: "Identifica quién tiene intención real de consulta y separa el ruido de los leads calificados." },
  { icon: <CalendarCheck className="h-5 w-5" />, step: "05", title: "Lleva al agendamiento", body: "El paciente llega informado, con expectativas claras y listo para la valoración médica." },
];

// ─── Página ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary/70">
            IA especializada para clínicas médicas
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Tus pacientes ya te están escribiendo.
            <br />
            <span className="text-primary">Lo que falla es la conversación.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            WhatsApp no está diseñado para convertir pacientes.{" "}
            <strong className="text-foreground">Conversion Chat sí.</strong>
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="#demo">
                Ver demo en vivo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#por-que">
                Quiero entender por qué pierdo pacientes
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── GOLPE DE REALIDAD ─────────────────────────────────────────────── */}
      <section id="por-que" className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            La mayoría de clínicas no pierden pacientes por precios.
            <br />
            <span className="text-primary">Los pierden por cómo responden.</span>
          </h2>
          <div className="mb-10 grid gap-3 sm:grid-cols-2">
            {[
              "Respuestas tardías que enfrían el interés",
              "Mensajes copiados que no conectan con el paciente",
              "Información mal explicada que genera desconfianza",
              "Recepcionistas saturadas que no dan abasto",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-background p-4"
              >
                <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <blockquote className="rounded-2xl bg-primary/10 p-8 text-center">
            <p className="text-xl font-semibold italic leading-relaxed sm:text-2xl">
              &ldquo;Si tu WhatsApp cierra a la misma velocidad que una
              recepcionista cansada, estás dejando dinero sobre la mesa.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── QUÉ ES + FEATURES ────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              No es un bot. No es automatización básica.
              <br />
              <span className="text-primary">Es un agente que convierte.</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Conversion Chat es un{" "}
              <strong className="text-foreground">
                agente conversacional entrenado para vender citas médicas
              </strong>
              , respetando el criterio clínico y el lenguaje profesional.
              Habla como humano. Responde como experto. Piensa como equipo
              comercial.
            </p>
          </div>

          {/* Cards de capacidades */}
          <div className="mb-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

          {/* Sí hace / No hace */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-bold text-primary">✔ Sí hace</h3>
              <ul className="space-y-3">
                {siHace.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-bold text-destructive">✖ No hace</h3>
              <ul className="space-y-3">
                {noHace.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ────────────────────────────────────────────────────── */}
      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Esto es para ti si…
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {paraQuien.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-background p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <blockquote className="mt-12 text-center">
            <p className="text-xl font-semibold italic sm:text-2xl">
              &ldquo;La conversión no se pierde en la consulta.
              <br />
              Se pierde mucho antes.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── STORYTELLING (estructura original mantenida) ──────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            De la frustración a la eficiencia
          </h2>
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex flex-col gap-6 md:flex-row ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
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

      {/* ── CÓMO FUNCIONA ─────────────────────────────────────────────────── */}
      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Así convierte Conversion Chat
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
            Sin desgaste humano. Sin improvisación. Sin horarios.
          </p>
          <div className="space-y-4">
            {howItWorks.map((s) => (
              <div
                key={s.step}
                className="flex items-start gap-5 rounded-xl border border-border bg-background p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {s.step}
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF (estructura original mantenida) ──────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { stat: "60%", label: "Reducción en consultas repetitivas al equipo" },
              { stat: "24/7", label: "Disponibilidad sin recepcionista extra" },
              { stat: "3 días", label: "Tiempo promedio de implementación" },
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

      {/* ── DEMO EN VIVO ──────────────────────────────────────────────────── */}
      <section id="demo" className="bg-primary py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Pruébalo como paciente
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80">
            Antes de creer, conversa. Antes de decidir, experimenta.
            <br />
            Habla con nuestra clínica ficticia y vive la experiencia real de
            Conversion Chat.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="#registro">
              Probar cómo sí se convierte <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ── FORMULARIO ────────────────────────────────────────────────────── */}
      <section id="registro" className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Quiero que mi clínica convierta más
          </h2>
          <p className="mb-10 text-center text-muted-foreground">
            Déjanos tus datos y en menos de 24 h te mostramos Conversion Chat
            funcionando con casos reales de tu especialidad.
          </p>
          <RegistroForm />
        </div>
      </section>

      {/* ── IA RESPONSABLE ────────────────────────────────────────────────── */}
      <section className="bg-muted/40 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Shield className="h-3.5 w-3.5" /> Uso responsable de IA
          </div>
          <p className="text-sm text-muted-foreground">
            Conversion Chat utiliza inteligencia artificial como herramienta de
            apoyo a la comunicación,{" "}
            <strong className="text-foreground">
              no como sustituto del criterio médico
            </strong>
            . No realiza diagnósticos, no prescribe tratamientos y no reemplaza
            la consulta médica. Toda la información tiene fines educativos y
            orientativos; el médico es el único responsable de las decisiones
            clínicas.
          </p>
        </div>
      </section>
    </>
  );
}
