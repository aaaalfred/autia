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
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Diseño Dark Mode Premium
// Características: Fondo oscuro, acentos neón brillantes, efectos de luz, estilo futurista

export default function AutiaLandingDark() {
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
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Efectos de fondo neón */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(closest-side, #007BFF, transparent)" }}
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(closest-side, #00C896, transparent)" }}
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Header futurista con efecto glow */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#007BFF] to-[#00C896] opacity-50 blur-lg" />
              <Image src="/images/logo.webp" alt="Autia Logo" width={40} height={40} className="relative h-10 w-10 rounded-lg" />
            </div>
            <span className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">Autia</span>
            </span>
          </div>
          <nav className="hidden gap-8 md:flex">
            <a href="#que-es" className="text-sm font-medium text-white/70 transition-colors hover:text-[#00C896]">¿Qué es?</a>
            <a href="#servicios" className="text-sm font-medium text-white/70 transition-colors hover:text-[#00C896]">Servicios</a>
            <a href="#casos" className="text-sm font-medium text-white/70 transition-colors hover:text-[#00C896]">Casos</a>
            <a href="#beneficios" className="text-sm font-medium text-white/70 transition-colors hover:text-[#00C896]">Beneficios</a>
            <a href="#contacto" className="text-sm font-medium text-white/70 transition-colors hover:text-[#00C896]">Contacto</a>
          </nav>
          <a
            href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="relative overflow-hidden bg-[#00C896] font-semibold text-[#0A0A0A] hover:bg-[#00C896]/90">
              <Zap className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </a>
        </div>
      </header>

      {/* Hero - Neón y brillos */}
      <section id="hero" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#007BFF]/30 bg-[#007BFF]/10 px-4 py-2 text-xs font-semibold text-[#00C896]">
              <Sparkles className="h-4 w-4" />
              Digitaliza. Automatiza. Evoluciona.
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-8xl">
              <span className="bg-gradient-to-r from-[#007BFF] via-[#00C896] to-[#007BFF] bg-clip-text text-transparent">
                Tecnología auténtica
              </span>
              <br />
              <span className="text-white">para crecer sin fricción</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
              Soluciones digitales que llevan tu negocio al siguiente nivel. Deja atrás lo manual, conecta tus procesos y evoluciona con inteligencia artificial.
            </p>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="#contacto">
                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-[#007BFF] to-[#00C896] px-8 py-6 text-base font-bold">
                  <span className="relative z-10">Quiero transformar mi negocio</span>
                  <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00C896] to-[#007BFF] opacity-0 transition-opacity group-hover:opacity-100" />
                </Button>
              </a>
              <a
                href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="lg" variant="outline" className="border-white/20 px-8 py-6 text-base hover:bg-white/10">
                  Escribir por WhatsApp
                  <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            {/* Stats con efecto neón */}
            <div className="mx-auto mt-20 grid max-w-4xl grid-cols-3 gap-8">
              {[
                { k: "+60%", v: "velocidad operativa", color: "#007BFF" },
                { k: "24/7", v: "atención automatizada", color: "#00C896" },
                { k: "∞", v: "escalabilidad", color: "#007BFF" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity hover:opacity-30" style={{ background: s.color }} />
                  <div className="relative text-5xl font-black" style={{ color: s.color }}>{s.k}</div>
                  <div className="relative mt-2 text-sm text-white/60">{s.v}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qué es Autia */}
      <section id="que-es" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-5xl font-black">¿Qué es Autia?</h2>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                En Autia diseñamos tecnología práctica y accesible para que las empresas crezcan sin complicaciones. Nuestra misión es
                <strong className="text-[#00C896]"> simplificar lo complejo</strong>, creando sistemas que funcionan en el día a día.
              </p>
            </div>
            <div className="space-y-6">
              {['Digitaliza', 'Automatiza', 'Evoluciona'].map((step, i) => (
                <motion.div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#007BFF] to-[#00C896]" />
                  <div className="text-xs font-semibold text-[#007BFF]">Paso {i + 1}</div>
                  <div className="mt-2 text-2xl font-bold text-white">{step}</div>
                  <p className="mt-2 text-white/60">
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

      {/* Servicios - Grid con hover effects */}
      <section id="servicios" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <h2 className="text-5xl font-black">Servicios</h2>
              <p className="mt-4 text-lg text-white/70">Tecnología moderna para resolver problemas reales.</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicios.map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-sm"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/20 to-[#00C896]/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <Icon className="relative h-10 w-10 text-[#00C896]" />
                <h3 className="relative mt-4 text-lg font-bold text-white">{title}</h3>
                <p className="relative mt-2 text-sm text-white/60">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section id="casos" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-5xl font-black">Casos de Éxito</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {casos.map((c, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C896]/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <Rocket className="h-8 w-8 flex-none text-[#00C896]" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{c.title}</h3>
                    <p className="mt-3 text-white/70">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-5xl font-black">Beneficios de Autia</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-none text-[#00C896]" />
                <p className="text-white/80">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-5xl font-black">Testimonios</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {testimonios.map((t, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <p className="text-lg italic text-white/80">"{t}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final con efectos de luz */}
      <section id="cta" className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#007BFF]/20 to-[#00C896]/20 p-16 text-center backdrop-blur-xl">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
            <motion.div
              className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[#007BFF] opacity-20 blur-[100px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-[#00C896] opacity-20 blur-[100px]"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative">
              <h2 className="text-6xl font-black text-white">El futuro de tu empresa comienza hoy.</h2>
              <p className="mt-6 text-xl text-white/70">Digitaliza. Automatiza. Evoluciona.</p>

              <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a href="#contacto">
                  <Button size="lg" className="bg-[#00C896] px-8 py-6 text-base font-bold text-[#0A0A0A] hover:bg-[#00C896]/90">
                    Agendar consultoría gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="lg" variant="outline" className="border-white/20 px-8 py-6 text-base text-white hover:bg-white/10">
                    Hablar por WhatsApp
                    <MessageCircle className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <Image src="/images/logo.webp" alt="Autia Logo" width={32} height={32} className="h-8 w-8" />
                <span className="text-xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">Autia</span>
              </div>
              <p className="mt-3 text-white/60">Tecnología que se adapta a ti.</p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/40">Contacto</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-2 hover:text-[#00C896]">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:contacto@autia.mx">contacto@autia.mx</a>
                </li>
                <li className="flex items-center gap-2 hover:text-[#00C896]">
                  <MessageCircle className="h-4 w-4" />
                  <a
                    href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp disponible
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/40">Navegación</h3>
              <ul className="space-y-3 text-white/70">
                <li><a href="#servicios" className="hover:text-[#00C896]">Servicios</a></li>
                <li><a href="#casos" className="hover:text-[#00C896]">Casos de éxito</a></li>
                <li><a href="#beneficios" className="hover:text-[#00C896]">Beneficios</a></li>
                <li><a href="#testimonios" className="hover:text-[#00C896]">Testimonios</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-sm text-white/40">
            © {new Date().getFullYear()} Autia. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
