// /functions/api/contact.ts

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
        from: "Conversion Chat <no-reply@hablemos.conversionchat.co>",
        to: [recipientEmail],
        subject: `Nuevo contacto: ${empresa}`,
        html: emailHtml,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error("❌ Resend error:", err);
      console.error("❌ Status:", resendRes.status);
      console.error("❌ Headers:", Object.fromEntries(resendRes.headers));
      
      return new Response(
        JSON.stringify({ 
          error: "Error al enviar email",
          details: err,  // ← Agrega esto temporalmente para debugging
          status: resendRes.status
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // ← CORS
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