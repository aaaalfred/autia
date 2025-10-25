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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Paleta Autia
// Azul eléctrico: #007BFF
// Negro grafito: #1C1C1C
// Blanco: #FFFFFF
// Verde esmeralda: #00C896

export default function AutiaLanding() {
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
      {/* ====== Background FX ====== */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Glow gradients */}
        <motion.div
          className="absolute -top-24 left-[-10%] h-[40rem] w-[40rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, #007BFF20, transparent)" }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 right-[-10%] h-[40rem] w-[40rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, #00C89620, transparent)" }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ====== Header (glass) ====== */}
      <header className="sticky top-4 z-40 mx-auto w-full max-w-7xl px-4">
        <div
          className="flex items-center justify-between rounded-2xl border border-white/30 bg-white/70 px-4 py-3 shadow-lg backdrop-blur-md"
        >
          <a href="#hero" className="flex items-center gap-2 font-bold">
            <span className="h-3 w-3 rounded-full" style={{ background: "#00C896" }} />
            <span className="text-xl tracking-tight">Autia</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            <a href="#que-es" className="hover:text-[#007BFF]">¿Qué es?</a>
            <a href="#servicios" className="hover:text-[#007BFF]">Servicios</a>
            <a href="#casos" className="hover:text-[#007BFF]">Casos</a>
            <a href="#beneficios" className="hover:text-[#007BFF]">Beneficios</a>
            <a href="#contacto" className="hover:text-[#007BFF]">Contacto</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/525522586238?text=Hola%20Autia%2C%20quiero%20transformar%20mi%20negocio"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="rounded-2xl" style={{ background: "#007BFF" }}>
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* ====== Hero ====== */}
      <section id="hero" className="relative mt-8 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#007BFF]/30 bg-white/50 px-3 py-1 text-xs backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Digitaliza. Automatiza. Evoluciona.</span>
          </div>

          <h1 className="text-4xl font-extrabold md:text-7xl">
            <span className="bg-gradient-to-r from-[#007BFF] via-[#00C896] to-[#007BFF] bg-clip-text text-transparent">
              Tecnología auténtica para crecer sin fricción
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-neutral-600">
            Soluciones digitales que llevan tu negocio al siguiente nivel. Deja atrás lo manual, conecta tus procesos y evoluciona con inteligencia artificial.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto">
              <Button
                size="lg"
                className="rounded-2xl px-6 py-6 text-base"
                style={{ background: "#00C896", color: "#1C1C1C" }}
              >
                Quiero transformar mi negocio <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://wa.me/525522586238?text=Hola%20Autia%2C%20quiero%20una%20consultor%C3%ADa"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl border-[#1C1C1C]/10 px-6 py-6 text-base hover:bg-[#1C1C1C]/5"
              >
                Escribir por WhatsApp <MessageCircle className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid max-w-3xl grid-cols-3 gap-4">
            {[
              { k: "+60%", v: "velocidad operativa" },
              { k: "24/7", v: "atención automatizada" },
              { k: "∞", v: "escalabilidad" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border bg-white/60 p-4 text-center backdrop-blur">
                <div className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-3xl font-extrabold text-transparent">
                  {s.k}
                </div>
                <div className="text-xs text-neutral-600">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative blob */}
        <motion.div
          className="absolute -right-20 top-10 h-72 w-72 rounded-full opacity-30 blur-2xl"
          style={{ background: "radial-gradient(closest-side, #007BFF66, transparent)" }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </section>

      {/* ====== Qué es Autia ====== */}
      <section id="que-es" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">¿Qué es Autia?</h2>
            <p className="mt-4 text-lg text-neutral-600">
              En Autia diseñamos tecnología práctica y accesible para que las empresas crezcan sin complicaciones. Nuestra misión es
              <strong> simplificar lo complejo</strong>, creando sistemas que funcionan en el día a día.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {['Digitaliza', 'Automatiza', 'Evoluciona'].map((step, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border p-[1px]"
                  style={{ background: "linear-gradient(180deg, #007BFF33, #00C89633)" }}
                >
                  <div className="rounded-2xl bg-white p-4 transition-transform group-hover:-translate-y-1">
                    <div className="text-sm font-semibold text-[#007BFF]">Paso {i + 1}</div>
                    <div className="mt-1 text-lg font-bold">{step}</div>
                    <p className="mt-1 text-sm text-neutral-600">
                      {step === "Digitaliza" && "Convierte procesos manuales en digitales."}
                      {step === "Automatiza" && "Ahorra tiempo conectando sistemas y flujos."}
                      {step === "Evoluciona" && "Aplica IA para tomar mejores decisiones."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature tiles */}
          <div className="relative h-80">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-white shadow-xl" />
            <div className="grid h-full grid-cols-2 gap-3 p-3">
              <Tile icon={Shield} label="Seguridad y escalabilidad" bg="#007BFF" />
              <Tile icon={Map} label="Rutas y logística" bg="#00C896" />
              <Tile icon={FileText} label="Automatización documental" bg="#007BFF" />
              <Tile icon={Sparkles} label="IA aplicada al negocio" bg="#00C896" />
            </div>
          </div>
        </div>
      </section>

      {/* ====== Servicios (Bento grid) ====== */}
      <section id="servicios" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Servicios</h2>
              <p className="mt-2 max-w-2xl text-neutral-600">Tecnología moderna para resolver problemas reales.</p>
            </div>
            <a href="/servicios">
              <Button variant="outline" className="rounded-2xl">Ver todos</Button>
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {servicios.map(({ icon: Icon, title, desc, image }, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-xl"
              >
                <Image
                  src={image}
                  alt={title}
                  width={500}
                  height={500}
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-20"
                />
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Icon className="h-5 w-5 text-[#007BFF]" /> {title}
                </div>
                <p className="mt-2 text-sm text-neutral-600">{desc}</p>
                <motion.div
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-20"
                  style={{ background: "radial-gradient(closest-side, #00C89666, transparent)" }}
                  animate={{ rotate: [0, 30, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Casos de Éxito ====== */}
      <section id="casos" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Casos de Éxito</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {casos.map((c, i) => (
            <Card key={i} className="rounded-3xl border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-[#00C896]" /> {c.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-600">{c.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ====== Beneficios ====== */}
      <section id="beneficios" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold tracking-tight">Beneficios de Autia</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b, i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl border bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" style={{ color: "#00C896" }} />
                <p className="text-neutral-700">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Testimonios (marquee) ====== */}
      <section id="testimonios" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Testimonios</h2>
        <div className="relative mt-6 overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: [0, -600] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }}
          >
            {[...testimonios, ...testimonios].map((t, i) => (
              <Card key={i} className="min-w-[320px] rounded-3xl border">
                <CardContent className="p-6 text-neutral-700">“{t}”</CardContent>
              </Card>
            ))}'''
          </motion.div>
        </div>
      </section>

      {/* ====== CTA Final ====== */}
      <section id="cta" className="relative overflow-hidden py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div
            className="relative overflow-hidden rounded-3xl border p-[1px]"
            style={{ background: "linear-gradient(90deg, #007BFF44, #00C89644)" }}
          >
            <div className="relative rounded-3xl bg-[#1C1C1C] p-10 text-white">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h2 className="text-3xl font-extrabold">El futuro de tu empresa comienza hoy.</h2>
                  <p className="mt-2 text-white/80">Digitaliza. Automatiza. Evoluciona.</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href="#contacto">
                    <Button
                      size="lg"
                      className="rounded-2xl px-6 py-6 text-base"
                      style={{ background: "#00C896", color: "#1C1C1C" }}
                    >
                      Agendar consultoría gratuita <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/5210000000000?text=Hola%20Autia%2C%20quiero%20agendar%20una%20consultor%C3%ADa"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-2xl border-white/20 px-6 py-6 text-base text-white hover:bg-white/10"
                    >
                      Hablar por WhatsApp <MessageCircle className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* subtle glow */}
              <motion.div
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-2xl"
                style={{ background: "radial-gradient(closest-side, #007BFFAA, transparent)" }}
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 14, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== Footer ====== */}
      <footer id="contacto" className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ background: "#00C896" }} />
                <span className="text-xl font-bold">Autia</span>
              </div>
              <p className="mt-3 max-w-sm text-neutral-600">Tecnología que se adapta a ti.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-700">Contacto</h3>
              <ul className="mt-3 space-y-2 text-neutral-700">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:contacto@autia.mx" className="underline-offset-2 hover:underline">
                    contacto@autia.mx
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <a
                    href="https://wa.me/5210000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="underline-offset-2 hover:underline"
                  >
                    WhatsApp disponible
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-700">Navegación</h3>
              <ul className="mt-3 space-y-2 text-neutral-700">
                <li>
                  <a href="#servicios" className="hover:text-[#007BFF]">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#casos" className="hover:text-[#007BFF]">
                    Casos de éxito
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="hover:text-[#007BFF]">
                    Beneficios
                  </a>
                </li>
                <li>
                  <a href="#testimonios" className="hover:text-[#007BFF]">
                    Testimonios
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-sm text-neutral-500">© {new Date().getFullYear()} Autia. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  );
}

function Tile({ icon: Icon, label, bg }: { icon: any; label: string; bg: string }) {
  return (
    <div
      className="group rounded-2xl p-[1px]"
      style={{ background: `linear-gradient(180deg, ${bg}44, transparent)` }}
    >
      <div className="rounded-2xl bg-white p-4 transition-transform group-hover:-translate-y-1">
        <Icon className="h-8 w-8" />
        <p className="mt-2 text-sm">{label}</p>
      </div>
    </div>
  );
}