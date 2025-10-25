"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
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

// Diseño Split Screen
// Características: Layout dividido 50/50, contraste de colores entre secciones, interacción visual

export default function AutiaLandingSplit() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

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
    <div className="min-h-screen bg-white">
      {/* Header simple */}
      <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.webp" alt="Autia Logo" width={36} height={36} className="h-9 w-9" />
            <span className="text-2xl font-bold text-[#1C1C1C]">Autia</span>
          </div>
          <a
            href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="bg-[#00C896] text-[#1C1C1C] hover:bg-[#00C896]/90">
              <MessageCircle className="mr-2 h-4 w-4" />
              Contactar
            </Button>
          </a>
        </div>
      </header>

      {/* Hero - Split 50/50 */}
      <section id="hero" className="grid min-h-screen pt-20 md:grid-cols-2">
        {/* Lado izquierdo - Blanco */}
        <div className="flex flex-col justify-center bg-white px-12 py-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 inline-block rounded-full bg-[#007BFF]/10 px-4 py-1.5 text-sm font-semibold text-[#007BFF]">
              <Sparkles className="mr-2 inline h-4 w-4" />
              Digitaliza. Automatiza. Evoluciona.
            </div>
            <h1 className="text-6xl font-black leading-tight text-[#1C1C1C] md:text-7xl">
              Tecnología
              <br />
              <span className="text-[#007BFF]">Auténtica</span>
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              Soluciones digitales que llevan tu negocio al siguiente nivel. Deja atrás lo manual, conecta tus procesos y evoluciona con inteligencia artificial.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contacto">
                <Button size="lg" className="w-full bg-[#007BFF] px-8 py-6 text-base sm:w-auto">
                  Transformar mi negocio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Lado derecho - Azul con stats */}
        <div className="flex flex-col justify-center bg-gradient-to-br from-[#007BFF] to-[#00C896] px-12 py-24 text-white">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <div className="text-7xl font-black">+60%</div>
              <div className="mt-2 text-xl font-medium opacity-90">velocidad operativa</div>
            </div>
            <div>
              <div className="text-7xl font-black">24/7</div>
              <div className="mt-2 text-xl font-medium opacity-90">atención automatizada</div>
            </div>
            <div>
              <div className="text-7xl font-black">∞</div>
              <div className="mt-2 text-xl font-medium opacity-90">escalabilidad</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qué es - Split inverso */}
      <section id="que-es" className="grid md:grid-cols-2">
        {/* Lado izquierdo - Verde */}
        <div className="flex flex-col justify-center bg-gradient-to-br from-[#00C896] to-[#007BFF] px-12 py-24 text-white">
          <h2 className="text-6xl font-black">¿Qué es Autia?</h2>
          <p className="mt-6 text-xl leading-relaxed opacity-95">
            En Autia diseñamos tecnología práctica y accesible para que las empresas crezcan sin complicaciones. Nuestra misión es
            <strong> simplificar lo complejo</strong>, creando sistemas que funcionan en el día a día.
          </p>
        </div>

        {/* Lado derecho - Blanco */}
        <div className="bg-white px-12 py-24">
          <div className="space-y-8">
            {['Digitaliza', 'Automatiza', 'Evoluciona'].map((step, i) => (
              <div key={i} className="border-l-4 border-[#007BFF] bg-neutral-50 p-6">
                <div className="text-sm font-bold text-[#007BFF]">Paso {i + 1}</div>
                <div className="mt-2 text-3xl font-black text-[#1C1C1C]">{step}</div>
                <p className="mt-3 text-neutral-600">
                  {step === "Digitaliza" && "Convierte procesos manuales en digitales."}
                  {step === "Automatiza" && "Ahorra tiempo conectando sistemas y flujos."}
                  {step === "Evoluciona" && "Aplica IA para tomar mejores decisiones."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios - Split con interacción */}
      <section id="servicios" className="grid md:grid-cols-2">
        {/* Lado izquierdo - Lista de servicios */}
        <div className="bg-white px-12 py-24">
          <h2 className="mb-12 text-6xl font-black text-[#1C1C1C]">Servicios</h2>
          <div className="space-y-4">
            {servicios.map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={idx}
                className={`cursor-pointer border-l-4 p-6 transition-all ${
                  hoveredService === idx
                    ? 'border-[#007BFF] bg-[#007BFF]/5'
                    : 'border-neutral-200 bg-neutral-50'
                }`}
                onMouseEnter={() => setHoveredService(idx)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex items-start gap-4">
                  <Icon className={`h-8 w-8 flex-none ${hoveredService === idx ? 'text-[#007BFF]' : 'text-neutral-600'}`} />
                  <div>
                    <h3 className="text-xl font-bold text-[#1C1C1C]">{title}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lado derecho - Visual dinámico */}
        <div className="flex items-center justify-center bg-gradient-to-br from-[#1C1C1C] to-neutral-800 px-12 py-24">
          <div className="text-center text-white">
            {hoveredService !== null ? (
              <motion.div
                key={hoveredService}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#007BFF] to-[#00C896]">
                  {(() => {
                    const Icon = servicios[hoveredService].icon;
                    return <Icon className="h-16 w-16" />;
                  })()}
                </div>
                <h3 className="text-4xl font-black">{servicios[hoveredService].title}</h3>
                <p className="mt-4 text-xl opacity-80">{servicios[hoveredService].desc}</p>
              </motion.div>
            ) : (
              <div className="text-6xl font-black opacity-20">
                Explora nuestros
                <br />
                servicios
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Casos - Split alternado */}
      <section id="casos" className="py-24">
        <div className="mx-auto max-w-7xl px-12">
          <h2 className="mb-16 text-6xl font-black text-[#1C1C1C]">Casos de Éxito</h2>
          <div className="space-y-0">
            {casos.map((c, i) => (
              <div key={i} className={`grid md:grid-cols-2 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`flex items-center justify-center p-16 ${i % 2 === 0 ? 'bg-[#007BFF]' : 'bg-[#00C896]'}`}>
                  <Rocket className="h-24 w-24 text-white" />
                </div>
                <div className={`flex flex-col justify-center p-12 ${i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}`}>
                  <h3 className="text-4xl font-black text-[#1C1C1C]">{c.title}</h3>
                  <p className="mt-4 text-lg text-neutral-600">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios - Split */}
      <section id="beneficios" className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center bg-[#1C1C1C] px-12 py-24 text-white">
          <h2 className="text-6xl font-black">Beneficios de Autia</h2>
        </div>
        <div className="bg-white px-12 py-24">
          <div className="space-y-4">
            {beneficios.map((b, i) => (
              <div key={i} className="flex items-start gap-4 rounded-lg bg-neutral-50 p-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-none text-[#00C896]" />
                <p className="text-lg font-medium text-[#1C1C1C]">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios - Split */}
      <section id="testimonios" className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center bg-gradient-to-br from-[#007BFF] to-[#00C896] px-12 py-24 text-white">
          <h2 className="text-6xl font-black">Testimonios</h2>
          <p className="mt-6 text-xl opacity-90">Lo que dicen nuestros clientes</p>
        </div>
        <div className="bg-white px-12 py-24">
          <div className="space-y-8">
            {testimonios.map((t, i) => (
              <div key={i} className="border-l-4 border-[#00C896] bg-neutral-50 p-6">
                <p className="text-lg italic text-neutral-700">"{t}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Split dramático */}
      <section id="cta" className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center bg-[#1C1C1C] px-12 py-32 text-white">
          <h2 className="text-7xl font-black leading-tight">
            El futuro de tu empresa comienza hoy.
          </h2>
          <p className="mt-6 text-2xl opacity-80">Digitaliza. Automatiza. Evoluciona.</p>
        </div>
        <div className="flex flex-col justify-center bg-gradient-to-br from-[#00C896] to-[#007BFF] px-12 py-32">
          <div className="space-y-6">
            <a href="#contacto" className="block">
              <Button size="lg" className="w-full bg-white py-8 text-lg font-bold text-[#1C1C1C] hover:bg-white/90">
                Agendar consultoría gratuita
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </a>
            <a
              href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-white py-8 text-lg font-bold text-white hover:bg-white/10"
              >
                Hablar por WhatsApp
                <MessageCircle className="ml-2 h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Split */}
      <footer id="contacto" className="grid md:grid-cols-2">
        <div className="bg-white px-12 py-16">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.webp" alt="Autia Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-bold text-[#1C1C1C]">Autia</span>
          </div>
          <p className="mt-3 text-neutral-600">Tecnología que se adapta a ti.</p>
          <div className="mt-8">
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
        </div>
        <div className="bg-neutral-50 px-12 py-16">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500">Navegación</h3>
          <ul className="grid grid-cols-2 gap-3 text-neutral-700">
            <li><a href="#servicios" className="hover:text-[#007BFF]">Servicios</a></li>
            <li><a href="#casos" className="hover:text-[#007BFF]">Casos de éxito</a></li>
            <li><a href="#beneficios" className="hover:text-[#007BFF]">Beneficios</a></li>
            <li><a href="#testimonios" className="hover:text-[#007BFF]">Testimonios</a></li>
          </ul>
          <div className="mt-12 border-t border-neutral-300 pt-6 text-sm text-neutral-500">
            © {new Date().getFullYear()} Autia. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
