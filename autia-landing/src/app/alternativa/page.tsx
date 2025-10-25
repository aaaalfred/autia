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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Paleta Autia
// Azul eléctrico: #007BFF
// Negro grafito: #1C1C1C
// Blanco: #FFFFFF
// Verde esmeralda: #00C896

export default function AlternativaPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/30 text-[#1C1C1C]">
      {/* ====== Fixed Header with Scroll Effect ====== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg py-3"
            : "bg-white py-5 shadow-md"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            <a href="#hero" className="flex items-center gap-3 font-bold transition-transform hover:scale-105">
              <div className="rounded-2xl bg-gradient-to-br from-[#007BFF] to-[#00C896] p-[3px] shadow-xl">
                <div className="rounded-2xl bg-white p-3">
                  <Image
                    src="/images/logo.webp"
                    alt="Autia Logo"
                    width={56}
                    height={56}
                    className="h-14 w-14"
                  />
                </div>
              </div>
              <span className="text-2xl tracking-tight bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">
                Autia
              </span>
            </a>

            <nav className="hidden gap-8 md:flex">
              <a href="#que-es" className="font-medium transition-colors hover:text-[#007BFF]">¿Qué es?</a>
              <a href="#servicios" className="font-medium transition-colors hover:text-[#007BFF]">Servicios</a>
              <a href="#casos" className="font-medium transition-colors hover:text-[#007BFF]">Casos</a>
              <a href="#beneficios" className="font-medium transition-colors hover:text-[#007BFF]">Beneficios</a>
              <a href="#contacto" className="font-medium transition-colors hover:text-[#007BFF]">Contacto</a>
            </nav>

            <a
              href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all" style={{ background: "#00C896", color: "#1C1C1C" }}>
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* ====== Hero Section ====== */}
      <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-0 left-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(closest-side, #007BFF, transparent)" }}
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(closest-side, #00C896, transparent)" }}
            animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#007BFF]/30 bg-white px-4 py-2 text-sm shadow-lg">
                  <Sparkles className="h-4 w-4 text-[#007BFF]" />
                  <span className="font-semibold">Digitaliza. Automatiza. Evoluciona.</span>
                </div>

                <h1 className="text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
                  <span className="bg-gradient-to-r from-[#007BFF] via-[#00C896] to-[#007BFF] bg-clip-text text-transparent">
                    Tecnología auténtica
                  </span>
                  <br />
                  <span className="text-[#1C1C1C]">para crecer sin fricción</span>
                </h1>

                <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-xl">
                  Soluciones digitales que llevan tu negocio al siguiente nivel. Deja atrás lo manual,
                  conecta tus procesos y evoluciona con inteligencia artificial.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a href="#contacto">
                    <Button
                      size="lg"
                      className="rounded-2xl px-8 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
                      style={{ background: "#00C896", color: "#1C1C1C" }}
                    >
                      Transformar mi negocio <ArrowRight className="ml-2 h-5 w-5" />
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
                      className="rounded-2xl border-2 border-[#007BFF] px-8 py-7 text-lg font-semibold hover:bg-[#007BFF] hover:text-white transition-all"
                    >
                      Escribir por WhatsApp <MessageCircle className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Hero Image/Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl bg-gradient-to-br from-[#007BFF]/10 to-[#00C896]/10 p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  {servicios.slice(0, 4).map(({ image, title }, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-2xl bg-white p-6 shadow-xl"
                    >
                      <Image
                        src={image}
                        alt={title}
                        width={200}
                        height={200}
                        className="h-24 w-24 mx-auto object-contain"
                      />
                      <p className="mt-4 text-center text-sm font-semibold text-[#1C1C1C]">{title}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid max-w-4xl grid-cols-3 gap-6 mx-auto">
            {[
              { k: "+60%", v: "velocidad operativa" },
              { k: "24/7", v: "atención automatizada" },
              { k: "∞", v: "escalabilidad" },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="rounded-3xl border-2 border-[#007BFF]/20 bg-white p-6 text-center shadow-lg"
              >
                <div className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-4xl font-extrabold text-transparent">
                  {s.k}
                </div>
                <div className="mt-2 text-sm font-medium text-neutral-600">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Qué es Autia ====== */}
      <section id="que-es" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight">¿Qué es Autia?</h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
              Diseñamos tecnología práctica y accesible para que las empresas crezcan sin complicaciones.
              Nuestra misión es <strong>simplificar lo complejo</strong>, creando sistemas que funcionan en el día a día.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 mt-12">
            {['Digitaliza', 'Automatiza', 'Evoluciona'].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl border-2 p-8 bg-gradient-to-br from-white to-blue-50/50 shadow-lg hover:shadow-2xl transition-all"
                style={{ borderImage: "linear-gradient(180deg, #007BFF, #00C896) 1" }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#007BFF] to-[#00C896] p-4 shadow-xl">
                  <span className="text-2xl font-bold text-white">{i + 1}</span>
                </div>
                <div className="mt-6 text-2xl font-bold text-[#007BFF] text-center">{step}</div>
                <p className="mt-4 text-center text-neutral-600">
                  {step === "Digitaliza" && "Convierte procesos manuales en digitales de forma eficiente."}
                  {step === "Automatiza" && "Ahorra tiempo conectando sistemas y optimizando flujos."}
                  {step === "Evoluciona" && "Aplica IA para tomar mejores decisiones estratégicas."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Servicios con imágenes destacadas ====== */}
      <section id="servicios" className="py-20 bg-gradient-to-br from-blue-50/50 to-emerald-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight">Nuestros Servicios</h2>
            <p className="mt-4 text-lg text-neutral-600">Tecnología moderna para resolver problemas reales.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {servicios.map(({ icon: Icon, title, desc, image }, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl border-2 border-[#007BFF]/20 bg-white p-6 shadow-xl hover:shadow-2xl transition-all"
              >
                {/* Imagen grande y visible */}
                <div className="mb-6 flex justify-center">
                  <div className="rounded-2xl bg-gradient-to-br from-[#007BFF]/10 to-[#00C896]/10 p-4">
                    <Image
                      src={image}
                      alt={title}
                      width={300}
                      height={300}
                      className="h-32 w-32 object-contain transition-transform group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Icon className="h-6 w-6 text-[#007BFF]" />
                  <h3 className="text-lg font-bold">{title}</h3>
                </div>
                <p className="text-sm text-neutral-600">{desc}</p>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#007BFF]/5 to-[#00C896]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Casos de Éxito ====== */}
      <section id="casos" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight">Casos de Éxito</h2>
            <p className="mt-4 text-lg text-neutral-600">Transformaciones reales para empresas reales</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {casos.map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="rounded-3xl border-2 border-[#00C896]/20 shadow-xl hover:shadow-2xl transition-all h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="rounded-full bg-gradient-to-br from-[#007BFF] to-[#00C896] p-3">
                        <Rocket className="h-6 w-6 text-white" />
                      </div>
                      {c.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-600 text-lg">{c.desc}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Beneficios ====== */}
      <section id="beneficios" className="py-20 bg-gradient-to-br from-emerald-50/50 to-blue-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight">Beneficios de Autia</h2>
            <p className="mt-4 text-lg text-neutral-600">Resultados tangibles para tu negocio</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 rounded-2xl border-2 border-[#00C896]/20 bg-white p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <CheckCircle2 className="mt-1 h-7 w-7 flex-none" style={{ color: "#00C896" }} />
                <p className="font-medium text-neutral-700 text-lg">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Testimonios ====== */}
      <section id="testimonios" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight">Testimonios</h2>
            <p className="mt-4 text-lg text-neutral-600">Lo que dicen nuestros clientes</p>
          </div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -800] }}
              transition={{ repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" }}
            >
              {[...testimonios, ...testimonios, ...testimonios].map((t, i) => (
                <Card key={i} className="min-w-[400px] rounded-3xl border-2 border-[#007BFF]/20 shadow-xl">
                  <CardContent className="p-8 text-neutral-700 text-lg italic">
                    "{t}"
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== CTA Final ====== */}
      <section id="cta" className="relative overflow-hidden py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#007BFF] to-[#00C896] p-12 text-white shadow-2xl">
            <div className="relative z-10 flex flex-col items-center justify-center gap-8 text-center">
              <div>
                <h2 className="text-4xl font-extrabold md:text-5xl">El futuro de tu empresa comienza hoy.</h2>
                <p className="mt-4 text-xl text-white/90">Digitaliza. Automatiza. Evoluciona.</p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#contacto">
                  <Button
                    size="lg"
                    className="rounded-2xl px-8 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
                    style={{ background: "white", color: "#1C1C1C" }}
                  >
                    Agendar consultoría gratuita <ArrowRight className="ml-2 h-6 w-6" />
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
                    className="rounded-2xl border-2 border-white px-8 py-7 text-lg font-semibold text-white hover:bg-white hover:text-[#007BFF] transition-all"
                  >
                    Hablar por WhatsApp <MessageCircle className="ml-2 h-6 w-6" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/20 blur-3xl"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
            />
          </div>
        </div>
      </section>

      {/* ====== Footer ====== */}
      <footer id="contacto" className="bg-[#1C1C1C] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-2xl bg-gradient-to-br from-[#007BFF] to-[#00C896] p-[3px] shadow-xl">
                  <div className="rounded-2xl bg-white p-2">
                    <Image
                      src="/images/logo.webp"
                      alt="Autia Logo"
                      width={40}
                      height={40}
                      className="h-10 w-10"
                    />
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">Autia</span>
              </div>
              <p className="text-white/80 text-lg">Tecnología que se adapta a ti.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#00C896]" />
                  <a href="mailto:contacto@autia.mx" className="text-white/80 hover:text-white transition-colors">
                    contacto@autia.mx
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-[#00C896]" />
                  <a
                    href="https://wa.me/5215522586238?text=Hola%2C%20estoy%20interesado%20en%20una%20consultor%C3%ADa"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    WhatsApp disponible
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Navegación</h3>
              <ul className="space-y-3">
                <li><a href="#servicios" className="text-white/80 hover:text-[#00C896] transition-colors">Servicios</a></li>
                <li><a href="#casos" className="text-white/80 hover:text-[#00C896] transition-colors">Casos de éxito</a></li>
                <li><a href="#beneficios" className="text-white/80 hover:text-[#00C896] transition-colors">Beneficios</a></li>
                <li><a href="#testimonios" className="text-white/80 hover:text-[#00C896] transition-colors">Testimonios</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/20 pt-8 text-center text-white/60">
            © {new Date().getFullYear()} Autia. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
