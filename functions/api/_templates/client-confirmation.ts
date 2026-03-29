interface ClientConfirmationData {
  nombre: string;
  empresa: string;
  especialidad?: string;
  interes: string;
}

const INTEREST_LABEL: Record<string, string> = {
  demo: "Demo gratuita",
  compra: "Compra / Licencia",
};

export function buildClientConfirmationEmail(data: ClientConfirmationData): {
  subject: string;
  html: string;
  text: string;
} {
  const { nombre, empresa, especialidad, interes } = data;
  const interestLabel = INTEREST_LABEL[interes] ?? interes;
  const firstName = nombre.split(" ")[0];

  const subject = `${firstName}, recibimos tu solicitud — Conversion Chat`;

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
  <title>${subject}</title>
  <style>
    @media (prefers-color-scheme: dark) {
      .body        { background-color: #0a0a0a !important; }
      .card        { background-color: #1a1a1a !important; border-color: #2a2a2a !important; }
      .text-main   { color: #f5f5f5 !important; }
      .text-muted  { color: #a3a3a3 !important; }
      .text-label  { color: #737373 !important; }
      .field-box   { background-color: #262626 !important; border-color: #383838 !important; }
      .divider     { border-color: #2a2a2a !important; }
      .step-num    { background-color: #312e81 !important; color: #c7d2fe !important; }
      .footer-link { color: #818cf8 !important; }
    }
    [data-ogsb] .body        { background-color: #0a0a0a !important; }
    [data-ogsb] .card        { background-color: #1a1a1a !important; }
    [data-ogsb] .field-box   { background-color: #262626 !important; }
    [data-ogsb] .step-num    { background-color: #312e81 !important; }
    [data-ogsc] .text-main   { color: #f5f5f5 !important; }
    [data-ogsc] .text-muted  { color: #a3a3a3 !important; }
    [data-ogsc] .footer-link { color: #818cf8 !important; }
  </style>
</head>
<body class="body" style="margin:0;padding:40px 0;background-color:#f5f5f5;font-family:'Helvetica Neue',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding:0 16px;">

        <!-- Card -->
        <table class="card" width="600" cellpadding="0" cellspacing="0" border="0"
          style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

          <!-- Header -->
          <tr>
            <td style="background-color:#4f46e5;padding:32px 40px 28px;">
              <img
                src="https://conversionchat.co/images/logos/logo-normal.png"
                alt="Conversion Chat"
                width="150"
                height="50"
                style="display:block;border:0;margin-bottom:20px;"
              />
              <h1 style="margin:0;color:#ffffff;font-size:18px;font-weight:700;line-height:1.3;">
                Recibimos tu solicitud, ${firstName}, <br />
                para un agente de Conversion Chat
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">

              <p class="text-main" style="margin:0 0 24px 0;color:#171717;font-size:16px;line-height:1.6;">
                Gracias por contactarnos. Revisamos tu información y nos pondremos en contacto
                contigo en <strong>menos de 24 horas (horario laboral)</strong> para agendar una sesión personalizada.
              </p>

              <!-- Submitted data summary -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                <tr>
                  <td>
                    <p class="text-label" style="margin:0 0 12px 0;color:#9ca3af;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;">
                      Información recibida
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="field-box" style="background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px 20px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding-bottom:10px;">
                          <p class="text-label" style="margin:0 0 2px 0;color:#9ca3af;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;">Nombre</p>
                          <p class="text-main" style="margin:0;color:#171717;font-size:15px;">${nombre}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom:10px;">
                          <p class="text-label" style="margin:0 0 2px 0;color:#9ca3af;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;">Empresa</p>
                          <p class="text-main" style="margin:0;color:#171717;font-size:15px;">${empresa}</p>
                        </td>
                      </tr>
                      ${especialidad ? `
                      <tr>
                        <td style="padding-bottom:10px;">
                          <p class="text-label" style="margin:0 0 2px 0;color:#9ca3af;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;">Especialidad</p>
                          <p class="text-main" style="margin:0;color:#171717;font-size:15px;">${especialidad}</p>
                        </td>
                      </tr>` : ""}
                      <tr>
                        <td>
                          <p class="text-label" style="margin:0 0 2px 0;color:#9ca3af;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;">Interés</p>
                          <p class="text-main" style="margin:0;color:#171717;font-size:15px;">${interestLabel}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Next steps -->
              <p class="text-label" style="margin:0 0 16px 0;color:#9ca3af;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;">
                ¿Qué pasa ahora?
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                ${[
      ["Revisamos tu solicitud", "Analizamos tu especialidad y contexto para preparar la sesión."],
      ["Te contactamos", "Te escribimos para agendar una sesión de 30 minutos."],
      ["Te mostramos Conversion Chat", "Con casos reales de clínicas como la tuya."],
      ["Tú decides", "Sin presión, sin letra pequeña."],
    ].map(([title, desc], i) => `
                <tr>
                  <td style="padding-bottom:14px;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td valign="top" style="padding-right:12px;">
                          <div class="step-num" style="width:28px;height:28px;border-radius:50%;background-color:#ede9fe;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#4f46e5;">
                            ${i + 1}
                          </div>
                        </td>
                        <td valign="top">
                          <p class="text-main" style="margin:0 0 2px 0;color:#171717;font-size:15px;font-weight:600;">${title}</p>
                          <p class="text-muted" style="margin:0;color:#6b7280;font-size:14px;line-height:1.5;">${desc}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>`).join("")}
              </table>

              <!-- Direct contact -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:#f5f3ff;border-left:3px solid #4f46e5;border-radius:0 6px 6px 0;padding:16px 20px;">
                    <p class="text-main" style="margin:0 0 4px 0;color:#171717;font-size:14px;font-weight:600;">
                      ¿Prefieres escribirnos directamente?
                    </p>
                    <p class="text-muted" style="margin:0;color:#6b7280;font-size:14px;">
                      <a href="mailto:hello@conversionchat.co" style="color:#4f46e5;text-decoration:none;">
                        hello@conversionchat.co
                      </a>
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <hr class="divider" style="border:none;border-top:1px solid #e5e7eb;margin:0;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;">
              <p class="text-muted" style="margin:0 0 6px 0;color:#9ca3af;font-size:12px;line-height:1.6;">
                Este email fue enviado porque completaste el formulario de contacto en
                <a class="footer-link" href="https://conversionchat.co" style="color:#6366f1;text-decoration:none;">conversionchat.co</a>.
              </p>
              <p class="text-muted" style="margin:0;color:#9ca3af;font-size:12px;">
                © ${new Date().getFullYear()} Conversion Chat · Bogotá, Colombia
              </p>
            </td>
          </tr>

        </table>
        <!-- /Card -->

      </td>
    </tr>
  </table>

</body>
</html>`;

  const text = `Hola ${firstName},

Recibimos tu solicitud en Conversion Chat.

INFORMACIÓN RECIBIDA
- Nombre: ${nombre}
- Empresa: ${empresa}${especialidad ? `\n- Especialidad: ${especialidad}` : ""}
- Interés: ${interestLabel}

QUÉ PASA AHORA
1. Revisamos tu solicitud y analizamos tu especialidad.
2. Te contactamos para agendar una sesión de 30 minutos.
3. Te mostramos Conversion Chat con casos reales de clínicas como la tuya.
4. Tú decides. Sin presión, sin letra pequeña.

Respuesta en menos de 24 horas hábiles.

¿Prefieres escribirnos directamente? hello@conversionchat.co

—
Conversion Chat · conversionchat.co`;

  return { subject, html, text };
}
