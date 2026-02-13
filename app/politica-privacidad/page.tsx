import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad – AgentIA",
  description: "Información sobre cómo AgentIA trata y protege tus datos personales.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight">
          Política de privacidad
        </h1>
        <p className="mb-12 text-sm text-muted-foreground">
          Última actualización: febrero 2026
        </p>

        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <section className="mb-10">
            <h2 className="mb-3 text-xl font-bold">1. Responsable del tratamiento</h2>
            <p className="text-muted-foreground">
              AgentIA S.L. (en adelante, "la Empresa"), con domicilio social en
              Madrid, España, es la responsable del tratamiento de los datos
              personales recogidos a través de este sitio web.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-bold">2. Datos que recogemos</h2>
            <p className="mb-3 text-muted-foreground">
              Recogemos los siguientes datos cuando rellenas nuestros formularios:
            </p>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Nombre de empresa u organización</li>
              <li>Tipo de interés (demo o compra)</li>
              <li>Mensaje opcional</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-bold">3. Finalidad del tratamiento</h2>
            <p className="text-muted-foreground">
              Los datos recogidos se utilizan exclusivamente para contactar
              contigo en relación con tu solicitud de información o demo, y para
              el envío de comunicaciones comerciales relacionadas con nuestros
              servicios, siempre que hayas dado tu consentimiento expreso.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-bold">4. Base legal</h2>
            <p className="text-muted-foreground">
              El tratamiento se basa en el consentimiento del interesado (art. 6.1.a
              RGPD) y, cuando proceda, en el interés legítimo de la Empresa para
              la gestión de relaciones comerciales (art. 6.1.f RGPD).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-bold">5. Conservación de datos</h2>
            <p className="text-muted-foreground">
              Conservamos tus datos durante el tiempo necesario para cumplir la
              finalidad para la que fueron recogidos y durante los plazos
              legalmente establecidos.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-bold">6. Tus derechos</h2>
            <p className="mb-3 text-muted-foreground">
              Puedes ejercer los siguientes derechos escribiendo a{" "}
              <a
                href="mailto:privacidad@agentia.es"
                className="text-foreground underline underline-offset-2"
              >
                privacidad@agentia.es
              </a>
              :
            </p>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              <li>Acceso a tus datos personales</li>
              <li>Rectificación de datos inexactos</li>
              <li>Supresión de tus datos</li>
              <li>Limitación u oposición al tratamiento</li>
              <li>Portabilidad de los datos</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-bold">7. Cookies</h2>
            <p className="text-muted-foreground">
              Este sitio web utiliza únicamente cookies técnicas necesarias para
              su funcionamiento. No utilizamos cookies de seguimiento ni de
              publicidad de terceros.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">8. Cambios en esta política</h2>
            <p className="text-muted-foreground">
              Nos reservamos el derecho a actualizar esta política. Te
              notificaremos cualquier cambio relevante a través del correo
              electrónico facilitado o mediante aviso en esta página.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
