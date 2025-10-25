"use client";
import { useMemo } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Mail,
  Sparkles,
  Bot,
  PenTool,
  FileText,
  Cable,
  Shield,
  Cpu,
  Map,
  FileSignature,
  ScanText,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Diseño Tipo Magazine/Editorial
// Características: Layout asimétrico, tipografía grande y bold, bloques desiguales, visual impactante

export default function AutiaLandingMagazine() {
  const servicios = useMemo(
    () => [
      { icon: Cpu, title: "Desarrollo de Aplicaciones", desc: "Apps móviles y web seguras, rápidas y a la medida.", image: "/images/secure.png" },
      { icon: Bot, title: "Automatización de Procesos", desc: "Bots, flujos y conexiones que eliminan lo repetitivo.", image: "/images/automation.png" },
      { icon: Sparkles, title: "Inteligencia Artificial", desc: "Voz, imagen y datos aplicados a tu operación.", image: "/images/ia.png" },
      { icon: PenTool, title: "Consultoría Tecnológica", desc: "Acompañamiento experto para escalar con orden.", image: "/images/consultoria.png" },
      { icon: MessageCircle, title: "Agentes con WhatsApp", desc: "Chatbots que atienden, resuelven y levantan requerimientos.", image: "/images/wa.png" },
      { icon: FileSignature, title: "Firma Electrónica", desc: "Contratos y documentos con validez legal digital.", image: "/images/firmaelectronica.png" },
      { icon: ScanText, title: "Extracción de Datos", desc: "OCR + IA para facturas, recibos y constancias fiscales.", image: "/images/dataExtraciion.png" },
      { icon: Cable, title: "APIs e Integraciones", desc: "Conecta sistemas internos y externos sin fricción.", image: "/images/api.png" },
    ],
    []
  );

  const beneficios = [
    "Procesos más rápidos y eficientes",
    "Reducción de costos operativos",
    "Escalabilidad sin complicaciones",
    "Tecnología moderna y segura",
    "Atención automatizada en canales digitales",
    "Documentos legales con firma válida",
    "Integración fluida entre tus herramientas",
  ];

  const casos = [
    { title: "Contratación digital", desc: "De carpetas físicas a contratos electrónicos listos en minutos." },
    { title: "Distribución inteligente", desc: "App logística que optimiza rutas y garantiza entregas a tiempo." },
    { title: "Gestión en punto de venta", desc: "Validación de inventarios en tiempo real para evitar pérdidas." },
    { title: "Automatización fiscal", desc: "Lectura automática de constancias y facturas con validación integrada." },
  ];

  const testimonios = [
    "Con Autia reducimos a la mitad el tiempo de contratación.",
    "La automatización nos ahorra 20 horas de trabajo manual cada semana.",
    "Digitalizamos la operación sin necesidad de infraestructura costosa.",
    "Ahora validamos documentos y firmamos contratos sin perder tiempo.",
  ];

  return (
    <div className="min-h-screen bg-white text-[#1C1C1C]">
      {/* Header estilo editorial */}
      <header className="border-b-4 border-[#1C1C1C]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[#1C1C1C] p-2">
              <Image src="/images/logo.webp" alt="Autia Logo" width={32} height={32} className="h-8 w-8 invert" />
            </div>
            <div>
              <div className="text-3xl font-black uppercase leading-none tracking-tighter">Autia</div>
              <div className="text-[10px] font-medium uppercase tracking-widest text-neutral-500">Technology Magazine</div>
            </div>
          </div>
          <a
            href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="bg-[#007BFF] font-bold uppercase tracking-wide hover:bg-[#007BFF]/90">
              Contactar
            </Button>
          </a>
        </div>
      </header>

      {/* Hero - Layout asimétrico tipo magazine */}
      <section id="hero" className="border-b-4 border-[#1C1C1C]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-12">
          {/* Columna principal */}
          <div className="border-r-4 border-[#1C1C1C] px-8 py-16 md:col-span-8 md:py-24">
            <div className="mb-4 inline-block bg-[#00C896] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#1C1C1C]">
              Edición Especial
            </div>
            <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tighter md:text-9xl">
              Tecnología
              <br />
              <span className="text-[#007BFF]">Auténtica</span>
            </h1>
            <div className="mt-6 border-l-8 border-[#00C896] pl-6">
              <p className="text-2xl font-bold leading-tight">
                Para crecer sin fricción
              </p>
              <p className="mt-4 text-base text-neutral-600">
                Soluciones digitales que llevan tu negocio al siguiente nivel. Deja atrás lo manual, conecta tus procesos y evoluciona con inteligencia artificial.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contacto">
                <Button size="lg" className="bg-[#1C1C1C] px-8 text-base font-bold uppercase hover:bg-[#1C1C1C]/90">
                  Transformar ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="lg" variant="outline" className="border-2 border-[#1C1C1C] px-8 text-base font-bold uppercase">
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Columna lateral con stats */}
          <div className="flex flex-col bg-[#1C1C1C] px-8 py-16 text-white md:col-span-4 md:py-24">
            <div className="mb-8 text-xs font-black uppercase tracking-widest text-[#00C896]">En Números</div>
            <div className="flex-1 space-y-8">
              <div>
                <div className="text-6xl font-black text-[#00C896]">+60%</div>
                <div className="mt-1 text-sm uppercase tracking-wide">Velocidad Operativa</div>
              </div>
              <div>
                <div className="text-6xl font-black text-[#007BFF]">24/7</div>
                <div className="mt-1 text-sm uppercase tracking-wide">Atención Automatizada</div>
              </div>
              <div>
                <div className="text-6xl font-black text-[#00C896]">∞</div>
                <div className="mt-1 text-sm uppercase tracking-wide">Escalabilidad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es - Layout de dos columnas desiguales */}
      <section id="que-es" className="border-b-4 border-[#1C1C1C]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-5">
          <div className="bg-[#007BFF] px-8 py-16 text-white md:col-span-2">
            <div className="sticky top-8">
              <div className="mb-4 text-xs font-black uppercase tracking-widest">Sección 01</div>
              <h2 className="text-5xl font-black uppercase leading-tight">
                ¿Qué es
                <br />
                Autia?
              </h2>
            </div>
          </div>
          <div className="border-l-4 border-[#1C1C1C] px-8 py-16 md:col-span-3">
            <p className="text-2xl font-bold leading-snug">
              En Autia diseñamos tecnología práctica y accesible para que las empresas crezcan sin complicaciones.
            </p>
            <p className="mt-6 text-lg text-neutral-600">
              Nuestra misión es <strong>simplificar lo complejo</strong>, creando sistemas que funcionan en el día a día.
            </p>
            <div className="mt-12 space-y-8">
              {['Digitaliza', 'Automatiza', 'Evoluciona'].map((step, i) => (
                <div key={i} className="border-l-4 border-[#00C896] pl-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-black text-neutral-200">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <div className="text-3xl font-black uppercase">{step}</div>
                      <p className="mt-2 text-neutral-600">
                        {step === "Digitaliza" && "Convierte procesos manuales en digitales."}
                        {step === "Automatiza" && "Ahorra tiempo conectando sistemas y flujos."}
                        {step === "Evoluciona" && "Aplica IA para tomar mejores decisiones."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios - Grid asimétrico */}
      <section id="servicios" className="border-b-4 border-[#1C1C1C] bg-neutral-100 py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-12 flex items-end justify-between border-b-4 border-[#1C1C1C] pb-4">
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-neutral-500">Sección 02</div>
              <h2 className="text-6xl font-black uppercase">Servicios</h2>
            </div>
            <div className="text-sm font-bold uppercase text-neutral-600">8 Especialidades</div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {servicios.map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={idx}
                className={`group border-4 border-[#1C1C1C] bg-white p-6 transition-all hover:bg-[#1C1C1C] hover:text-white ${
                  idx === 0 || idx === 5 ? 'md:col-span-2' : ''
                }`}
              >
                <Icon className="h-12 w-12 transition-colors group-hover:text-[#00C896]" />
                <h3 className="mt-4 text-xl font-black uppercase leading-tight">{title}</h3>
                <p className="mt-2 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos - Layout de magazine */}
      <section id="casos" className="border-b-4 border-[#1C1C1C] py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-12 border-b-4 border-[#1C1C1C] pb-4">
            <div className="text-xs font-black uppercase tracking-widest text-neutral-500">Sección 03</div>
            <h2 className="text-6xl font-black uppercase">Casos de Éxito</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {casos.map((c, i) => (
              <div
                key={i}
                className={`border-4 border-[#1C1C1C] p-8 ${i % 2 === 0 ? 'bg-[#00C896]' : 'bg-white'}`}
              >
                <Rocket className={`h-10 w-10 ${i % 2 === 0 ? 'text-[#1C1C1C]' : 'text-[#00C896]'}`} />
                <h3 className="mt-4 text-3xl font-black uppercase leading-tight">{c.title}</h3>
                <p className={`mt-4 text-lg ${i % 2 === 0 ? 'text-[#1C1C1C]' : 'text-neutral-600'}`}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios - Lista compacta */}
      <section id="beneficios" className="border-b-4 border-[#1C1C1C] bg-neutral-100 py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-12 border-b-4 border-[#1C1C1C] pb-4">
            <div className="text-xs font-black uppercase tracking-widest text-neutral-500">Sección 04</div>
            <h2 className="text-6xl font-black uppercase">Beneficios</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {beneficios.map((b, i) => (
              <div key={i} className="flex items-start gap-4 border-l-4 border-[#007BFF] bg-white p-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-none text-[#00C896]" />
                <p className="font-bold uppercase text-[#1C1C1C]">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios - Quotes grandes */}
      <section id="testimonios" className="border-b-4 border-[#1C1C1C] py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-12 border-b-4 border-[#1C1C1C] pb-4">
            <div className="text-xs font-black uppercase tracking-widest text-neutral-500">Sección 05</div>
            <h2 className="text-6xl font-black uppercase">Testimonios</h2>
          </div>

          <div className="space-y-8">
            {testimonios.map((t, i) => (
              <div key={i} className="border-l-8 border-[#00C896] bg-neutral-100 p-8">
                <p className="text-2xl font-bold italic leading-snug">"{t}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Bold y directo */}
      <section id="cta" className="border-b-4 border-[#1C1C1C] bg-[#1C1C1C] py-24 text-white">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <h2 className="text-7xl font-black uppercase leading-tight md:text-9xl">
            El Futuro
            <br />
            <span className="text-[#00C896]">Comienza</span>
            <br />
            Hoy
          </h2>
          <p className="mt-8 text-xl font-bold uppercase tracking-wide text-neutral-400">
            Digitaliza. Automatiza. Evoluciona.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#contacto">
              <Button size="lg" className="bg-[#00C896] px-10 py-7 text-lg font-black uppercase text-[#1C1C1C] hover:bg-[#00C896]/90">
                Agendar consultoría
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </a>
            <a
              href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="lg" variant="outline" className="border-2 border-white px-10 py-7 text-lg font-black uppercase text-white hover:bg-white/10">
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer estilo newspaper */}
      <footer id="contacto" className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-8 border-b-4 border-[#1C1C1C] pb-8 md:grid-cols-3">
            <div>
              <div className="text-3xl font-black uppercase">Autia</div>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                Technology Magazine
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-black uppercase tracking-widest text-neutral-500">Contacto</h3>
              <ul className="space-y-2 text-sm font-bold">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:contacto@autia.mx" className="hover:text-[#007BFF]">contacto@autia.mx</a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <a
                    href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#007BFF]"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-black uppercase tracking-widest text-neutral-500">Secciones</h3>
              <ul className="space-y-2 text-sm font-bold">
                <li><a href="#servicios" className="hover:text-[#007BFF]">Servicios</a></li>
                <li><a href="#casos" className="hover:text-[#007BFF]">Casos de éxito</a></li>
                <li><a href="#beneficios" className="hover:text-[#007BFF]">Beneficios</a></li>
                <li><a href="#testimonios" className="hover:text-[#007BFF]">Testimonios</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 text-xs font-bold uppercase tracking-wide text-neutral-500">
            © {new Date().getFullYear()} Autia. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
