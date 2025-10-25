"use client";
import { useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Paleta Autia Híbrida (Black & White)
// Negro profundo: #0A0A0A
// Blanco puro: #FFFFFF
// Azul eléctrico: #007BFF
// Verde esmeralda: #00C896

export default function HibridaPage() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 0.85]);

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
    { text: "Con Autia reducimos a la mitad el tiempo de contratación.", company: "TechCorp", author: "María González" },
    { text: "La automatización nos ahorra 20 horas de trabajo manual cada semana.", company: "InnovateLab", author: "Carlos Ramírez" },
    { text: "Digitalizamos la operación sin necesidad de infraestructura costosa.", company: "StartupX", author: "Ana Torres" },
    { text: "Ahora validamos documentos y firmamos contratos sin perder tiempo.", company: "Enterprise Co", author: "Roberto Díaz" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ====== Header Vertical Split ====== */}
      <motion.header
        style={{ opacity: headerOpacity }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A] to-white" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            {/* Logo lado oscuro */}
            <a href="#hero" className="group flex items-center gap-4 font-bold transition-transform hover:scale-105">
              <div className="relative rounded-3xl bg-gradient-to-br from-[#007BFF] via-[#00C896] to-[#007BFF] p-[3px] shadow-2xl">
                <div className="rounded-3xl bg-white p-3">
                  <Image
                    src="/images/logo.webp"
                    alt="Autia Logo"
                    width={60}
                    height={60}
                    className="h-15 w-15"
                  />
                </div>
              </div>
              <div>
                <span className="block text-3xl tracking-tight bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">
                  Autia
                </span>
                <span className="block text-xs text-gray-400 tracking-wider">TECNOLOGÍA AUTÉNTICA</span>
              </div>
            </a>

            {/* Navigation - adapts color based on scroll */}
            <nav className="hidden gap-8 md:flex">
              {["¿Qué es?", "Servicios", "Casos", "Beneficios", "Contacto"].map((item, idx) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace("¿", "").replace("?", "")}`}
                  className={`relative font-bold text-sm uppercase tracking-wider transition-colors ${
                    idx < 3 ? "text-white hover:text-[#00C896]" : "text-[#0A0A0A] hover:text-[#007BFF]"
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <a
              href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className="rounded-full px-8 py-6 font-bold text-white shadow-2xl hover:shadow-[#00C896]/50 transition-all"
                style={{ background: "linear-gradient(135deg, #007BFF, #00C896)" }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contáctanos
              </Button>
            </a>
          </div>
        </div>
      </motion.header>

      {/* ====== Hero - Split Screen Black & White ====== */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Split background */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-[#0A0A0A]" />
          <div className="w-1/2 bg-white" />
        </div>

        {/* Diagonal separator with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#007BFF]/10 to-transparent" style={{
          clipPath: "polygon(45% 0, 55% 0, 55% 100%, 45% 100%)"
        }} />

        <div className="relative mx-auto max-w-7xl px-6 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Dark */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border-2 border-[#007BFF] bg-[#007BFF]/20 px-6 py-3 backdrop-blur-sm">
                <Zap className="h-5 w-5 text-[#00C896]" />
                <span className="font-bold text-sm uppercase tracking-wider">Innovación Digital</span>
              </div>

              <h1 className="text-6xl font-black leading-tight mb-6 lg:text-7xl">
                <span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">
                  Tecnología
                </span>
                <br />
                <span className="text-white">auténtica</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Soluciones digitales que transforman tu negocio. Automatización inteligente para crecer sin límites.
              </p>

              <a href="#contacto">
                <Button
                  size="lg"
                  className="rounded-full px-10 py-7 text-lg font-bold shadow-2xl shadow-[#00C896]/50 hover:shadow-[#00C896]/80 transition-all"
                  style={{ background: "linear-gradient(135deg, #00C896, #00A880)", color: "#0A0A0A" }}
                >
                  Comenzar ahora <ChevronRight className="ml-2 h-6 w-6" />
                </Button>
              </a>
            </motion.div>

            {/* Right side - Light */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#0A0A0A]"
            >
              <h2 className="text-5xl font-black leading-tight mb-6">
                para crecer
                <br />
                <span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">
                  sin fricción
                </span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Deja atrás lo manual, conecta tus procesos y evoluciona con inteligencia artificial aplicada a tu operación.
              </p>

              <a
                href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-3 border-[#007BFF] px-10 py-7 text-lg font-bold text-[#007BFF] hover:bg-[#007BFF] hover:text-white transition-all shadow-lg"
                >
                  Hablar por WhatsApp <MessageCircle className="ml-2 h-6 w-6" />
                </Button>
              </a>

              {/* Stats preview */}
              <div className="mt-12 grid grid-cols-3 gap-4">
                {[
                  { value: "+60%", label: "Velocidad" },
                  { value: "24/7", label: "Atención" },
                  { value: "∞", label: "Escala" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl font-black bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-[#007BFF]/10 blur-3xl"
          animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[#00C896]/10 blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </section>

      {/* ====== Qué es Autia - White section with black cards ====== */}
      <section id="que-es" className="relative py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black tracking-tight mb-6 text-[#0A0A0A]">
              ¿Qué es <span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">Autia</span>?
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Diseñamos tecnología práctica y accesible para que las empresas crezcan sin complicaciones.
              Nuestra misión es <strong className="text-[#007BFF]">simplificar lo complejo</strong>.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { step: 'Digitaliza', desc: 'Convierte procesos manuales en digitales de forma eficiente y segura.', icon: Cpu, color: '#007BFF' },
              { step: 'Automatiza', desc: 'Ahorra tiempo conectando sistemas y optimizando flujos de trabajo.', icon: Bot, color: '#00C896' },
              { step: 'Evoluciona', desc: 'Aplica IA para tomar mejores decisiones estratégicas en tiempo real.', icon: Sparkles, color: '#007BFF' }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="group relative rounded-3xl bg-[#0A0A0A] p-10 text-white shadow-2xl hover:shadow-[#007BFF]/30 transition-all overflow-hidden"
                >
                  {/* Number */}
                  <div className="absolute -top-4 -right-4 text-9xl font-black opacity-5">
                    {i + 1}
                  </div>

                  <div className="relative">
                    <div className="mb-6 inline-flex rounded-2xl p-4" style={{ background: `${item.color}20` }}>
                      <Icon className="h-12 w-12" style={{ color: item.color }} />
                    </div>

                    <h3 className="text-3xl font-black mb-4" style={{ color: item.color }}>
                      {item.step}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: item.color }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== Servicios - Black section with white cards ====== */}
      <section id="servicios" className="relative py-24 bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black tracking-tight mb-6 text-white">
              Nuestros <span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">Servicios</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tecnología moderna para resolver problemas reales de tu negocio.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicios.map(({ icon: Icon, title, desc, image }, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl hover:shadow-[#00C896]/30 transition-all"
              >
                {/* Image with gradient background */}
                <div className="mb-6 flex justify-center">
                  <div className="relative rounded-2xl bg-gradient-to-br from-[#007BFF]/10 to-[#00C896]/10 p-6 border-2 border-transparent group-hover:border-[#00C896] transition-all">
                    <Image
                      src={image}
                      alt={title}
                      width={300}
                      height={300}
                      className="h-28 w-28 object-contain transition-transform group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-full bg-gradient-to-br from-[#007BFF] to-[#00C896] p-2">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-black text-[#0A0A0A]">{title}</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{desc}</p>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/0 to-[#00C896]/0 opacity-0 group-hover:from-[#007BFF]/5 group-hover:to-[#00C896]/5 group-hover:opacity-100 transition-opacity rounded-3xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Casos - White with alternating layout ====== */}
      <section id="casos" className="relative py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black tracking-tight mb-6 text-[#0A0A0A]">
              Casos de <span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">Éxito</span>
            </h2>
            <p className="text-xl text-gray-700">Transformaciones reales para empresas reales</p>
          </div>

          <div className="space-y-6">
            {casos.map((c, i) => {
              const Icon = c.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center gap-8 ${!isEven && "flex-row-reverse"}`}
                >
                  <div className={`flex-1 rounded-3xl p-10 ${isEven ? "bg-[#0A0A0A] text-white" : "bg-gradient-to-br from-blue-50 to-emerald-50 text-[#0A0A0A]"}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`rounded-2xl p-4 ${isEven ? "bg-[#007BFF]/20" : "bg-white"}`}>
                        <Icon className="h-8 w-8" style={{ color: isEven ? "#00C896" : "#007BFF" }} />
                      </div>
                      <h3 className="text-3xl font-black">{c.title}</h3>
                    </div>
                    <p className={`text-lg leading-relaxed ${isEven ? "text-gray-300" : "text-gray-700"}`}>{c.desc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className={`rounded-full p-8 ${isEven ? "bg-gradient-to-br from-[#007BFF] to-[#00C896]" : "bg-[#0A0A0A]"}`}>
                      <Rocket className="h-16 w-16 text-white" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== Beneficios - Black section ====== */}
      <section id="beneficios" className="relative py-24 bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black tracking-tight mb-6 text-white">
              Beneficios de <span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">Autia</span>
            </h2>
            <p className="text-xl text-gray-400">Resultados tangibles para tu negocio</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, x: 10 }}
                className="group flex items-start gap-5 rounded-2xl border-2 border-[#007BFF]/30 bg-white p-8 shadow-xl hover:shadow-2xl hover:shadow-[#00C896]/30 transition-all"
              >
                <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#007BFF] to-[#00C896] p-2">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <p className="font-bold text-[#0A0A0A] text-lg leading-relaxed">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Testimonios - White carousel ====== */}
      <section id="testimonios" className="relative py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black tracking-tight mb-6 text-[#0A0A0A]">
              <span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">Testimonios</span>
            </h2>
            <p className="text-xl text-gray-700">Lo que dicen nuestros clientes</p>
          </div>

          <div className="relative">
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -1200] }}
              transition={{ repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" }}
            >
              {[...testimonios, ...testimonios, ...testimonios].map((t, i) => (
                <div key={i} className="min-w-[500px] rounded-3xl bg-[#0A0A0A] p-10 text-white shadow-2xl">
                  <p className="text-xl italic mb-6 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#007BFF] to-[#00C896]" />
                    <div>
                      <p className="font-bold text-white">{t.author}</p>
                      <p className="text-sm text-gray-400">{t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== CTA - Split diagonal ====== */}
      <section id="cta" className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1C1C1C] to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/20 to-[#00C896]/20" style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)"
        }} />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-7xl font-black mb-8 text-white">
                El futuro comienza <span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">hoy</span>
              </h2>
              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Digitaliza. Automatiza. Evoluciona. Transforma tu negocio con tecnología auténtica.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="#contacto">
                  <Button
                    size="lg"
                    className="rounded-full px-12 py-8 text-xl font-black shadow-2xl shadow-[#00C896]/50 hover:shadow-[#00C896]/80 transition-all"
                    style={{ background: "linear-gradient(135deg, #00C896, #00A880)", color: "#0A0A0A" }}
                  >
                    Agendar Consultoría Gratuita <ArrowRight className="ml-3 h-7 w-7" />
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
                    className="rounded-full border-3 border-white px-12 py-8 text-xl font-black text-white hover:bg-white hover:text-[#0A0A0A] transition-all"
                  >
                    Hablar por WhatsApp <MessageCircle className="ml-3 h-7 w-7" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-20 h-96 w-96 rounded-full bg-[#007BFF]/20 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-[#00C896]/20 blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </section>

      {/* ====== Footer - Black & White Split ====== */}
      <footer id="contacto" className="relative">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-white" />
          <div className="w-1/2 bg-[#0A0A0A]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left - White */}
            <div className="text-[#0A0A0A]">
              <div className="flex items-center gap-4 mb-8">
                <div className="rounded-3xl bg-gradient-to-br from-[#007BFF] to-[#00C896] p-[3px]">
                  <div className="rounded-3xl bg-white p-3">
                    <Image
                      src="/images/logo.webp"
                      alt="Autia Logo"
                      width={56}
                      height={56}
                      className="h-14 w-14"
                    />
                  </div>
                </div>
                <div>
                  <span className="block text-3xl font-black bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">
                    Autia
                  </span>
                  <span className="block text-xs font-bold text-gray-600">TECNOLOGÍA AUTÉNTICA</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-8 max-w-md">
                Tecnología que se adapta a ti. Soluciones digitales para el crecimiento empresarial.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-black mb-4">Navegación</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Servicios", "Casos", "Beneficios", "Testimonios"].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="font-bold text-gray-700 hover:text-[#007BFF] transition-colors">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Black */}
            <div className="text-white">
              <h3 className="text-2xl font-black mb-8">Contacto</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 group">
                  <div className="rounded-full bg-[#007BFF]/20 p-3 group-hover:bg-[#007BFF]/40 transition-all">
                    <Mail className="h-6 w-6 text-[#00C896]" />
                  </div>
                  <a href="mailto:contacto@autia.mx" className="text-lg text-gray-300 hover:text-white transition-colors">
                    contacto@autia.mx
                  </a>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="rounded-full bg-[#00C896]/20 p-3 group-hover:bg-[#00C896]/40 transition-all">
                    <MessageCircle className="h-6 w-6 text-[#00C896]" />
                  </div>
                  <a
                    href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    WhatsApp: +52 55 2258 6238
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-300 text-center">
            <p className="text-gray-600 font-medium">
              © {new Date().getFullYear()} Autia. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
