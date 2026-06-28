import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import heroAsset from "@/assets/hero-wedding.png";
import motorYellowAsset from "@/assets/motor-yellow.png";
import motorSkodaAsset from "@/assets/motor-skoda.jpg";
import portraitStreetAsset from "@/assets/portrait-street.png";
import portraitWomanAsset from "@/assets/portrait-woman.png";
import portraitBoy1Asset from "@/assets/portrait-boy1.jpg";
import portraitBoy2Asset from "@/assets/portrait-boy2.jpg";
import landscapeLakeAsset from "@/assets/landscape-lake.jpg";
import landscapeMezquitaAsset from "@/assets/landscape-mezquita.jpg";
import aboutJoseAsset from "@/assets/about-jose.jpg";
import portrait11 from "@/assets/portrait-11.jpg";
import portrait12 from "@/assets/portrait-12.jpg";
import portrait13 from "@/assets/portrait-13.jpg";
import portrait14 from "@/assets/portrait-14.jpg";
import motor15 from "@/assets/motor-15.jpg";
import motor16 from "@/assets/motor-16.jpg";
import motor17 from "@/assets/motor-17.jpg";
import motor18 from "@/assets/motor-18.jpg";
import motor19 from "@/assets/motor-19.jpg";
import motor20 from "@/assets/motor-20.jpg";
import landscape21 from "@/assets/landscape-21.jpg";
import landscape22 from "@/assets/landscape-22.jpg";
import event23 from "@/assets/event-23.jpg";
import event24 from "@/assets/event-24.jpg";
import event25 from "@/assets/event-25.jpg";
import event26 from "@/assets/event-26.jpg";
import event27 from "@/assets/event-27.jpg";
import event28 from "@/assets/event-28.jpg";
import event29 from "@/assets/event-29.png";
import event30 from "@/assets/event-30.jpg";
import event31 from "@/assets/event-31.jpg";
import event32 from "@/assets/event-32.jpg";
import event33 from "@/assets/event-33.jpg";
import event34 from "@/assets/event-34.jpg";
import event35 from "@/assets/event-35.jpg";
import event36 from "@/assets/event-36.jpg";

type Cat = "Eventos" | "Retratos" | "Motor" | "Paisajes";

