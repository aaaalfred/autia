"use client";
import { useMemo } from "react";
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

// Diseño Glassmorphism
// Características: Efectos de vidrio, fondos difusos (blur), capas translúcidas, colores suaves

export default function AutiaLandingGlass() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-cyan-50 text-[#1C1C1C]">
      {/* Fondos animados con colores suaves */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-40 top-0 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-blue-200/40 to-cyan-200/40 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 100, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-40 bottom-0 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-200/40 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -100, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-200/30 to-pink-200/30 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Header con efecto glass */}
      <header className="sticky top-4 z-50 mx-auto max-w-7xl px-4">
        <div className="rounded-3xl border border-white/40 bg-white/30 px-6 py-4 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/60 p-2 shadow-lg backdrop-blur-sm">
                <Image src="/images/logo.webp" alt="Autia Logo" width={36} height={36} className="h-9 w-9" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">
                Autia
              </span>
            </div>
            <nav className="hidden gap-6 md:flex">
              <a href="#que-es" className="font-medium text-gray-700 transition-colors hover:text-[#007BFF]">¿Qué es?</a>
              <a href="#servicios" className="font-medium text-gray-700 transition-colors hover:text-[#007BFF]">Servicios</a>
              <a href="#casos" className="font-medium text-gray-700 transition-colors hover:text-[#007BFF]">Casos</a>
              <a href="#beneficios" className="font-medium text-gray-700 transition-colors hover:text-[#007BFF]">Beneficios</a>
              <a href="#contacto" className="font-medium text-gray-700 transition-colors hover:text-[#007BFF]">Contacto</a>
            </nav>
            <a
              href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="rounded-2xl bg-gradient-to-r from-[#007BFF] to-[#00C896] font-semibold shadow-lg">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero - Glass cards flotantes */}
      <section id="hero" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-4 py-2 text-xs font-semibold backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-[#007BFF]" />
              Digitaliza. Automatiza. Evoluciona.
            </div>

            <h1 className="text-6xl font-extrabold leading-tight md:text-8xl">
              <span className="bg-gradient-to-r from-[#007BFF] via-purple-500 to-[#00C896] bg-clip-text text-transparent">
                Tecnología auténtica
                <br />
                para crecer sin fricción
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-700">
              Soluciones digitales que llevan tu negocio al siguiente nivel. Deja atrás lo manual, conecta tus procesos y evoluciona con inteligencia artificial.
            </p>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="#contacto">
                <Button size="lg" className="rounded-2xl bg-gradient-to-r from-[#007BFF] to-[#00C896] px-8 py-6 text-base font-bold shadow-2xl">
                  Quiero transformar mi negocio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl border-2 border-white/50 bg-white/30 px-8 py-6 text-base font-semibold backdrop-blur-xl hover:bg-white/50"
                >
                  Escribir por WhatsApp
                  <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            {/* Stats en glass cards */}
            <div className="mx-auto mt-20 grid max-w-4xl grid-cols-3 gap-6">
              {[
                { k: "+60%", v: "velocidad operativa", gradient: "from-blue-400 to-cyan-400" },
                { k: "24/7", v: "atención automatizada", gradient: "from-purple-400 to-pink-400" },
                { k: "∞", v: "escalabilidad", gradient: "from-emerald-400 to-teal-400" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="group rounded-3xl border border-white/50 bg-white/40 p-8 shadow-xl backdrop-blur-2xl transition-all hover:bg-white/60"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`bg-gradient-to-r ${s.gradient} bg-clip-text text-5xl font-black text-transparent`}>
                    {s.k}
                  </div>
                  <div className="mt-2 text-sm text-gray-600">{s.v}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qué es Autia */}
      <section id="que-es" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-3xl border border-white/50 bg-white/40 p-10 shadow-2xl backdrop-blur-2xl">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">
                ¿Qué es Autia?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                En Autia diseñamos tecnología práctica y accesible para que las empresas crezcan sin complicaciones. Nuestra misión es
                <strong> simplificar lo complejo</strong>, creando sistemas que funcionan en el día a día.
              </p>
            </div>
            <div className="space-y-6">
              {['Digitaliza', 'Automatiza', 'Evoluciona'].map((step, i) => (
                <motion.div
                  key={i}
                  className="rounded-3xl border border-white/50 bg-white/30 p-6 shadow-xl backdrop-blur-2xl"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-xs font-semibold text-[#007BFF]">Paso {i + 1}</div>
                  <div className="mt-2 text-2xl font-bold">{step}</div>
                  <p className="mt-2 text-gray-600">
                    {step === "Digitaliza" && "Convierte procesos manuales en digitales."}
                    {step === "Automatiza" && "Ahorra tiempo conectando sistemas y flujos."}
                    {step === "Evoluciona" && "Aplica IA para tomar mejores decisiones."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios - Grid con glass effect */}
      <section id="servicios" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 rounded-3xl border border-white/50 bg-white/40 p-8 shadow-2xl backdrop-blur-2xl">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">
              Servicios
            </h2>
            <p className="mt-4 text-lg text-gray-700">Tecnología moderna para resolver problemas reales.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicios.map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={idx}
                className="group rounded-3xl border border-white/50 bg-white/30 p-6 shadow-xl backdrop-blur-2xl transition-all hover:bg-white/50"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="rounded-2xl bg-gradient-to-br from-[#007BFF]/20 to-[#00C896]/20 p-4 w-fit">
                  <Icon className="h-8 w-8 text-[#007BFF]" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section id="casos" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 rounded-3xl border border-white/50 bg-white/40 p-8 shadow-2xl backdrop-blur-2xl">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">
              Casos de Éxito
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {casos.map((c, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/50 bg-white/30 p-8 shadow-xl backdrop-blur-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-gradient-to-br from-[#00C896]/30 to-[#00C896]/10 p-3">
                    <Rocket className="h-7 w-7 text-[#00C896]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{c.title}</h3>
                    <p className="mt-3 text-gray-700">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 rounded-3xl border border-white/50 bg-white/40 p-8 shadow-2xl backdrop-blur-2xl">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">
              Beneficios de Autia
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-2xl border border-white/50 bg-white/30 p-5 shadow-lg backdrop-blur-2xl"
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-none text-[#00C896]" />
                <p className="text-gray-700">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 rounded-3xl border border-white/50 bg-white/40 p-8 shadow-2xl backdrop-blur-2xl">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">
              Testimonios
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {testimonios.map((t, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/50 bg-white/30 p-8 shadow-xl backdrop-blur-2xl"
              >
                <p className="text-lg italic text-gray-700">"{t}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta" className="px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[3rem] border border-white/50 bg-gradient-to-br from-white/50 to-white/30 p-16 text-center shadow-2xl backdrop-blur-3xl">
            <h2 className="text-7xl font-black bg-gradient-to-r from-[#007BFF] via-purple-500 to-[#00C896] bg-clip-text text-transparent">
              El futuro de tu empresa comienza hoy.
            </h2>
            <p className="mt-6 text-xl font-semibold text-gray-700">Digitaliza. Automatiza. Evoluciona.</p>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="#contacto">
                <Button size="lg" className="rounded-2xl bg-gradient-to-r from-[#007BFF] to-[#00C896] px-10 py-7 text-base font-bold shadow-2xl">
                  Agendar consultoría gratuita
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </a>
              <a
                href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl border-2 border-white/50 bg-white/40 px-10 py-7 text-base font-bold backdrop-blur-xl hover:bg-white/60"
                >
                  Hablar por WhatsApp
                  <MessageCircle className="ml-2 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-white/50 bg-white/40 p-10 shadow-2xl backdrop-blur-2xl">
            <div className="grid gap-12 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-2">
                  <Image src="/images/logo.webp" alt="Autia Logo" width={32} height={32} className="h-8 w-8" />
                  <span className="text-xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">
                    Autia
                  </span>
                </div>
                <p className="mt-3 text-gray-700">Tecnología que se adapta a ti.</p>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-600">Contacto</h3>
                <ul className="space-y-3 text-gray-700">
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
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-600">Navegación</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><a href="#servicios" className="hover:text-[#007BFF]">Servicios</a></li>
                  <li><a href="#casos" className="hover:text-[#007BFF]">Casos de éxito</a></li>
                  <li><a href="#beneficios" className="hover:text-[#007BFF]">Beneficios</a></li>
                  <li><a href="#testimonios" className="hover:text-[#007BFF]">Testimonios</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-300/50 pt-6 text-sm text-gray-600">
              © {new Date().getFullYear()} Autia. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
