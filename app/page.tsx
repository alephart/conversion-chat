import Link from "next/link";
import Image from "next/image";
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
    icon: <Bot className="h-7 w-7 sm:h-8 sm:w-8" />,
    title: "Habla como humano",
    description:
      "Responde con lenguaje médico profesional, entiende el contexto y recuerda cada conversación. Disponible 24/7 sin que nadie se agote.",
  },
  {
    icon: <Clock className="h-7 w-7 sm:h-8 sm:w-8" />,
    title: "Respuesta en segundos",
    description:
      "Ningún paciente espera. Ninguna consulta queda sin respuesta. Conversion Chat reacciona al instante, a cualquier hora del día.",
  },
  {
    icon: <Filter className="h-7 w-7 sm:h-8 sm:w-8" />,
    title: "Filtra intención real",
    description:
      "Separa a los curiosos de los pacientes con intención real de consulta. Tu equipo solo atiende leads calificados.",
  },
  {
    icon: <BarChart3 className="h-7 w-7 sm:h-8 sm:w-8" />,
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

  const phone = "573224567080";
  const message = "Hola, quiero más información";

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[78vh] overflow-hidden bg-background">
        {/* Grid tech de fondo */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#00c8e8 1px, transparent 1px), linear-gradient(90deg, #00c8e8 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow central */}
        <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-[78vh] max-w-6xl grid-cols-1 gap-8 px-4 pt-12 pb-0 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Texto */}
          <div className="self-center pb-8 text-center lg:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              IA especializada para clínicas médicas
            </p>
            <h1 className="mb-6 font-display text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Tus pacientes ya
              <br />
              te están escribiendo.
              <br />
              <span className="text-brand-gradient">
                Lo que falla es la conversación.
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground text-pretty lg:mx-0">
              WhatsApp no está diseñado para convertir pacientes.{" "}
              <strong className="inline-block text-foreground">Conversion Chat sí.</strong>
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/80 glow-cyan font-semibold"
              >
                <Link href="#demo">
                  Ver demo en vivo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary dark:border-white/20 dark:bg-white/8 dark:text-white/90 dark:hover:bg-foreground dark:hover:text-background dark:hover:border-foreground"
              >
                <Link href="#por-que">
                  ¿Por qué pierdo pacientes?
                </Link>
              </Button>
            </div>

          </div>

          {/* Personaje */}
          <div className="relative flex items-end justify-center self-end lg:justify-end">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-primary/5 blur-2xl" />
            <Image
              src="/images/logos/personaje.png"
              alt="Agente IA Conversion Chat"
              width={520}
              height={620}
              className="relative z-10 h-auto max-h-[620px] w-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <section className="border-y border-border bg-card py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { stat: "60%", label: "Menos consultas repetitivas para tu equipo" },
              { stat: "24/7", label: "Disponible sin horarios ni suplentes" },
              { stat: "7 días", label: "Tiempo promedio de implementación" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col items-center gap-2 text-center ${
                  i < 2 ? "sm:border-r sm:border-border" : ""
                }`}
              >
                <p className="font-display text-6xl font-black text-primary sm:text-7xl">
                  {item.stat}
                </p>
                <p className="max-w-[180px] text-base text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOLPE DE REALIDAD ─────────────────────────────────────────────── */}
      <section id="por-que" className="bg-muted py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 font-display text-3xl font-black tracking-tight sm:text-4xl">
            La mayoría de clínicas no pierden pacientes por precios. 
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
                <span className="text-base text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
          <blockquote className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center glow-cyan">
            <p className="text-xl font-semibold italic leading-relaxed text-foreground sm:text-2xl">
              &ldquo;Si tu WhatsApp cierra a la misma velocidad que una
              recepcionista cansada, estás dejando dinero sobre la mesa.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── QUÉ ES + FEATURES ────────────────────────────────────────────── */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-black tracking-tight sm:text-4xl">
              No es un bot. No es automatización básica.
              <br />
              <span className="text-brand-gradient">Es un agente que convierte.</span>
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

          {/* Cards */}
          <div className="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:glow-cyan"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 sm:p-4 text-primary">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg sm:text-xl font-semibold text-foreground">{f.title}</h3>
                <p className="text-base text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>

          {/* Sí / No hace */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/30 bg-card p-6">
              <h3 className="mb-4 text-lg font-bold text-primary">✔ Sí hace</h3>
              <ul className="space-y-3">
                {siHace.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-base text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-destructive/30 bg-card p-6">
              <h3 className="mb-4 text-lg font-bold text-destructive">✖ No hace</h3>
              <ul className="space-y-3">
                {noHace.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                    <span className="text-base text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ────────────────────────────────────────────────────── */}
      <section className="bg-muted py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-display text-3xl font-black tracking-tight sm:text-4xl">
            Esto es para ti si…
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {paraQuien.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-background p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-base text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
          <blockquote className="mt-12 text-center">
            <p className="text-xl font-semibold italic text-foreground sm:text-2xl">
              &ldquo;La conversión no se pierde en la consulta.
              <br />
              <span className="text-primary">Se pierde mucho antes.&rdquo;</span>
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── STORYTELLING ──────────────────────────────────────────────────── */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center font-display text-3xl font-black tracking-tight sm:text-4xl">
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
                  <span className="font-display text-8xl sm:text-9xl font-black text-primary/20">
                    {step.number}
                  </span>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-3 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ─────────────────────────────────────────────────── */}
      <section className="bg-muted py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center font-display text-3xl font-black tracking-tight sm:text-4xl">
            Así convierte Conversion Chat
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-lg text-muted-foreground">
            Sin desgaste humano. Sin improvisación. Sin horarios.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {howItWorks.map((s, i) => (
              <div
                key={s.step}
                className={`rounded-xl border border-border bg-background p-5 ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-base font-black text-primary">
                  {s.step}
                </div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="text-base text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENTE EN ACCIÓN (imagen) ──────────────────────────────────────── */}
      <section className="bg-background py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Muchos mensajes,
                <br />
                <span className="text-primary">pocas citas. Eso cambia.</span>
              </h2>
              <p className="mb-6 text-muted-foreground">
                Conversion Chat gestiona cada conversación de WhatsApp como lo
                haría tu mejor asesor: con criterio, rapidez y el lenguaje
                correcto para llevar al paciente al siguiente paso.
              </p>
              <Button asChild size="lg" className="glow-cyan">
                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quiero verlo funcionar <ArrowRight className="ml-2 h-4 w-4" />
                </a>                
              </Button>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/assets/agente-chat.jpeg"
                alt="Agente Conversion Chat gestionando conversaciones"
                width={640}
                height={480}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── DEMO EN VIVO ──────────────────────────────────────────────────── */}
      <section id="demo" className="relative overflow-hidden bg-muted py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(#00c8e8 1px, transparent 1px), linear-gradient(90deg, #00c8e8 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Inteligencia Artificial EN ACCIÓN
          </p>
          <h2 className="mb-4 font-display text-3xl font-black tracking-tight sm:text-4xl">
            Pruébalo como paciente
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Antes de creer, conversa. Antes de decidir, experimenta.
            <br />
            Habla con nuestra clínica ficticia y vive la experiencia real.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-brand-gradient text-white hover:opacity-90 glow-magenta font-bold"
          >
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Probar cómo sí se convierte <ArrowRight className="ml-2 h-4 w-4" />
            </a> 
          </Button>
        </div>
      </section>

      {/* ── FORMULARIO ────────────────────────────────────────────────────── */}
      <section id="registro" className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center font-display text-3xl font-black tracking-tight sm:text-4xl">
            Quiero que mi clínica
            <br />
            <span className="text-brand-gradient">convierta más</span>
          </h2>
          <p className="mb-10 text-center text-muted-foreground">
            Déjanos tus datos y en menos de 24 h te mostramos Conversion Chat
            funcionando con casos reales de tu especialidad.
          </p>
          <RegistroForm />
        </div>
      </section>

      {/* ── IA RESPONSABLE ────────────────────────────────────────────────── */}
      <section className="bg-muted py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-primary">
            <Shield className="h-4 w-4" /> Uso responsable de IA
          </div>
          <p className="text-base text-muted-foreground">
            Conversion Chat utiliza inteligencia artificial como herramienta de
            apoyo a la comunicación,{" "}
            <strong className="text-foreground/80">
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