const portfolio: { src: string; cat: Cat; alt: string; span?: string; pos?: string }[] = [
  { src: heroAsset, cat: "Eventos", alt: "Beso de boda con arroz", span: "row-span-2" },
  { src: motorYellowAsset, cat: "Motor", alt: "Seat Ibiza rally amarillo" },
  { src: portraitStreetAsset, cat: "Retratos", alt: "Retrato calle Córdoba", span: "row-span-2" },
  { src: landscapeMezquitaAsset, cat: "Paisajes", alt: "Mezquita de Córdoba", span: "row-span-2" },
  { src: portraitBoy1Asset, cat: "Retratos", alt: "Retrato comunión" },
  { src: motorSkodaAsset, cat: "Motor", alt: "Skoda Fabia rally" },
  { src: landscapeLakeAsset, cat: "Paisajes", alt: "Lago al atardecer", span: "row-span-2" },
  { src: portraitWomanAsset, cat: "Retratos", alt: "Retrato urbano" },
  { src: portraitBoy2Asset, cat: "Retratos", alt: "Retrato Mezquita patio" },
  { src: portrait11, cat: "Retratos", alt: "Retrato nocturno sobre coche rojo", span: "col-span-2" },
  { src: portrait12, cat: "Retratos", alt: "Retrato pareja junto al coche", span: "row-span-2", pos: "center 30%" },
  { src: portrait13, cat: "Retratos", alt: "Retrato hombre apoyado en coche", span: "row-span-2", pos: "center 30%" },
  { src: portrait14, cat: "Retratos", alt: "Retrato cercano frente al coche", span: "row-span-2", pos: "center 30%" },
  { src: motor15, cat: "Motor", alt: "Skoda rally AMSOIL en velocidad", span: "col-span-2" },
  { src: motor16, cat: "Motor", alt: "Hyundai rally Liqui Moly", span: "col-span-2" },
  { src: motor17, cat: "Motor", alt: "Skoda rally Stavosil" },
  { src: motor18, cat: "Motor", alt: "Skoda rally J. Solans tierra" },
  { src: motor19, cat: "Motor", alt: "Audi Quattro Sport rally" },
  { src: motor20, cat: "Motor", alt: "Seat Ibiza Cupra rally tierra" },
  { src: landscape21, cat: "Paisajes", alt: "Interior de la Mezquita de Córdoba en blanco y negro", span: "row-span-2" },
  { src: landscape22, cat: "Paisajes", alt: "Puente Romano y Mezquita-Catedral al anochecer", span: "col-span-2" },
  { src: event23, cat: "Eventos", alt: "Niño de comunión asomado a la ventana", span: "row-span-2", pos: "center 30%" },
  { src: event24, cat: "Eventos", alt: "Niño de comunión en ventana, blanco y negro", span: "row-span-2", pos: "center 30%" },
  { src: event25, cat: "Eventos", alt: "Retrato de niño de comunión junto a la ventana" },
  { src: event26, cat: "Eventos", alt: "Niña sonriendo en bautizo" },
  { src: event27, cat: "Eventos", alt: "Niña con vestido de mariposas en bautizo", span: "row-span-2" },
  { src: event28, cat: "Eventos", alt: "Niña frente a decoración de bautizo" },
  { src: event29, cat: "Eventos", alt: "Niños de comunión caminando hacia la Torre Calahorra", span: "col-span-2", pos: "center 75%" },
  { src: event30, cat: "Eventos", alt: "Niño de comunión sentado en puerta de la Mezquita" },
  { src: event31, cat: "Eventos", alt: "Niño de comunión junto a las columnas de la Mezquita", span: "row-span-2", pos: "center 60%" },
  { src: event32, cat: "Eventos", alt: "Niño de comunión con celosía mudéjar de fondo", pos: "center 40%" },
  { src: event33, cat: "Eventos", alt: "Niño de comunión apoyado en puerta de madera", span: "row-span-2", pos: "center 60%" },
  { src: event34, cat: "Eventos", alt: "Niño de comunión en la fachada de la Mezquita", span: "col-span-2", pos: "center 80%" },
  { src: event35, cat: "Eventos", alt: "Niño de comunión asomado a muro de la Mezquita", pos: "center 80%" },
  { src: event36, cat: "Eventos", alt: "Niño de comunión en las almenas del Alcázar", span: "row-span-2", pos: "center 70%" },
];

const services = [
  { title: "Eventos", img: heroAsset, desc: "Cobertura profesional de bodas, celebraciones y encuentros especiales con una mirada documental y cinematográfica." },
  { title: "Retratos", img: portraitWomanAsset, desc: "Sesiones individuales y personalizadas diseñadas para mostrar tu esencia con naturalidad y estilo." },
  { title: "Motor", img: motorYellowAsset, desc: "Fotografía para automóviles, motocicletas y eventos del mundo del motor." },
  { title: "Paisajes", img: landscapeLakeAsset, desc: "Paisajes naturales y urbanos de Córdoba y alrededores, capturando la belleza de cada rincón." },
];

const steps = [
  { n: "01", t: "Consulta inicial", d: "Conversamos sobre tu idea, necesidades y expectativas." },
  { n: "02", t: "Planificación", d: "Organizamos cada detalle para obtener el mejor resultado." },
  { n: "03", t: "Sesión fotográfica", d: "Capturamos momentos auténticos y naturales." },
  { n: "04", t: "Edición profesional", d: "Cada imagen recibe un tratamiento profesional." },
  { n: "05", t: "Entrega final", d: "Recibes tus fotografías en alta calidad listas para disfrutar." },
];

