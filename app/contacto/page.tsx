import type { Metadata } from "next";
import RegistroForm from "@/components/sections/RegistroForm";
import { Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto – Conversion Chat",
  description:
    "Ponte en contacto con el equipo de Conversion Chat. Te respondemos en menos de 24 horas para mostrarte cómo tu clínica puede convertir más pacientes.",
};

export default function ContactoPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Hablemos
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Cuéntanos sobre tu clínica y te mostramos cómo Conversion Chat
            puede funcionar con tu especialidad. Respuesta en menos de 24 horas.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-xl font-bold">¿Qué pasa después?</h2>
              <ol className="space-y-4">
                {[
                  "Revisamos tu formulario y entendemos tu especialidad y contexto.",
                  "Te contactamos para agendar una sesión de 30 min.",
                  "Te mostramos Conversion Chat con casos reales de clínicas como la tuya.",
                  "Defines si quieres avanzar. Sin presión, sin letra pequeña.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-2 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Email directo</h3>
                  <a
                    href="mailto:contacto@conversionchat.ai"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    contacto@conversionchat.ai
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-2 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Tiempo de respuesta</h3>
                  <p className="text-sm text-muted-foreground">
                    Menos de 24 horas en días hábiles.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    El agente está disponible 24/7
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-muted/40 p-5">
              <p className="text-sm italic text-muted-foreground">
                &ldquo;La conversión no se pierde en la consulta.
                Se pierde mucho antes.&rdquo;
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                — Equipo Conversion Chat
              </p>
            </div>
          </div>

          {/* Formulario */}
          <RegistroForm />
        </div>
      </div>
    </div>
  );
}
