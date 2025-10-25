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

// Diseño Minimalista Moderno
// Características: Espacios amplios, tipografía grande, layout limpio, sin decoraciones excesivas

export default function AutiaLandingMinimalist() {
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
      {/* Header minimalista - línea superior simple */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.webp" alt="Autia Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-bold tracking-tight">Autia</span>
          </div>
          <nav className="hidden gap-8 md:flex">
            <a href="#que-es" className="text-sm font-medium text-neutral-600 hover:text-[#007BFF]">¿Qué es?</a>
            <a href="#servicios" className="text-sm font-medium text-neutral-600 hover:text-[#007BFF]">Servicios</a>
            <a href="#casos" className="text-sm font-medium text-neutral-600 hover:text-[#007BFF]">Casos</a>
            <a href="#beneficios" className="text-sm font-medium text-neutral-600 hover:text-[#007BFF]">Beneficios</a>
            <a href="#contacto" className="text-sm font-medium text-neutral-600 hover:text-[#007BFF]">Contacto</a>
          </nav>
          <a
            href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="sm" className="bg-[#00C896] text-[#1C1C1C] hover:bg-[#00C896]/90">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </a>
        </div>
      </header>

      {/* Hero - Tipografía grande, mucho espacio */}
      <section id="hero" className="mx-auto max-w-5xl px-6 py-32 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-xs font-medium">
          <Sparkles className="h-3.5 w-3.5" />
          Digitaliza. Automatiza. Evoluciona.
        </div>

        <h1 className="mx-auto max-w-4xl text-6xl font-bold leading-tight tracking-tight md:text-8xl">
          Tecnología auténtica para crecer sin fricción
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-xl text-neutral-600">
          Soluciones digitales que llevan tu negocio al siguiente nivel. Deja atrás lo manual, conecta tus procesos y evoluciona con inteligencia artificial.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#contacto">
            <Button size="lg" className="bg-[#007BFF] px-8 py-6 text-base hover:bg-[#007BFF]/90">
              Quiero transformar mi negocio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a
            href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="lg" variant="outline" className="px-8 py-6 text-base">
              Escribir por WhatsApp
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        {/* Stats minimalistas */}
        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-12 border-t border-neutral-200 pt-12">
          <div>
            <div className="text-5xl font-bold text-[#007BFF]">+60%</div>
            <div className="mt-2 text-sm text-neutral-600">velocidad operativa</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-[#007BFF]">24/7</div>
            <div className="mt-2 text-sm text-neutral-600">atención automatizada</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-[#007BFF]">∞</div>
            <div className="mt-2 text-sm text-neutral-600">escalabilidad</div>
          </div>
        </div>
      </section>

      {/* Qué es Autia - Layout simple en dos columnas */}
      <section id="que-es" className="border-t border-neutral-200 bg-neutral-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-5xl font-bold">¿Qué es Autia?</h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                En Autia diseñamos tecnología práctica y accesible para que las empresas crezcan sin complicaciones. Nuestra misión es
                <strong> simplificar lo complejo</strong>, creando sistemas que funcionan en el día a día.
              </p>
            </div>
            <div className="space-y-8">
              {['Digitaliza', 'Automatiza', 'Evoluciona'].map((step, i) => (
                <div key={i} className="border-l-4 border-[#007BFF] pl-6">
                  <div className="text-sm font-semibold text-[#007BFF]">Paso {i + 1}</div>
                  <div className="mt-1 text-2xl font-bold">{step}</div>
                  <p className="mt-2 text-neutral-600">
                    {step === "Digitaliza" && "Convierte procesos manuales en digitales."}
                    {step === "Automatiza" && "Ahorra tiempo conectando sistemas y flujos."}
                    {step === "Evoluciona" && "Aplica IA para tomar mejores decisiones."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios - Grid limpio y espacioso */}
      <section id="servicios" className="border-t border-neutral-200 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16">
            <h2 className="text-5xl font-bold">Servicios</h2>
            <p className="mt-4 text-lg text-neutral-600">Tecnología moderna para resolver problemas reales.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {servicios.map(({ icon: Icon, title, desc }, idx) => (
              <div key={idx} className="group">
                <Icon className="h-10 w-10 text-[#007BFF]" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Éxito - Lista simple */}
      <section id="casos" className="border-t border-neutral-200 bg-neutral-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-16 text-5xl font-bold">Casos de Éxito</h2>
          <div className="space-y-12">
            {casos.map((c, i) => (
              <div key={i} className="border-l-4 border-[#00C896] pl-8">
                <h3 className="flex items-center gap-2 text-2xl font-bold">
                  <Rocket className="h-6 w-6 text-[#00C896]" />
                  {c.title}
                </h3>
                <p className="mt-3 text-lg text-neutral-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios - Checklist simple */}
      <section id="beneficios" className="border-t border-neutral-200 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-16 text-5xl font-bold">Beneficios de Autia</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {beneficios.map((b, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-none text-[#00C896]" />
                <p className="text-lg text-neutral-700">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios - Cards simples */}
      <section id="testimonios" className="border-t border-neutral-200 bg-neutral-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-16 text-5xl font-bold">Testimonios</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {testimonios.map((t, i) => (
              <div key={i} className="border-l-4 border-neutral-300 pl-6">
                <p className="text-lg italic text-neutral-700">"{t}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Sección simple y directa */}
      <section id="cta" className="border-t border-neutral-200 py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-6xl font-bold">El futuro de tu empresa comienza hoy.</h2>
          <p className="mt-6 text-xl text-neutral-600">Digitaliza. Automatiza. Evoluciona.</p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#contacto">
              <Button size="lg" className="bg-[#00C896] px-8 py-6 text-base text-[#1C1C1C] hover:bg-[#00C896]/90">
                Agendar consultoría gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="lg" variant="outline" className="px-8 py-6 text-base">
                Hablar por WhatsApp
                <MessageCircle className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Simple y funcional */}
      <footer id="contacto" className="border-t border-neutral-200 bg-neutral-50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <Image src="/images/logo.webp" alt="Autia Logo" width={32} height={32} className="h-8 w-8" />
                <span className="text-xl font-bold">Autia</span>
              </div>
              <p className="mt-3 text-neutral-600">Tecnología que se adapta a ti.</p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500">Contacto</h3>
              <ul className="space-y-3 text-neutral-700">
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
                    WhatsApp disponible
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500">Navegación</h3>
              <ul className="space-y-3 text-neutral-700">
                <li><a href="#servicios" className="hover:text-[#007BFF]">Servicios</a></li>
                <li><a href="#casos" className="hover:text-[#007BFF]">Casos de éxito</a></li>
                <li><a href="#beneficios" className="hover:text-[#007BFF]">Beneficios</a></li>
                <li><a href="#testimonios" className="hover:text-[#007BFF]">Testimonios</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-neutral-200 pt-8 text-sm text-neutral-500">
            © {new Date().getFullYear()} Autia. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
