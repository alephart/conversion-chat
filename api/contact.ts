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

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
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
        { status: 400 }
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

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Conversion Chat <conversemos@conversionchat.co>",
        to: [env.CONTACT_EMAIL],
        subject: `Nuevo contacto: ${empresa}`,
        html: emailHtml,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      return new Response(err, { status: 500 });
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Error interno" }),
      { status: 500 }
    );
  }
};