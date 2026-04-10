// /functions/api/contact.ts

import { buildClientConfirmationEmail } from "./_templates/client-confirmation";

interface Env {
  RESEND_API_KEY: string;
  CONTACT_EMAIL: string;
}

interface ContactFormPayload {
  nombre: string;
  especialidad?: string;
  email: string;
  telefono?: string;
  empresa: string;
  interes: string;
  mensaje?: string;
}

// ============================================
// MANEJAR POST
// ============================================
export const onRequestPost = async (context: {
  request: Request;
  env: Env;
}) => {
  try {
    const { request, env } = context;
    const data = (await request.json()) as ContactFormPayload;

    const {
      nombre,
      especialidad,
      email,
      telefono,
      empresa,
      interes,
      mensaje,
    } = data;

    // Validación mínima server-side
    if (!nombre || !email || !empresa || !interes) {
      return new Response(
        JSON.stringify({ error: "Campos obligatorios faltantes" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // ← CORS
          },
        }
      );
    }

    const emailHtml = `
      <h2>Nuevo lead desde conversionchat.co</h2>
      <ul>
        <li><b>Nombre:</b> ${nombre}</li>
        <li><b>Email:</b> ${email}</li>
        <li><b>Empresa:</b> ${empresa}</li>
        <li><b>Interés:</b> ${interes}</li>
        <li><b>Especialidad:</b> ${especialidad || "-"}</li>
        <li><b>Teléfono:</b> ${telefono || "-"}</li>
      </ul>
      <p><b>Mensaje:</b></p>
      <p>${mensaje || "(Sin mensaje)"}</p>
    `;

    const recipientEmail = env.CONTACT_EMAIL || "juancpulidos@gmail.com";

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Conversion Chat <no-reply@conversionchat.co>",
        to: [recipientEmail],
        subject: `Nuevo contacto: ${empresa}`,
        html: emailHtml,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error("❌ Resend error (team notification):", err);
      return new Response(
        JSON.stringify({ error: "Error al enviar email", details: err }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Send confirmation email to the client
    const confirmation = buildClientConfirmationEmail({
      nombre,
      empresa,
      especialidad,
      interes,
    });

    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Conversion Chat <no-reply@conversionchat.co>",
        to: [email],
        subject: confirmation.subject,
        html: confirmation.html,
        text: confirmation.text,
      }),
    });

    if (!confirmationRes.ok) {
      // Log but don't fail — team already got the notification
      console.error("⚠️ Confirmation email failed:", await confirmationRes.text());
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    console.error("Error interno:", err);
    return new Response(JSON.stringify({ error: "Error interno" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
};

// ============================================
// MANEJAR OPTIONS (CORS Preflight)
// ============================================
export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400", // 24 horas
    },
  });
};