const stats = [
  { n: "100+", l: "Sesiones realizadas" },
  { n: "5000+", l: "Fotografías editadas" },
  { n: "98%", l: "Clientes satisfechos" },
  { n: "100%", l: "Cobertura en Córdoba" },
];

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/50" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#inicio" className="font-display text-lg tracking-wide">
          Jose García <span className="text-primary italic">Photography</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contacto" className="hidden lg:inline-flex items-center gap-2 text-sm border border-primary text-primary px-5 py-2.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
          Reservar <span aria-hidden>→</span>
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="Menú">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-px bg-foreground transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-px bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-px bg-foreground transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                  {l.label}
                </a>
              ))}
              <a href="#contacto" onClick={() => setOpen(false)} className="text-primary">
                Reservar →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  return (
    <section id="inicio" ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={heroAsset} alt="Jose García Photography" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </motion.div>
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-xs tracking-[0.3em] text-primary uppercase mb-6"
        >
          Córdoba · España
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[1.05] max-w-5xl"
        >
          Capturando <span className="text-primary italic">historias</span><br />
          a través de la<br />
          fotografía
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="mt-8 max-w-xl text-muted-foreground text-lg"
        >
          Retratos, motor, eventos y paisajes con una mirada auténtica y profesional.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#portfolio" className="bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition">
            Ver Portfolio
          </a>
          <a href="#contacto" className="border border-foreground/30 text-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition">
            Reservar Sesión
          </a>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs tracking-widest flex flex-col items-center gap-2 z-10"
      >
        SCROLL
        <span className="w-px h-10 bg-muted-foreground/40" />
      </motion.div>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

function About() {
  return (
    <section id="sobre-mi" className="py-28 lg:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <img src={aboutJoseAsset} alt="Jose García, fotógrafo" className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div>
            <span className="text-xs tracking-[0.3em] text-primary uppercase">Sobre mí</span>
            <h2 className="font-display text-4xl lg:text-6xl mt-6 leading-tight">
              Hola, soy <span className="italic text-primary">Jose</span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              Soy fotógrafo en Córdoba (España) y desde hace años transformo momentos únicos en recuerdos permanentes.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Mi trabajo combina técnica, creatividad y pasión para capturar emociones reales. Me especializo en retratos, fotografía de motor, cobertura de eventos y paisajes, siempre buscando que cada imagen cuente una historia.
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {["Atención personalizada", "Edición profesional", "Entrega de alta calidad", "Cobertura en Córdoba y alrededores"].map((i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {i}
                </li>
              ))}
            </ul>
            <blockquote className="mt-10 border-l-2 border-primary pl-5 italic text-muted-foreground">
              "La fotografía no es solo capturar imágenes — es preservar emociones, historias y momentos irrepetibles."
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="py-28 lg:py-40 px-6 lg:px-10 bg-card/40">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] text-primary uppercase">Servicios</span>
            <h2 className="font-display text-4xl lg:text-6xl mt-6">
              Lo que <span className="italic text-primary">ofrezco</span>
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group flex gap-6 p-5 bg-card border border-border/60 hover:border-primary/60 rounded-sm transition-all duration-500">
                <div className="w-32 h-32 sm:w-40 sm:h-40 overflow-hidden flex-shrink-0 rounded-sm">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl lg:text-3xl">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState<"Todos" | Cat>("Todos");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = filter === "Todos" ? portfolio : portfolio.filter((p) => p.cat === filter);
  return (
    <section id="portfolio" className="py-28 lg:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.3em] text-primary uppercase">Portfolio</span>
            <h2 className="font-display text-4xl lg:text-6xl mt-6">
              Trabajos <span className="italic text-primary">recientes</span>
            </h2>
          </div>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(["Todos", "Eventos", "Retratos", "Motor", "Paisajes"] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-5 py-2 text-sm rounded-full border transition-all ${filter === f ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"}`}>
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.button
                key={p.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => setLightbox(p.src)}
                className={`group relative overflow-hidden rounded-sm ${p.span ?? ""}`}
              >
                <img src={p.src} alt={p.alt} loading="lazy" style={{ objectPosition: p.pos ?? "center" }} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors flex items-end p-4">
                  <span className="text-xs tracking-widest uppercase text-primary opacity-0 group-hover:opacity-100 transition">{p.cat}</span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
          >
            <button className="absolute top-6 right-6 text-foreground text-2xl">×</button>
            <motion.img
              initial={{ scale: 0.92 }} animate={{ scale: 1 }}
              src={lightbox} alt="" className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="py-28 lg:py-40 px-6 lg:px-10 bg-card/40">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] text-primary uppercase">Proceso</span>
            <h2 className="font-display text-4xl lg:text-6xl mt-6">
              Cómo <span className="italic text-primary">trabajamos</span>
            </h2>
          </div>
        </Reveal>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className={`relative flex items-start mb-14 md:mb-20 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 mt-2 rounded-full bg-primary ring-4 ring-background" />
                <div className="pl-12 md:pl-0 md:w-1/2 md:px-12">
                  <div className="font-display text-5xl text-primary/70 mb-2">{s.n}</div>
                  <h3 className="font-display text-2xl mb-2">{s.t}</h3>
                  <p className="text-muted-foreground text-sm">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const num = parseInt(value);
    const suffix = value.replace(/[\d]/g, "");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          let start = 0;
          const dur = 1500;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - t0) / dur, 1);
            const v = Math.floor(num * (1 - Math.pow(1 - p, 3)));
            setDisplay(v + suffix);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>{display}</span>;
}

function Stats() {
  return (
    <section className="py-24 px-6 lg:px-10 border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.08}>
            <div>
              <div className="font-display text-5xl lg:text-6xl text-foreground">
                <CountUp value={s.n} />
              </div>
              <div className="mt-3 text-xs tracking-widest uppercase text-muted-foreground">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-32 lg:py-44 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0">
        <img src={landscapeMezquitaAsset} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-4xl lg:text-6xl leading-tight">
            ¿Listo para crear <span className="italic text-primary">imágenes inolvidables</span>?
          </h2>
          <p className="mt-6 text-muted-foreground">
            Reserva tu sesión y transforma tus momentos más importantes en recuerdos para toda la vida.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="#contacto" className="bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-medium">Reservar Sesión</a>
            <a href="#portfolio" className="border border-foreground/30 px-7 py-3.5 rounded-full text-sm">Ver Portfolio</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const cards = [
    { label: "WhatsApp", value: "+34 603 61 53 23", href: "https://wa.me/34603615323" },
    { label: "Email", value: "josegarciaphotography17@gmail.com", href: "mailto:josegarciaphotography17@gmail.com" },
    { label: "Instagram", value: "@_josegarciaphotography_", href: "https://www.instagram.com/_josegarciaphotography_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  ];
  return (
    <section id="contacto" className="py-28 lg:py-40 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] text-primary uppercase">Contacto</span>
            <h2 className="font-display text-4xl lg:text-6xl mt-6">
              Hablemos de tu <span className="italic text-primary">proyecto</span>
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.1}>
              <a href={c.href} target="_blank" rel="noreferrer"
                className="group block p-8 bg-card border border-border hover:border-primary/60 rounded-sm transition-all">
                <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">{c.label}</div>
                <div className="text-lg break-words group-hover:text-primary transition-colors">{c.value}</div>
                <div className="mt-6 text-xs text-muted-foreground">Contactar →</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-14 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="font-display text-lg">
          Jose García <span className="text-primary italic">Photography</span>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition">{l.label}</a>
          ))}
        </nav>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-border/60 text-xs text-muted-foreground text-center">
        © 2026 Jose García Photography. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <main className="bg-background text-foreground font-sans">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Stats />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
