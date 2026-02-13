import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad – Conversion Chat",
  description:
    "Política de privacidad, tratamiento de datos y uso responsable de inteligencia artificial de Conversion Chat, desarrollado por SANGO Laboratorio Creativo.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight">
          Política de privacidad
        </h1>
        <p className="mb-2 text-base text-muted-foreground">
          Tratamiento de datos y uso responsable de inteligencia artificial
        </p>
        <p className="mb-12 text-sm text-muted-foreground">
          <strong>CONVERSION CHAT</strong> · Desarrollado por SANGO Laboratorio
          Creativo · Última actualización: Febrero de 2026
        </p>

        <div className="space-y-10 text-base leading-relaxed">
          {/* Intro */}
          <p className="text-muted-foreground">
            En Conversion Chat respetamos la privacidad, confidencialidad y
            protección de los datos de nuestros usuarios y de los pacientes que
            interactúan con el sistema. La información compartida a través de
            nuestras plataformas se utiliza exclusivamente con fines
            informativos, de orientación y mejora de la experiencia
            conversacional, sin almacenar ni divulgar datos sensibles sin
            autorización expresa.
          </p>

          <Section number="1" title="Identificación del responsable">
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <strong className="text-foreground">Responsable del tratamiento:</strong>{" "}
                SANGO LAB C SAS
              </li>
              <li>
                <strong className="text-foreground">Producto:</strong> Conversion Chat
              </li>
              <li>
                <strong className="text-foreground">País de operación:</strong> Colombia
              </li>
              <li>
                <strong className="text-foreground">Correo de contacto:</strong>{" "}
                <a
                  href="mailto:hello@conversionchat.co"
                  className="text-primary underline underline-offset-2"
                >
                  hello@conversionchat.co
                </a>
              </li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              SANGO actúa como desarrollador, administrador y responsable del
              sistema Conversion Chat, sin perjuicio de que cada clínica usuaria
              sea responsable del tratamiento de los datos de sus propios
              pacientes.
            </p>
          </Section>

          <Section number="2" title="Marco legal aplicable">
            <p className="mb-2 text-muted-foreground">
              Esta política se rige por la legislación colombiana vigente, en
              especial:
            </p>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              <li>Artículo 15 de la Constitución Política de Colombia</li>
              <li>Ley 1581 de 2012 – Protección de Datos Personales</li>
              <li>Decreto 1377 de 2013</li>
              <li>Decreto 1074 de 2015</li>
              <li>Demás normas concordantes y complementarias</li>
            </ul>
          </Section>

          <Section number="3" title="Definiciones">
            <ul className="space-y-2 text-muted-foreground">
              {[
                ["Dato personal", "Información vinculada o que pueda asociarse a una persona natural determinada o determinable."],
                ["Dato sensible", "Información que afecta la intimidad del titular o cuyo uso indebido puede generar discriminación."],
                ["Tratamiento", "Cualquier operación sobre datos personales, como recolección, almacenamiento, uso o supresión."],
                ["Titular", "Persona natural a quien corresponden los datos personales."],
                ["IA (Inteligencia Artificial)", "Sistema tecnológico que simula procesos conversacionales para fines informativos y de orientación."],
              ].map(([term, def]) => (
                <li key={term}>
                  <strong className="text-foreground">{term}:</strong> {def}
                </li>
              ))}
            </ul>
          </Section>

          <Section number="4" title="Finalidad del tratamiento de datos">
            <p className="mb-2 text-muted-foreground">
              Los datos recolectados a través de Conversion Chat tienen como finalidad:
            </p>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              <li>Facilitar la comunicación inicial entre pacientes y clínicas médicas.</li>
              <li>Brindar información general, educativa y orientativa sobre servicios médicos.</li>
              <li>Optimizar procesos de atención, filtrado y agendamiento de citas.</li>
              <li>Mejorar la experiencia conversacional mediante análisis de interacciones.</li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              En ningún caso Conversion Chat utiliza la información para fines
              distintos a los aquí descritos.
            </p>
          </Section>

          <Section number="5" title="Naturaleza de la información médica">
            <p className="text-muted-foreground">
              Conversion Chat{" "}
              <strong className="text-foreground">
                NO solicita, almacena ni procesa historias clínicas
              </strong>
              , diagnósticos médicos ni información clínica sensible. El sistema
              opera bajo un enfoque informativo y comercial, orientando al
              usuario hacia una{" "}
              <strong className="text-foreground">
                valoración médica profesional
              </strong>
              , la cual debe realizarse directamente con el médico tratante.
            </p>
          </Section>

          <Section number="6" title="Uso responsable de inteligencia artificial en entornos médicos">
            <p className="mb-3 text-muted-foreground">
              Conversion Chat es una herramienta de apoyo conversacional y{" "}
              <strong className="text-foreground">
                no constituye un acto médico
              </strong>
              . El sistema:
            </p>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              <li>No realiza diagnósticos.</li>
              <li>No prescribe tratamientos.</li>
              <li>No reemplaza la consulta médica.</li>
              <li>No emite conceptos clínicos definitivos.</li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              Toda información suministrada tiene carácter general y orientativo.
              La responsabilidad de las decisiones clínicas recae exclusivamente
              en el profesional de la salud.
            </p>
          </Section>

          <Section number="7" title="Responsabilidad de las clínicas usuarias">
            <p className="mb-2 text-muted-foreground">
              Cada clínica o consultorio que utilice Conversion Chat:
            </p>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              <li>Es responsable del tratamiento de los datos de sus pacientes.</li>
              <li>Debe contar con sus propias políticas de privacidad.</li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              SANGO no se hace responsable por el uso indebido del sistema por
              parte de terceros.
            </p>
          </Section>

          <Section number="8" title="Derechos del titular de los datos">
            <p className="mb-2 text-muted-foreground">
              De conformidad con la Ley 1581 de 2012, el titular podrá:
            </p>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              <li>Conocer, actualizar y rectificar sus datos personales.</li>
              <li>Solicitar prueba de la autorización otorgada.</li>
              <li>Revocar la autorización y/o solicitar la supresión del dato.</li>
            </ul>
          </Section>

          <Section number="9" title="Seguridad de la información">
            <p className="text-muted-foreground">
              SANGO adopta medidas técnicas, humanas y administrativas razonables
              para proteger la información contra acceso no autorizado, pérdida o
              uso indebido. No obstante, el usuario reconoce que ningún sistema es
              completamente infalible.
            </p>
          </Section>

          <Section number="10" title="Autorización del titular">
            <p className="text-muted-foreground">
              El uso de Conversion Chat implica la aceptación expresa de esta
              política y la autorización para el tratamiento de los datos conforme
              a las finalidades descritas.
            </p>
          </Section>

          <Section number="11" title="Modificaciones">
            <p className="text-muted-foreground">
              SANGO se reserva el derecho de modificar esta política en cualquier
              momento. Los cambios serán informados a través de los canales
              oficiales.
            </p>
          </Section>

          <Section number="12" title="Contacto">
            <p className="text-muted-foreground">
              Para consultas relacionadas con esta política:
            </p>
            <a
              href="mailto:hello@conversionchat.co"
              className="mt-2 inline-block text-primary underline underline-offset-2"
            >
              hello@conversionchat.co
            </a>
          </Section>

          <p className="border-t border-border pt-8 text-sm text-muted-foreground">
            © Conversion Chat – Desarrollado por SANGO Laboratorio Creativo.
            Inteligencia artificial aplicada a conversaciones médicas reales.
          </p>
        </div>
      </div>
    </div>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-bold">
        {number}. {title}
      </h2>
      {children}
    </section>
  );
}
