import type { Metadata } from "next";
import RegistroForm from "@/components/sections/RegistroForm";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto – AgentIA",
  description:
    "Ponte en contacto con el equipo de AgentIA. Estamos aquí para resolver tus dudas y ayudarte a encontrar la solución perfecta.",
};

export default function ContactoPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Contacto
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            ¿Tienes preguntas? Escríbenos o rellena el formulario y te
            respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-2 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Email</h3>
                <a
                  href="mailto:hola@agentia.es"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  hola@agentia.es
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-2 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Ubicación</h3>
                <p className="text-muted-foreground">Madrid, España</p>
                <p className="text-sm text-muted-foreground">
                  (Atendemos clientes en toda la región hispanohablante)
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0 rounded-lg bg-primary/10 p-2 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Horario de atención</h3>
                <p className="text-muted-foreground">Lunes a viernes, 9:00–18:00 CET</p>
                <p className="text-sm text-muted-foreground">
                  El agente está disponible 24/7
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <RegistroForm />
        </div>
      </div>
    </div>
  );
}
