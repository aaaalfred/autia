"use client";
import { useEffect, useState, useMemo } from "react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Paleta Autia Dark
// Azul eléctrico: #007BFF (neon)
// Negro profundo: #0A0A0A
// Negro grafito: #1C1C1C
// Verde esmeralda: #00C896 (neon)
// Gris oscuro: #2A2A2A

export default function OscuraPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { title: "Contratación digital", desc: "De carpetas físicas a contratos electrónicos listos en minutos.", icon: FileSignature },
    { title: "Distribución inteligente", desc: "App logística que optimiza rutas y garantiza entregas a tiempo.", icon: Map },
    { title: "Gestión en punto de venta", desc: "Validación de inventarios en tiempo real para evitar pérdidas.", icon: Shield },
    { title: "Automatización fiscal", desc: "Lectura automática de constancias y facturas con validación integrada.", icon: ScanText },
  ];

  const testimonios = [
    { text: "Con Autia reducimos a la mitad el tiempo de contratación.", company: "TechCorp" },
    { text: "La automatización nos ahorra 20 horas de trabajo manual cada semana.", company: "InnovateLab" },
    { text: "Digitalizamos la operación sin necesidad de infraestructura costosa.", company: "StartupX" },
    { text: "Ahora validamos documentos y firmamos contratos sin perder tiempo.", company: "Enterprise Co" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* ====== Animated Background ====== */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#007BFF11 1px, transparent 1px), linear-gradient(90deg, #007BFF11 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        {/* Neon glows */}
        <motion.div
          className="absolute -top-48 left-0 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, #007BFF44, transparent)" }}
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-0 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, #00C89644, transparent)" }}
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, #007BFF33, transparent)" }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ====== Neon Header ====== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1C1C1C]/90 backdrop-blur-xl shadow-lg shadow-[#007BFF]/10 py-3"
            : "bg-[#1C1C1C]/70 backdrop-blur-md py-5 border-b border-[#007BFF]/20"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            <a href="#hero" className="group flex items-center gap-3 font-bold transition-transform hover:scale-105">
              <div className="relative rounded-2xl bg-gradient-to-br from-[#007BFF] to-[#00C896] p-[2px] shadow-lg shadow-[#007BFF]/50">
                <div className="rounded-2xl bg-[#0A0A0A] p-3">
                  <Image
                    src="/images/logo.webp"
                    alt="Autia Logo"
                    width={56}
                    height={56}
                    className="h-14 w-14 drop-shadow-[0_0_15px_rgba(0,123,255,0.5)]"
                  />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-[#007BFF] to-[#00C896] opacity-50 blur-xl group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-2xl tracking-tight bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,123,255,0.5)]">
                Autia
              </span>
            </a>

            <nav className="hidden gap-8 md:flex">
              {["¿Qué es?", "Servicios", "Casos", "Beneficios", "Contacto"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace("¿", "").replace("?", "")}`}
                  className="relative font-medium text-gray-300 transition-colors hover:text-[#00C896] group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#007BFF] to-[#00C896] transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            <a
              href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className="rounded-2xl font-semibold shadow-lg shadow-[#00C896]/50 hover:shadow-[#00C896]/80 transition-all border border-[#00C896]/30"
                style={{ background: "linear-gradient(135deg, #00C896, #00A880)", color: "#0A0A0A" }}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* ====== Hero Dark ====== */}
      <section id="hero" className="relative pt-40 pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#007BFF]/40 bg-[#007BFF]/10 px-6 py-3 backdrop-blur-sm shadow-lg shadow-[#007BFF]/20">
                <Zap className="h-5 w-5 text-[#00C896]" />
                <span className="font-semibold text-gray-200">Digitaliza. Automatiza. Evoluciona.</span>
              </div>

              <h1 className="text-6xl font-extrabold leading-tight md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-[#007BFF] via-[#00C896] to-[#007BFF] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,123,255,0.3)]">
                  Tecnología auténtica
                </span>
                <br />
                <span className="text-white drop-shadow-[0_0_20px_rgba(0,200,150,0.2)]">
                  para crecer sin fricción
                </span>
              </h1>

              <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Soluciones digitales que llevan tu negocio al siguiente nivel. Deja atrás lo manual,
                conecta tus procesos y evoluciona con inteligencia artificial.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row justify-center">
                <a href="#contacto">
                  <Button
                    size="lg"
                    className="rounded-2xl px-10 py-8 text-lg font-bold shadow-2xl shadow-[#00C896]/50 hover:shadow-[#00C896]/80 transition-all border-2 border-[#00C896]/50"
                    style={{ background: "linear-gradient(135deg, #00C896, #00A880)", color: "#0A0A0A" }}
                  >
                    Transformar mi negocio <ArrowRight className="ml-2 h-6 w-6" />
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
                    className="rounded-2xl border-2 border-[#007BFF] bg-[#007BFF]/10 px-10 py-8 text-lg font-bold text-white hover:bg-[#007BFF]/20 transition-all shadow-lg shadow-[#007BFF]/30"
                  >
                    Escribir por WhatsApp <MessageCircle className="ml-2 h-6 w-6" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Stats con efecto neon */}
          <div className="mt-20 grid max-w-5xl grid-cols-3 gap-8 mx-auto">
            {[
              { k: "+60%", v: "velocidad operativa", color: "#007BFF" },
              { k: "24/7", v: "atención automatizada", color: "#00C896" },
              { k: "∞", v: "escalabilidad", color: "#007BFF" },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative rounded-3xl border-2 bg-[#1C1C1C]/50 p-8 text-center backdrop-blur-sm transition-all"
                style={{ borderColor: `${s.color}40` }}
              >
                <div
                  className="text-5xl font-extrabold mb-3"
                  style={{
                    background: `linear-gradient(135deg, ${s.color}, #00C896)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: `drop-shadow(0 0 20px ${s.color}80)`
                  }}
                >
                  {s.k}
                </div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">{s.v}</div>

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 -z-10 rounded-3xl opacity-0 blur-xl transition-opacity group-hover:opacity-100"
                  style={{ background: `radial-gradient(closest-side, ${s.color}30, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Qué es Autia - Dark ====== */}
      <section id="que-es" className="py-24 bg-[#1C1C1C]/30 border-y border-[#007BFF]/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              ¿Qué es Autia?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Diseñamos tecnología práctica y accesible para que las empresas crezcan sin complicaciones.
              Nuestra misión es <strong className="text-[#00C896]">simplificar lo complejo</strong>, creando sistemas que funcionan en el día a día.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 mt-16">
            {[
              { step: 'Digitaliza', desc: 'Convierte procesos manuales en digitales de forma eficiente.', icon: Cpu },
              { step: 'Automatiza', desc: 'Ahorra tiempo conectando sistemas y optimizando flujos.', icon: Bot },
              { step: 'Evoluciona', desc: 'Aplica IA para tomar mejores decisiones estratégicas.', icon: Sparkles }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="group relative rounded-3xl border-2 border-[#007BFF]/30 bg-gradient-to-br from-[#1C1C1C] to-[#2A2A2A] p-8 shadow-xl hover:shadow-2xl hover:shadow-[#007BFF]/20 transition-all"
                >
                  {/* Number badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#007BFF] to-[#00C896] shadow-lg shadow-[#007BFF]/50">
                    <span className="text-2xl font-bold text-white">{i + 1}</span>
                  </div>

                  <div className="mt-8 flex justify-center mb-6">
                    <div className="rounded-2xl bg-[#007BFF]/10 p-4 border border-[#007BFF]/30">
                      <Icon className="h-12 w-12 text-[#00C896]" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">
                    {item.step}
                  </h3>
                  <p className="text-center text-gray-400 leading-relaxed">{item.desc}</p>

                  {/* Hover glow */}
                  <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[#007BFF]/0 to-[#00C896]/0 opacity-0 blur-2xl transition-opacity group-hover:from-[#007BFF]/20 group-hover:to-[#00C896]/20 group-hover:opacity-100" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== Servicios Dark con imágenes brillantes ====== */}
      <section id="servicios" className="py-24 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-400">Tecnología moderna para resolver problemas reales.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicios.map(({ icon: Icon, title, desc, image }, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative overflow-hidden rounded-3xl border-2 border-[#007BFF]/20 bg-gradient-to-br from-[#1C1C1C] to-[#2A2A2A] p-6 shadow-xl hover:shadow-2xl hover:shadow-[#00C896]/30 transition-all"
              >
                {/* Imagen con brillo */}
                <div className="mb-6 flex justify-center relative">
                  <div className="relative rounded-2xl bg-gradient-to-br from-[#007BFF]/20 to-[#00C896]/20 p-5 border border-[#007BFF]/40">
                    <Image
                      src={image}
                      alt={title}
                      width={300}
                      height={300}
                      className="h-32 w-32 object-contain transition-transform group-hover:scale-110 drop-shadow-[0_0_20px_rgba(0,200,150,0.4)]"
                    />
                    {/* Glow behind image */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#007BFF]/30 to-[#00C896]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <Icon className="h-6 w-6 text-[#00C896]" />
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#007BFF]/0 to-[#00C896]/0 opacity-0 transition-opacity group-hover:from-[#007BFF]/10 group-hover:to-[#00C896]/10 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Casos de Éxito Dark ====== */}
      <section id="casos" className="py-24 bg-[#1C1C1C]/30 border-y border-[#007BFF]/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Casos de Éxito
            </h2>
            <p className="text-xl text-gray-400">Transformaciones reales para empresas reales</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {casos.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="rounded-3xl border-2 border-[#00C896]/30 bg-gradient-to-br from-[#1C1C1C] to-[#2A2A2A] shadow-xl hover:shadow-2xl hover:shadow-[#00C896]/20 transition-all h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-4 text-xl">
                        <div className="relative rounded-2xl bg-gradient-to-br from-[#007BFF] to-[#00C896] p-4 shadow-lg shadow-[#00C896]/50">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <span className="text-white">{c.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-400 text-lg leading-relaxed">{c.desc}</CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== Beneficios Dark ====== */}
      <section id="beneficios" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Beneficios de Autia
            </h2>
            <p className="text-xl text-gray-400">Resultados tangibles para tu negocio</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group flex items-start gap-4 rounded-2xl border-2 border-[#00C896]/20 bg-[#1C1C1C]/50 p-6 shadow-lg hover:shadow-xl hover:shadow-[#00C896]/20 transition-all backdrop-blur-sm"
              >
                <CheckCircle2 className="mt-1 h-7 w-7 flex-none text-[#00C896] drop-shadow-[0_0_10px_rgba(0,200,150,0.6)]" />
                <p className="font-medium text-gray-200 text-lg leading-relaxed">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Testimonios Dark ====== */}
      <section id="testimonios" className="py-24 bg-[#1C1C1C]/30 border-y border-[#007BFF]/10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Testimonios
            </h2>
            <p className="text-xl text-gray-400">Lo que dicen nuestros clientes</p>
          </div>

          <div className="relative">
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" }}
            >
              {[...testimonios, ...testimonios, ...testimonios].map((t, i) => (
                <Card key={i} className="min-w-[450px] rounded-3xl border-2 border-[#007BFF]/30 bg-gradient-to-br from-[#1C1C1C] to-[#2A2A2A] shadow-2xl">
                  <CardContent className="p-8">
                    <p className="text-gray-300 text-lg italic mb-4 leading-relaxed">"{t.text}"</p>
                    <p className="text-sm font-semibold text-[#00C896]">— {t.company}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== CTA Dark con efecto neón ====== */}
      <section id="cta" className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#007BFF]/40 bg-gradient-to-br from-[#1C1C1C] via-[#2A2A2A] to-[#1C1C1C] p-16 shadow-2xl shadow-[#007BFF]/30">
            <div className="relative z-10 flex flex-col items-center justify-center gap-10 text-center">
              <div>
                <h2 className="text-5xl font-extrabold md:text-6xl mb-6 bg-gradient-to-r from-[#007BFF] via-[#00C896] to-[#007BFF] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,123,255,0.5)]">
                  El futuro de tu empresa comienza hoy.
                </h2>
                <p className="text-2xl text-gray-400">Digitaliza. Automatiza. Evoluciona.</p>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row">
                <a href="#contacto">
                  <Button
                    size="lg"
                    className="rounded-2xl px-10 py-8 text-lg font-bold shadow-2xl shadow-[#00C896]/60 hover:shadow-[#00C896]/100 transition-all border-2 border-[#00C896]/50"
                    style={{ background: "linear-gradient(135deg, #00C896, #00A880)", color: "#0A0A0A" }}
                  >
                    Agendar consultoría gratuita <ArrowRight className="ml-3 h-6 w-6" />
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
                    className="rounded-2xl border-2 border-[#007BFF] bg-[#007BFF]/10 px-10 py-8 text-lg font-bold text-white hover:bg-[#007BFF]/20 transition-all shadow-lg shadow-[#007BFF]/40"
                  >
                    Hablar por WhatsApp <MessageCircle className="ml-3 h-6 w-6" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Animated neon circles */}
            <motion.div
              className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full"
              style={{ background: "radial-gradient(closest-side, #007BFF33, transparent)" }}
              animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div
              className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full"
              style={{ background: "radial-gradient(closest-side, #00C89633, transparent)" }}
              animate={{ scale: [1.3, 1, 1.3], rotate: [360, 180, 0] }}
              transition={{ duration: 25, repeat: Infinity }}
            />
          </div>
        </div>
      </section>

      {/* ====== Footer Dark ====== */}
      <footer id="contacto" className="border-t border-[#007BFF]/20 bg-[#0A0A0A] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative rounded-2xl bg-gradient-to-br from-[#007BFF] to-[#00C896] p-[2px] shadow-lg shadow-[#007BFF]/50">
                  <div className="rounded-2xl bg-[#0A0A0A] p-3">
                    <Image
                      src="/images/logo.webp"
                      alt="Autia Logo"
                      width={48}
                      height={48}
                      className="h-12 w-12 drop-shadow-[0_0_15px_rgba(0,123,255,0.5)]"
                    />
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">
                  Autia
                </span>
              </div>
              <p className="text-gray-400 text-lg">Tecnología que se adapta a ti.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 group">
                  <Mail className="h-5 w-5 text-[#00C896]" />
                  <a href="mailto:contacto@autia.mx" className="text-gray-400 hover:text-[#00C896] transition-colors">
                    contacto@autia.mx
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <MessageCircle className="h-5 w-5 text-[#00C896]" />
                  <a
                    href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-[#00C896] transition-colors"
                  >
                    WhatsApp disponible
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Navegación</h3>
              <ul className="space-y-3">
                {["Servicios", "Casos de éxito", "Beneficios", "Testimonios"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(" de ", "-").replace(" ", "-")}`} className="text-gray-400 hover:text-[#00C896] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#007BFF]/20 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Autia. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
