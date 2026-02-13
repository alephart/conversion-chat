"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  nombre: string;
  especialidad: string;
  email: string;
  telefono: string;
  empresa: string;
  interes: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  empresa?: string;
  interes?: string;
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function RegistroForm() {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    especialidad: "",
    email: "",
    telefono: "",
    empresa: "",
    interes: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!form.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Introduce un email válido.";
    }
    if (!form.empresa.trim()) newErrors.empresa = "La empresa es obligatoria.";
    if (!form.interes) newErrors.interes = "Selecciona un tipo de interés.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // TODO: conectar con endpoint real (e.g. API route o servicio externo)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Error al enviar");
      }

      setSubmitted(true);
    } catch (err) {
      alert("Hubo un error enviando el formulario. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <div className="mb-4 text-4xl">✅</div>
        <h3 className="mb-2 text-2xl font-semibold">¡Solicitud recibida!</h3>
        <p className="text-lg text-muted-foreground">
          Nos pondremos en contacto contigo en menos de 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-card p-6 shadow-md sm:p-8"
    >
      <div className="grid gap-5">
        {/* Nombre */}
        <div className="grid gap-1.5">
          <Label htmlFor="nombre">Nombre completo *</Label>
          <Input
            id="nombre"
            placeholder="María García"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          />
          {errors.nombre && (
            <p className="text-base text-destructive">{errors.nombre}</p>
          )}
        </div>

        {/* Especialidad */}
        <div className="grid gap-1.5">
          <Label htmlFor="especialidad">Especialidad o profesión</Label>
          <Input
            id="especialidad"
            placeholder="Ej: Dermatología, Medicina estética…"
            value={form.especialidad}
            onChange={(e) => setForm({ ...form, especialidad: e.target.value })}
          />
        </div>

        {/* Email */}
        <div className="grid gap-1.5">
          <Label htmlFor="email">Email profesional *</Label>
          <Input
            id="email"
            type="email"
            placeholder="maria@empresa.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && (
            <p className="text-base text-destructive">{errors.email}</p>
          )}
        </div>

        {/* Teléfono */}
        <div className="grid gap-1.5">
          <Label htmlFor="telefono">Teléfono</Label>
          <Input
            id="telefono"
            type="tel"
            placeholder="+57 300 000 0000"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          />
        </div>

        {/* Empresa */}
        <div className="grid gap-1.5">
          <Label htmlFor="empresa">Empresa / Organización *</Label>
          <Input
            id="empresa"
            placeholder="Nombre de tu empresa"
            value={form.empresa}
            onChange={(e) => setForm({ ...form, empresa: e.target.value })}
          />
          {errors.empresa && (
            <p className="text-base text-destructive">{errors.empresa}</p>
          )}
        </div>

        {/* Interés */}
        <div className="grid gap-1.5">
          <Label htmlFor="interes">Tipo de interés *</Label>
          <Select
            value={form.interes}
            onValueChange={(v) => setForm({ ...form, interes: v })}
          >
            <SelectTrigger id="interes">
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="demo">Demo gratuita</SelectItem>
              <SelectItem value="compra">Compra / Licencia</SelectItem>
            </SelectContent>
          </Select>
          {errors.interes && (
            <p className="text-base text-destructive">{errors.interes}</p>
          )}
        </div>

        {/* Mensaje */}
        <div className="grid gap-1.5">
          <Label htmlFor="mensaje">Mensaje (opcional)</Label>
          <Textarea
            id="mensaje"
            placeholder="Cuéntanos más sobre tu caso de uso..."
            rows={4}
            value={form.mensaje}
            onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          />
        </div>

        <Button type="submit" size="lg" disabled={loading} className="w-full">
          {loading ? "Enviando..." : "Solicitar información"}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Al enviar este formulario aceptas nuestra{" "}
          <a
            href="/politica-privacidad"
            className="underline underline-offset-2 hover:text-foreground"
          >
            política de privacidad
          </a>
          .
        </p>
      </div>
    </form>
  );
}
