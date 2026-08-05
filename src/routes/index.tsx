import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, useCallback, type FormEvent, type ReactNode } from "react";
import { Phone, MessageCircle, MapPin, Youtube, Instagram, Facebook, Star, Music, Send, Calendar, BookOpen, AlertTriangle, ExternalLink, Camera, Video, Crown, Feather, ChevronLeft, ChevronRight, X } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import heroPosterAsset from "@/assets/hero-poster.png.asset.json";
import shankarAsset from "@/assets/shankar-yadav.jpeg.asset.json";
import darbar1 from "@/assets/darbar-1.jpeg.asset.json";
import darbar2 from "@/assets/darbar-2.jpeg.asset.json";
import darbar3 from "@/assets/darbar-3.jpeg.asset.json";
import darbar4 from "@/assets/darbar-4.jpeg.asset.json";
import darbar5 from "@/assets/darbar-5.jpeg.asset.json";
import darbar6 from "@/assets/darbar-6.jpeg.asset.json";
import darbar7 from "@/assets/darbar-7.jpeg.asset.json";
import darbar8 from "@/assets/darbar-8.jpeg.asset.json";
import darbar9 from "@/assets/darbar-9.jpeg.asset.json";
import darbar10 from "@/assets/darbar-10.jpeg.asset.json";
import darbar11 from "@/assets/darbar-11.jpeg.asset.json";
import darbar12 from "@/assets/darbar-12.jpeg.asset.json";
import darbar13 from "@/assets/darbar-13.jpeg.asset.json";
import darbar14 from "@/assets/darbar-14.jpeg.asset.json";
import darbar15 from "@/assets/darbar-15.jpeg.asset.json";
import darbar16 from "@/assets/darbar-16.jpeg.asset.json";
import darbar17 from "@/assets/darbar-17.jpeg.asset.json";
import darbar18 from "@/assets/darbar-18.jpeg.asset.json";
import darbar19 from "@/assets/darbar-19.jpeg.asset.json";
import darbar20 from "@/assets/darbar-20.jpeg.asset.json";
import darbar21 from "@/assets/darbar-21.jpeg.asset.json";
import darbar22 from "@/assets/darbar-22.jpeg.asset.json";
import darbar23 from "@/assets/darbar-23.jpeg.asset.json";
import darbar24 from "@/assets/darbar-24.jpeg.asset.json";
import darbar25 from "@/assets/darbar-25.jpeg.asset.json";
import darbar26 from "@/assets/darbar-26.jpeg.asset.json";
import darbar27 from "@/assets/darbar-27.jpeg.asset.json";
import darbar28 from "@/assets/darbar-28.jpeg.asset.json";
import darbar29 from "@/assets/darbar-29.jpeg.asset.json";
import darbar30 from "@/assets/darbar-30.jpeg.asset.json";
import jhanki1 from "@/assets/jhanki-1.jpeg.asset.json";
import jhanki2 from "@/assets/jhanki-2.jpeg.asset.json";
import jhanki3 from "@/assets/jhanki-3.jpeg.asset.json";
import jhanki4 from "@/assets/jhanki-4.jpeg.asset.json";
import jhanki5 from "@/assets/jhanki-5.jpeg.asset.json";
import jhanki6 from "@/assets/jhanki-6.jpeg.asset.json";
import jhanki7 from "@/assets/jhanki-7.jpeg.asset.json";
import jhanki8 from "@/assets/jhanki-8.jpeg.asset.json";

// Jhanki photos — only these uploaded jhanki images
const JHANKI_PHOTOS = [jhanki1.url, jhanki2.url, jhanki3.url, jhanki4.url, jhanki5.url, jhanki6.url, jhanki7.url, jhanki8.url];

// Jhanki reels — Instagram reel shortcodes, played one after another
const JHANKI_REELS = [
  "Cyj-9cNPamf",
  "Cyl74iKBqtz",
  "C7DjZAgLigY",
  "C6plJXJvh95",
  "C0O0Kuhr0lh",
  "C3eJrQCPLEX",
  "Cyf4zr6PmnV",
];

// Darbar photos
const DARBAR_PHOTOS = [
  darbar1.url, darbar2.url, darbar3.url, darbar4.url, darbar5.url,
  darbar6.url, darbar7.url, darbar8.url, darbar9.url, darbar10.url,
  darbar11.url, darbar12.url, darbar13.url, darbar14.url, darbar15.url,
  darbar16.url, darbar17.url, darbar18.url, darbar19.url,
  darbar20.url, darbar21.url, darbar22.url, darbar23.url,
  darbar24.url, darbar25.url, darbar26.url, darbar27.url, darbar28.url,
  darbar29.url, darbar30.url,
];

const SITE_URL = "https://shrishyamjagranparty.lovable.app";
const OG_IMAGE = `${SITE_URL}${heroPosterAsset.url}`;
const PAGE_TITLE = "Shri Shyam Jagran Party Ghaziabad | Mata Ki Chowki & Khatu Shyam Kirtan";
const PAGE_DESC =
  "Book Shri Shyam Jagran Party Ghaziabad for Mata Ki Chowki & Jagran, Khatu Shyam Kirtan, Bhajan Sandhya and Sundar Kand Katha in Ghaziabad, Noida, Delhi NCR & all over India. Call +91 79829 56590.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { name: "keywords", content: "shyam jagran party, mata ki chowki ghaziabad, khatu shyam kirtan, bhajan sandhya delhi ncr, jagran party noida" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:site_name", content: "Shri Shyam Jagran Party" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Shri Shyam Jagran Party",
          description: PAGE_DESC,
          image: OG_IMAGE,
          url: SITE_URL,
          telephone: "+917982956590",
          address: { "@type": "PostalAddress", addressLocality: "Ghaziabad", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
          areaServed: ["Ghaziabad", "Noida", "Delhi NCR", "India"],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "8" },
        }),
      },
    ],
  }),
});

const LOGO = logoAsset.url;
const HERO_POSTER = heroPosterAsset.url;
const SHANKAR = shankarAsset.url;

const PHONE = "+917982956590";
const WHATSAPP = "917982956590";
const WHATSAPP_TEXT = encodeURIComponent(
  `*"Jai Mata Di"*\n\nI came across your website.\nI want to enquiry for organizing a devotional Programm`
);
const YOUTUBE = "https://www.youtube.com/@ShriShyamJagranPartyGzb";
const INSTAGRAM = "https://www.instagram.com/shankar98yadav/";
const FACEBOOK = "https://www.facebook.com/share/17zJ3mMxrm/";
const GOOGLE_MAPS = "https://share.google/OHhD1R2UorQv7N4tA";
const GOOGLE_REVIEWS = "https://www.google.com/search?q=shree+shyam+jagran+party+ghaziabad";

const COMPOSITIONS = ["K8BWWyKj978", "STjpkSjzYbs", "YYDIhEeAdj0"];
// 3rd bhajan starts at 01:05 (skip the intro portion)
const COMPOSITION_STARTS = [0, 0, 65];
const DARBAR_VIDEOS = ["4EdyS_wfuaE", "62sBhsIIoK0"];

const services = [
  { icon: Crown, title: "Mata ki Chowki & Jagran", desc: "Soulful jagran & chowki in honour of Mata Rani with full darbar decor and devotional singers." },
  { icon: Feather, title: "Khatu Shyam Kirtan", desc: "Night-long kirtan & bhajans dedicated to Shyam Baba, filled with faith and divine energy." },
  { icon: Music, title: "Bhajan Sandhya", desc: "Live singers, harmonium, tabla & complete sound arrangement for an evening of devotion." },
  { icon: BookOpen, title: "Sundar Kand Katha", desc: "Sacred recitation of Hanuman Chalisa & Sundar Kand with experienced pandits and vedic rituals." },
  { icon: Calendar, title: "Private & Society Events", desc: "Home functions, society jagrans, colony events & corporate spiritual gatherings." },
  { icon: Star, title: "Other Devotional Events", desc: "Kirtan, bhajan, jagran, satsang & any special devotional programme tailored to your needs." },
];

const reviews = [
  { name: "Rakesh Sharma", place: "Kavi Nagar, Ghaziabad", rating: 5, text: "Bhagwan ki kripa se hamare ghar par bahut hi sunder jagran hua. Shankar ji ki mandali ne saari raat baandh diya." },
  { name: "Meena Gupta", place: "Indirapuram", rating: 5, text: "Best Mata Ki Chowki experience. Sound, decoration and singing — everything was perfect and truly divine." },
  { name: "Amit Yadav", place: "Vaishali, Ghaziabad", rating: 5, text: "Professional team, punctual and very devoted singers. Har bhajan dil ko chhoo gaya. Jai Shree Shyam!" },
  { name: "Pooja Verma", place: "Noida", rating: 5, text: "Amazing Khatu Shyam jagran arranged in our society. Everyone appreciated the arrangements and soulful voice." },
  { name: "Sunil Aggarwal", place: "Delhi", rating: 5, text: "Sundar Kand Path at our home was so peaceful. The whole atmosphere turned divine. Thank you Shankar ji." },
  { name: "Neha Singh", place: "Gurugram", rating: 5, text: "Booked them for Bhajan Sandhya — the singers are extremely talented and humble. Truly blessed evening." },
  { name: "Ravi Chauhan", place: "Vasundhara", rating: 5, text: "Khatu Shyam jagran was memorable for our entire family. Baba ki kripa aur mandali ki mehnat dono dikhti hai." },
  { name: "Anjali Mehta", place: "Faridabad", rating: 5, text: "Complete darbar setup, punctual team and heart touching bhajans. Definitely booking again next year." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Marquee />
      <ScamWarning />
      <ShankarPhoto />
      <About />
      <Services />
      <DarbarPhotos />
      <Jhanki />
      <DarbarVideos />
      <Compositions />
      <Reviews />
      <ContactSection />
      <BookingForm />
      <FAQ />
      <Footer />
      <FloatingContact />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md md:backdrop-blur-none bg-background/80 md:bg-background border-b border-border/60">
      <div className="max-w-7xl mx-auto pl-0 pr-3 md:px-6 h-24 md:h-36 flex items-center justify-between gap-2">
        <a href="#top" className="flex items-center h-full shrink-0">
          <img src={LOGO} alt="Shri Shyam Jagran Party logo" className="h-[115%] md:h-[120%] w-auto object-contain drop-shadow-lg translate-y-2 md:translate-y-3 -ml-2 md:ml-0" />
        </a>
        <nav className="flex items-center gap-2.5 sm:gap-5 md:gap-8 text-[11px] sm:text-sm">
          {[
            { href: "#services", label: "Services", Icon: Crown },
            { href: "#gallery", label: "Gallery", Icon: Camera },
            { href: "#reviews", label: "Reviews", Icon: Star },
            { href: "#booking", label: "Book", Icon: Calendar },
          ].map(({ href, label, Icon }) => (
            <a key={href} href={href} className="flex flex-col sm:flex-row items-center gap-0.5 sm:gap-1.5 hover:text-saffron transition">
              <Icon className="w-4 h-4 text-saffron" />
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <a href={`tel:${PHONE}`} className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-royal text-cream text-sm shadow-soft hover:opacity-90 transition">
          <Phone className="w-4 h-4" /> Call Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-end pt-24 md:pt-36">
      <img src={HERO_POSTER} alt="Shri Shyam Jagran Party banner" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 55%, rgba(30,0,0,0.55) 80%, rgba(30,0,0,0.85) 100%)" }} />
      <div className="relative z-10 text-center px-6 max-w-4xl animate-float-up mt-auto pb-10">
        <p className="text-sm md:text-xl text-cream font-medium tracking-wide drop-shadow-lg">GHAZIABAD, NOIDA, DELHI, NCR's Trusted Jagran Party &amp; All Over INDIA</p>

        <p className="mt-3 text-cream/95 text-sm md:text-lg max-w-2xl mx-auto drop-shadow-lg">
          Devotional Khatu Shyam Jagran, Mata Ki Chowki & Jagran & Bhajan Sandhya — soulful voices, sacred nights, unforgettable Moments.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_TEXT}`} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-maroon-deep font-medium shadow-divine hover:scale-105 transition text-sm md:text-base">
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" /> WhatsApp Now
          </a>
          <a href="#booking" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cream/50 bg-maroon-deep/40 backdrop-blur text-cream hover:bg-cream/10 transition text-sm md:text-base">
            Book Your Jagran <Send className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="bg-gradient-royal text-cream py-3 overflow-hidden">
      <div className="flex whitespace-nowrap gap-16 text-sm md:text-base font-devnagri" style={{ animation: "marquee 30s linear infinite" }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="flex items-center gap-16 shrink-0">
            <span>॥ जय माता दी ॥</span>
            <span>॥ जय श्री श्याम ॥</span>
            <span>॥ जय श्री राम ॥</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

function ScamWarning() {
  return (
    <div className="bg-destructive/10 border-y-2 border-destructive/40 py-3 px-4">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-3 text-center">
        <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-destructive shrink-0 animate-flicker" />
        <p className="text-xs md:text-base font-semibold text-destructive">
          ⚠️ Beware of Scams! Fake groups may copy our name & branding. Always verify by calling directly on{" "}
          <a href={`tel:${PHONE}`} className="underline">+91 79829 56590</a>. This is our ONLY official website.
        </p>
        <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-destructive shrink-0 animate-flicker" />
      </div>
    </div>
  );
}

function ShankarPhoto() {
  return (
    <section className="py-12 md:py-16 px-6 bg-gradient-to-b from-secondary/40 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-3">Sanchalak</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6"><span className="font-devnagri">श्री शंकर यादव जी</span></h2>
        <div className="relative mx-auto w-72 h-72 md:w-[26rem] md:h-[26rem] grid place-items-center">
          {/* soft outer glow */}
          <div className="absolute inset-8 rounded-full bg-gradient-gold blur-2xl opacity-50 animate-flicker" />
          {/* rotating dashed gold ring */}
          <div
            className="absolute inset-1 rounded-full border-[3px] border-dashed border-gold/70"
            style={{ animation: "spin-slow 30s linear infinite" }}
          />
          {/* counter-rotating thin saffron ring */}
          <div
            className="absolute inset-5 rounded-full border-2 border-dotted border-saffron/60"
            style={{ animation: "spin-slow 20s linear infinite reverse" }}
          />
          <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold shadow-divine bg-gradient-royal ring-4 ring-saffron/30 ring-offset-4 ring-offset-background">
            <img src={SHANKAR} alt="Shri Shankar Yadav ji" className="w-full h-full object-cover object-top" />
          </div>
          <style>{`@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </div>



        <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-devnagri">
          "श्रद्धा, विश्वास और लगन से भरपूर — बाबा श्याम और माता रानी की सेवा में समर्पित"
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-16 md:py-20 px-6 max-w-6xl mx-auto text-center">
      <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-4">About Us</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-6">A Devotional Legacy in Every Bhajan</h2>
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-5xl mx-auto">
        Based in Ghaziabad and led by <strong className="text-foreground">Shri Shankar Yadav ji</strong>, Shri Shyam Jagran Party has been
        organising soul-stirring jagrans & Kirtans for years across Delhi NCR — Ghaziabad, Noida, Delhi, Gurugram and beyond.
        From intimate home chowkis to grand society jagrans, our mandali brings professional singers,
        harmonium, tabla, sound system and complete darbar decoration to create an atmosphere of pure devotion.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mt-10">
        {[
          { n: "500+", l: "Jagrans Organised" },
          { n: "300+", l: "Shyam Kirtan & Other Devotional Events" },
          { n: "13+", l: "Years of experience" },
          { n: "1000+", l: "Happy family" },
          { n: "4.9★", l: "Google rating" },
        ].map((s) => (
          <div key={s.l} className="p-5 md:p-6 rounded-2xl bg-card shadow-soft border border-border">
            <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">{s.n}</div>
            <div className="text-xs md:text-sm text-muted-foreground mt-2">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-16 md:py-20 px-4 md:px-6 bg-secondary/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-3">Our Seva</p>
          <h2 className="text-3xl md:text-5xl font-bold">Divine Services We Offer</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative p-4 md:p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-divine transition-all hover:-translate-y-1">
              <div className="w-9 h-9 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-gold grid place-items-center mb-3 md:mb-5 shadow-soft">
                <Icon className="w-4 h-4 md:w-7 md:h-7 text-maroon-deep" />
              </div>
              <h3 className="text-sm md:text-xl font-semibold mb-1 md:mb-2 leading-snug">{title}</h3>
              <p className="text-[11px] md:text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ Slider helpers ============

function useAutoRotate(count: number, ms: number) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (count <= 1) return;
    const t = setInterval(() => setI((p) => (p + 1) % count), ms);
    return () => clearInterval(t);
  }, [count, ms]);
  return { i, setI, next: () => setI((p) => (p + 1) % count), prev: () => setI((p) => (p - 1 + count) % count) };
}

function SliderNav({ onPrev, onNext, dots, active, onDot }: { onPrev: () => void; onNext: () => void; dots: number; active: number; onDot: (n: number) => void }) {
  return (
    <div className="flex items-center justify-center gap-4 mt-5">
      <button onClick={onPrev} aria-label="Previous" className="w-10 h-10 rounded-full bg-card border border-border grid place-items-center hover:bg-saffron/10 transition shadow-soft">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <div className="flex gap-2">
        {Array.from({ length: dots }).map((_, n) => (
          <button key={n} onClick={() => onDot(n)} aria-label={`Slide ${n + 1}`}
            className={`h-2 rounded-full transition-all ${n === active ? "bg-saffron w-8" : "bg-border w-2"}`} />
        ))}
      </div>
      <button onClick={onNext} aria-label="Next" className="w-10 h-10 rounded-full bg-card border border-border grid place-items-center hover:bg-saffron/10 transition shadow-soft">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

// ============ Lightbox ============

function Lightbox({ photos, index, onClose, onPrev, onNext }: { photos: string[]; index: number; onClose: () => void; onPrev: () => void; onNext: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={onClose}>
      <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 w-11 h-11 rounded-full bg-cream/15 text-cream grid place-items-center hover:bg-cream/25 transition">
        <X className="w-6 h-6" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous photo"
        className="absolute left-2 md:left-6 w-11 h-11 md:w-14 md:h-14 rounded-full bg-cream/15 text-cream grid place-items-center hover:bg-cream/25 transition"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <img
        src={photos[index]}
        alt={`Darbar photo ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-[88vw] object-contain rounded-xl shadow-divine"
      />
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next photo"
        className="absolute right-2 md:right-6 w-11 h-11 md:w-14 md:h-14 rounded-full bg-cream/15 text-cream grid place-items-center hover:bg-cream/25 transition"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <p className="absolute bottom-5 text-cream/80 text-xs md:text-sm">{index + 1} / {photos.length}</p>
    </div>
  );
}

// ============ Darbar Photos ============

function DarbarPhotos() {
  const pairs: string[][] = [];
  for (let i = 0; i < DARBAR_PHOTOS.length; i += 2) pairs.push(DARBAR_PHOTOS.slice(i, i + 2));
  const { i, setI, next, prev } = useAutoRotate(pairs.length, 3000);
  const current = pairs[i];
  const [box, setBox] = useState<number | null>(null);

  return (
    <section id="gallery" className="pt-6 pb-6 md:pt-14 md:pb-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-3 md:mb-8">
          <p className="uppercase tracking-[0.3em] text-saffron text-[10px] md:text-xs mb-1 md:mb-2">Gallery</p>
          <h2 className="text-xl md:text-5xl font-bold">Moments from Our Darbar</h2>
          <p className="mt-1 md:mt-2 text-muted-foreground text-[11px] md:text-sm">
            More on our <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="text-saffron underline">Instagram</a> & <a href={GOOGLE_MAPS} target="_blank" rel="noreferrer" className="text-saffron underline">Google page</a>.
          </p>
        </div>

        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
          <Camera className="w-4 h-4 md:w-6 md:h-6 text-saffron" />
          <h3 className="text-base md:text-2xl font-display font-semibold">Darbar Photos</h3>
        </div>
        <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 animate-float-up">
          {current.map((src, idx) => (
            <button
              key={src}
              onClick={() => setBox(i * 2 + idx)}
              className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-soft h-[27vh] md:h-auto md:aspect-[4/3] cursor-zoom-in"
            >
              <img src={src} alt={`Darbar photo ${i * 2 + idx + 1}`} loading="lazy" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        <SliderNav onPrev={prev} onNext={next} dots={pairs.length} active={i} onDot={setI} />

      </div>
      {box !== null && (
        <Lightbox
          photos={DARBAR_PHOTOS}
          index={box}
          onClose={() => setBox(null)}
          onPrev={() => setBox((b) => ((b ?? 0) - 1 + DARBAR_PHOTOS.length) % DARBAR_PHOTOS.length)}
          onNext={() => setBox((b) => ((b ?? 0) + 1) % DARBAR_PHOTOS.length)}
        />
      )}
    </section>
  );
}

// ============ Divine Jhanki — box 1: photos, box 2: reels ============

function Jhanki() {
  const photo = useAutoRotate(JHANKI_PHOTOS.length, 3000);
  const reel = useAutoRotate(JHANKI_REELS.length, 45000);

  return (
    <section className="py-14 md:py-16 px-4 md:px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-2 flex items-center justify-center gap-2">
            <Crown className="w-4 h-4" /> Divine Jhanki
          </p>
          <h2 className="text-2xl md:text-5xl font-bold">Jhanki</h2>
          <p className="mt-2 text-muted-foreground text-xs md:text-sm max-w-2xl mx-auto">
            Glimpses of our beautifully decorated jhankis of Mata Rani, Shyam Baba & other devotional setups.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-10 max-w-3xl mx-auto">
          {/* Box 1 — Jhanki photos */}
          <div>
            <div key={photo.i} className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-divine border border-gold/30 h-[38vh] md:h-[60vh] animate-float-up bg-maroon-deep">
              <img src={JHANKI_PHOTOS[photo.i]} alt={`Jhanki photo ${photo.i + 1}`} loading="lazy" className="w-full h-full object-contain" />
            </div>
            <SliderNav onPrev={photo.prev} onNext={photo.next} dots={JHANKI_PHOTOS.length} active={photo.i} onDot={photo.setI} />
          </div>

          {/* Box 2 — Jhanki reels */}
          <div>
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-divine border border-gold/30 bg-maroon-deep mx-auto w-full max-w-sm" style={{ aspectRatio: "9 / 16" }}>
              <iframe
                key={JHANKI_REELS[reel.i]}
                src={`https://www.instagram.com/reel/${JHANKI_REELS[reel.i]}/embed/`}
                title={`Jhanki reel ${reel.i + 1}`}
                loading="lazy"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                scrolling="no"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            <SliderNav onPrev={reel.prev} onNext={reel.next} dots={JHANKI_REELS.length} active={reel.i} onDot={reel.setI} />
            <div className="mt-4 flex justify-center gap-3">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="More jhanki on Instagram"
                className="w-10 h-10 rounded-full bg-gradient-royal text-cream grid place-items-center shadow-soft hover:scale-110 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={YOUTUBE} target="_blank" rel="noreferrer" aria-label="More jhanki on YouTube"
                className="w-10 h-10 rounded-full bg-card border border-border grid place-items-center shadow-soft hover:bg-saffron/10 transition">
                <Youtube className="w-5 h-5 text-saffron" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ Auto-play YouTube (plays when visible, pauses when not) ============

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

function loadYTApi(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return;
    if (window.YT && window.YT.Player) return resolve();
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const s = document.createElement("script");
      s.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(s);
    }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { prev?.(); resolve(); };
    const check = setInterval(() => {
      if (window.YT && window.YT.Player) { clearInterval(check); resolve(); }
    }, 200);
  });
}

function AutoPlayVideo({ videoId }: { videoId: string }) {
  const holderRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let observer: IntersectionObserver | null = null;
    loadYTApi().then(() => {
      if (cancelled || !holderRef.current) return;
      playerRef.current = new window.YT.Player(holderRef.current, {
        videoId,
        playerVars: { autoplay: 0, rel: 0, modestbranding: 1, playsinline: 1, cc_load_policy: 0, iv_load_policy: 3 },
        events: {
          onReady: () => {
            try { playerRef.current?.setVolume?.(60); } catch {}
            if (!wrapperRef.current) return;
            observer = new IntersectionObserver((entries) => {
              for (const e of entries) {
                if (!playerRef.current) return;
                try {
                  if (e.isIntersecting && e.intersectionRatio > 0.4) {
                    playerRef.current.unMute?.();
                    
                    playerRef.current.playVideo?.();
                  } else {
                    playerRef.current.pauseVideo?.();
                  }
                } catch {}
              }
            }, { threshold: [0, 0.4, 0.75] });
            observer.observe(wrapperRef.current);
          },
        },
      });
    });
    return () => {
      cancelled = true;
      observer?.disconnect();
      try { playerRef.current?.destroy?.(); } catch {}
    };
  }, [videoId]);

  return (
    <div ref={wrapperRef} className="rounded-xl md:rounded-2xl overflow-hidden shadow-soft aspect-[9/16] bg-maroon-deep border border-border">
      <div ref={holderRef} className="w-full h-full" />
    </div>
  );
}

// ============ Darbar & Singers Videos (bottom) ============

function DarbarVideos() {
  const { i, setI, next, prev } = useAutoRotate(DARBAR_VIDEOS.length, 20000);
  return (
    <section className="py-14 md:py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <Video className="w-5 h-5 md:w-6 md:h-6 text-saffron" />
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-center">Darbar &amp; Singers Videos</h3>
        </div>
        <div className="max-w-sm mx-auto" key={DARBAR_VIDEOS[i]}>
          <AutoPlayVideo videoId={DARBAR_VIDEOS[i]} />
        </div>
        <SliderNav onPrev={prev} onNext={next} dots={DARBAR_VIDEOS.length} active={i} onDot={setI} />
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-royal text-cream text-sm font-medium shadow-soft hover:scale-105 transition">
            <Instagram className="w-4 h-4" /> Watch more on Instagram <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a href={YOUTUBE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium shadow-soft hover:bg-saffron/10 transition">
            <Youtube className="w-4 h-4 text-saffron" /> Watch more on YouTube <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ Compositions ============

function Compositions() {
  const holderRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const indexRef = useRef(0);
  const savedTimes = useRef<number[]>([...COMPOSITION_STARTS]);
  const [displayIndex, setDisplayIndex] = useState(0);

  const jumpTo = useCallback((next: number) => {
    if (!playerRef.current) return;
    try {
      const t = playerRef.current.getCurrentTime?.() ?? 0;
      savedTimes.current[indexRef.current] = t;
    } catch {}
    indexRef.current = next;
    setDisplayIndex(next);
    const startAt = Math.max(COMPOSITION_STARTS[next] ?? 0, Math.floor(savedTimes.current[next] || 0));
    try {
      playerRef.current.loadVideoById({ videoId: COMPOSITIONS[next], startSeconds: startAt });
    } catch {}
  }, []);

  useEffect(() => {
    let cancelled = false;
    let switchTimer: ReturnType<typeof setInterval> | null = null;
    let observer: IntersectionObserver | null = null;

    loadYTApi().then(() => {
      if (cancelled || !holderRef.current) return;
      playerRef.current = new window.YT.Player(holderRef.current, {
        videoId: COMPOSITIONS[0],
        playerVars: { autoplay: 0, rel: 0, modestbranding: 1, playsinline: 1, cc_load_policy: 0, iv_load_policy: 3 },
        events: {
          onReady: () => {
            try { playerRef.current?.setVolume?.(60); } catch {}
            switchTimer = setInterval(() => jumpTo((indexRef.current + 1) % COMPOSITIONS.length), 60000);
            if (wrapperRef.current) {
              observer = new IntersectionObserver((entries) => {
                for (const e of entries) {
                  if (!playerRef.current) return;
                  try {
                    if (e.isIntersecting && e.intersectionRatio > 0.4) {
                      playerRef.current.unMute?.();
                      playerRef.current.playVideo?.();
                    } else {
                      playerRef.current.pauseVideo?.();
                    }
                  } catch {}
                }
              }, { threshold: [0, 0.4, 0.75] });
              observer.observe(wrapperRef.current);
            }
          },
          onStateChange: () => {
            // never play the 3rd bhajan before 01:05
            try {
              const min = COMPOSITION_STARTS[indexRef.current] ?? 0;
              const t = playerRef.current?.getCurrentTime?.() ?? 0;
              if (min > 0 && t < min - 1) playerRef.current?.seekTo?.(min, true);
            } catch {}
          },
        },
      });
    });

    return () => {
      cancelled = true;
      if (switchTimer) clearInterval(switchTimer);
      observer?.disconnect();
      try { playerRef.current?.destroy?.(); } catch {}
    };
  }, [jumpTo]);

  return (
    <section id="compositions" className="py-16 md:py-20 px-6" style={{ background: "linear-gradient(180deg, var(--cream) 0%, #fff 100%)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-2xl md:text-5xl font-bold text-gradient-royal mb-3">My Own Composed Songs</h2>
        <p className="text-maroon-deep/70 mb-6 text-sm md:text-base">Original bhajans composed and sung by Shri Shankar Yadav ji.</p>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {COMPOSITIONS.map((_, n) => (
            <button
              key={n}
              onClick={() => jumpTo(n)}
              className={`px-5 py-2 rounded-full font-medium text-sm md:text-base transition shadow-soft ${
                displayIndex === n
                  ? "bg-gradient-royal text-cream shadow-divine scale-105"
                  : "bg-cream border border-gold/40 text-maroon-deep hover:bg-gold/10"
              }`}
            >
              Bhajan {n + 1}
            </button>
          ))}
        </div>
        <div ref={wrapperRef} className="relative rounded-3xl overflow-hidden shadow-divine border-4 border-gold/40 aspect-video bg-black">
          <div ref={holderRef} className="absolute inset-0 w-full h-full" />
        </div>
      </div>
    </section>
  );
}

// ============ Reviews (compact) ============

function Reviews() {
  const perPage = 2;
  const pages = Math.ceil(reviews.length / perPage);
  const { i, setI, next, prev } = useAutoRotate(pages, 5000);
  const visible = reviews.slice(i * perPage, i * perPage + perPage);

  return (
    <section id="reviews" className="py-12 md:py-14 px-4 md:px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-2">Blessings from Devotees</p>
          <h2 className="text-2xl md:text-4xl font-bold">What Our Devotees Say</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 transition-opacity duration-500" key={i}>
          {visible.map((r) => (
            <div key={r.name} className="p-5 md:p-6 rounded-2xl bg-card border border-border shadow-soft animate-float-up">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, n) => (
                  <Star key={n} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground italic leading-relaxed text-sm md:text-base">"{r.text}"</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-semibold text-sm">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.place}</p>
              </div>
            </div>
          ))}
        </div>
        <SliderNav onPrev={prev} onNext={next} dots={pages} active={i} onDot={setI} />
        <div className="text-center mt-6">
          <a href={GOOGLE_REVIEWS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-royal text-cream font-medium shadow-soft hover:scale-105 transition text-sm">
            <Star className="w-4 h-4 fill-gold text-gold" /> View More Reviews on Google <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ Contact (compact) ============

function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-14 px-4 md:px-6 bg-secondary/60">
      <div className="max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-2">Get in Touch</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-2">Bulaye Mata Rani & Baba Shyam Ko Aapne Ghar</h2>
        <p className="text-muted-foreground mb-6 text-sm">We respond quickly — call or WhatsApp us anytime.</p>
        <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-3xl mx-auto">
          <a href={`tel:${PHONE}`} className="group p-5 md:p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-divine transition hover:-translate-y-1">
            <Phone className="w-8 h-8 md:w-10 md:h-10 mx-auto text-saffron mb-2 group-hover:scale-110 transition" />
            <h3 className="text-base md:text-lg font-semibold mb-1">Call Directly</h3>
            <p className="text-base md:text-xl font-display text-gradient-gold">+91 79829 56590</p>
            <p className="text-[11px] text-muted-foreground mt-1">Available 24×7</p>
          </a>
          <a href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_TEXT}`} target="_blank" rel="noreferrer"
             className="group p-5 md:p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-divine transition hover:-translate-y-1">
            <MessageCircle className="w-8 h-8 md:w-10 md:h-10 mx-auto text-saffron mb-2 group-hover:scale-110 transition" />
            <h3 className="text-base md:text-lg font-semibold mb-1">WhatsApp Chat</h3>
            <p className="text-base md:text-xl font-display text-gradient-gold">Message Us</p>
            <p className="text-[11px] text-muted-foreground mt-1">Quick reply guaranteed</p>
          </a>
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const msg = `Jai Shree Shyam!%0A%0AName: ${encodeURIComponent(String(fd.get("name") ?? ""))}%0APhone: ${encodeURIComponent(String(fd.get("phone") ?? ""))}%0AEvent: ${encodeURIComponent(String(fd.get("event") ?? ""))}%0ADate: ${encodeURIComponent(String(fd.get("date") ?? ""))}%0ACity: ${encodeURIComponent(String(fd.get("city") ?? ""))}%0ARequirements: ${encodeURIComponent(String(fd.get("message") ?? ""))}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="booking" className="py-6 md:py-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-3 md:mb-10">
          <p className="uppercase tracking-[0.3em] text-saffron text-[10px] md:text-xs mb-1 md:mb-3">Book Now</p>
          <h2 className="text-xl md:text-5xl font-bold">Share Your Requirements</h2>
          <p className="text-muted-foreground mt-1 md:mt-2 text-[11px] md:text-sm">Fill the form — we'll get back with a divine plan for your event.</p>
        </div>
        <form onSubmit={onSubmit} className="p-3.5 md:p-10 rounded-2xl md:rounded-3xl bg-card border border-border shadow-divine space-y-2.5 md:space-y-5">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2.5 md:gap-5">
            <Field label="Your Name" name="name" required />
            <Field label="Phone Number" name="phone" type="tel" required pattern="[0-9]{10}" minLength={10} maxLength={10} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2.5 md:gap-5">
            <div>
              <label className="text-[11px] md:text-sm font-medium mb-1 md:mb-2 block">Event Type</label>
              <select name="event" required defaultValue="Khatu Shyam Jagran" className="w-full px-2.5 md:px-4 py-2 md:py-3 rounded-lg bg-background border border-input focus:border-ring outline-none text-xs md:text-base">
                <option>Khatu Shyam Jagran</option>
                <option>Mata Ki Chowki</option>
                <option>Bhajan Sandhya</option>
                <option>Kirtan</option>
                <option>Other</option>
              </select>
            </div>
            <Field label="Preferred Date" name="date" type="date" required />
          </div>
          <Field label="City / Location" name="city" required />
          <div>
            <label className="text-[11px] md:text-sm font-medium mb-1 md:mb-2 block">Requirements / Message</label>
            <textarea name="message" rows={2} maxLength={1000} className="w-full px-2.5 md:px-4 py-2 md:py-3 rounded-lg bg-background border border-input focus:border-ring outline-none resize-none text-xs md:text-base md:min-h-28" placeholder="Tell us about your event, guests, special requirements..." />
          </div>
          <button type="submit" className="w-full py-2.5 md:py-4 rounded-full bg-gradient-royal text-cream font-medium shadow-divine hover:opacity-95 transition inline-flex items-center justify-center gap-2 text-sm md:text-base">
            <Send className="w-4 h-4" /> Send Enquiry via WhatsApp
          </button>
          {sent && <p className="text-center text-xs md:text-sm text-saffron">Opening WhatsApp… Jai Shree Shyam! 🙏</p>}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, pattern, minLength, maxLength }: { label: string; name: string; type?: string; required?: boolean; pattern?: string; minLength?: number; maxLength?: number }) {
  return (
    <div>
      <label className="text-[11px] md:text-sm font-medium mb-1 md:mb-2 block">{label}{required && <span className="text-saffron ml-1">*</span>}</label>
      <input name={name} type={type} required={required} pattern={pattern} minLength={minLength} maxLength={maxLength}
        className="w-full px-2.5 md:px-4 py-2 md:py-3 rounded-lg bg-background border border-input focus:border-ring outline-none text-xs md:text-base" />
    </div>
  );
}

// ============ FAQs ============

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "Which services do you provide?",
    a: "We provide Mata Ki Chowki, Mata Jagran, Khatu Shyam Sankirtan, Bhajan Sandhya, Sundarkand Path, Krishna Bhajan Sandhya, Balaji Jagran and other devotional events across Ghaziabad, Noida, Delhi NCR, nearby cities and all over India.",
  },
  {
    q: "How can I book Shri Shyam Jagran Party?",
    a: (
      <>
        You can book us by:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            Calling us on{" "}
            <a href={`tel:${PHONE}`} className="text-saffron font-medium underline">+91 79829 56590</a> or tapping the call icon on this page
          </li>
          <li>
            Sending a{" "}
            <a href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_TEXT}`} target="_blank" rel="noreferrer" className="text-saffron font-medium underline">WhatsApp message</a>{" "}
            by clicking the WhatsApp icon
          </li>
          <li>
            Filling out the <a href="#booking" className="text-saffron font-medium underline">booking form</a> on our website
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "How much does a Jagran or Mata Ki Chowki cost?",
    a: "The cost depends on the event type, location, duration, number of singers, musicians and stage setup. Contact us for a free customized quotation.",
  },
  {
    q: "Do you provide sound system and stage decoration?",
    a: "Yes. We provide professional sound systems, stage decoration, lighting, LED screens (if required) and complete event management.",
  },
  {
    q: "How early should I book?",
    a: "We recommend booking 1–180 days in advance, especially during Navratri, Saawan and other festive seasons, to secure your preferred date.",
  },
  {
    q: "Can you perform outside Ghaziabad?",
    a: "Yes. We perform across Delhi NCR and can also travel to other cities and states based on availability.",
  },
  {
    q: "What types of devotional programs do you perform?",
    a: (
      <ul className="list-disc pl-5 space-y-1">
        {["Mata Jagran", "Mata Ki Chowki", "Khatu Shyam Sankirtan", "Bhajan Sandhya", "Sundarkand Path", "Krishna Bhajan Sandhya", "Balaji Jagran", "Special Festival Programs"].map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    ),
  },
  {
    q: "How long does a Jagran program last?",
    a: "The duration depends on your requirements. Most Jagran programs last 4–8 hours, while all-night Jagran programs can continue until morning.",
  },
  {
    q: "Why choose Shri Shyam Jagran Party?",
    a: (
      <ul className="list-disc pl-5 space-y-1">
        {["Experienced devotional singers", "Professional musicians", "High-quality sound system", "Beautiful stage decoration", "Punctual and reliable service", "Serving families across Ghaziabad, Noida & Delhi NCR", "Dedicated to creating a truly devotional atmosphere"].map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    ),
  },
  {
    q: "Can we customize the bhajan list?",
    a: "Yes. We can include your preferred bhajans and devotional requests to make the event more personal and memorable.",
  },
  {
    q: "Do you provide services for small home events?",
    a: "Absolutely. We organize both small home Mata Ki Chowki and large-scale Jagran events with the same devotion and professionalism.",
  },
  {
    q: "Is Shri Shyam Jagran Party available 24×7 for booking?",
    a: "Yes. Our team is available 24×7 to answer your questions and help you book your Jagran, Chowki or Bhajan Sandhya.",
  },
  {
    q: "Why do thousands of families choose Shri Shyam Jagran Party?",
    a: (
      <ul className="list-disc pl-5 space-y-1">
        {["Pure devotional atmosphere", "Experienced singers", "Crystal-clear sound", "Beautiful stage decoration", "Timely service", "Complete event management"].map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    ),
  },
  {
    q: "Which areas do you serve?",
    a: "Our Jagran Party serves Ghaziabad, Noida, Greater Noida, Delhi, Indirapuram, Vaishali, Crossings Republik and the entire Delhi NCR. We also travel to nearby cities on request.",
  },
];

function FAQ() {
  return (
    <section id="faqs" className="py-12 md:py-20 px-4 md:px-6 bg-secondary/40">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <p className="uppercase tracking-[0.3em] text-saffron text-[10px] md:text-xs mb-1 md:mb-3">Good to Know</p>
          <h2 className="text-xl md:text-4xl font-bold">Frequently Asked Questions (FAQs)</h2>
        </div>
        <div className="space-y-2.5 md:space-y-3">
          {FAQS.map((f, n) => (
            <details key={f.q} className="group rounded-2xl bg-card border border-border shadow-soft overflow-hidden">
              <summary className="cursor-pointer list-none px-4 md:px-6 py-3.5 md:py-4 flex items-start gap-3 font-medium text-sm md:text-base">
                <span className="text-saffron font-display">{n + 1}.</span>
                <span className="flex-1">{f.q}</span>
                <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-saffron transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-5 pt-0 text-xs md:text-sm text-muted-foreground leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="text-cream py-14 px-6" style={{ background: "var(--maroon-deep)" }}>
      <div className="max-w-6xl mx-auto flex justify-center mb-10">
        <img src={LOGO} alt="Shri Shyam Jagran Party logo" className="w-56 md:w-72 drop-shadow-2xl" />
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-xl font-semibold mb-3 text-gradient-gold">Shri Shyam Jagran Party</h3>
          <p className="text-sm text-cream/70 leading-relaxed">
            Ghaziabad-based devotional group spreading faith through soulful Jagrans, Shyam Kirtan, Kirtan, Bhajan Sandhya, Sundar Kand Katha & Other Devotional Events across Delhi NCR and All Over India.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Contact</h4>
          <p className="text-sm text-cream/70 flex items-center gap-2 mb-2"><Phone className="w-4 h-4" /> +91 79829 56590</p>
          <p className="text-sm text-cream/70 flex items-center gap-2"><MapPin className="w-4 h-4" /> Ghaziabad, Uttar Pradesh</p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Follow</h4>
          <div className="flex flex-nowrap gap-3">
            <a href={YOUTUBE} target="_blank" rel="noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full border border-cream/30 grid place-items-center hover:bg-cream/10 transition"><Youtube className="w-5 h-5" /></a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-cream/30 grid place-items-center hover:bg-cream/10 transition"><Facebook className="w-5 h-5" /></a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-cream/30 grid place-items-center hover:bg-cream/10 transition"><Instagram className="w-5 h-5" /></a>
            <a href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_TEXT}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-cream/30 grid place-items-center hover:bg-cream/10 transition"><MessageCircle className="w-5 h-5" /></a>
            <a href={GOOGLE_MAPS} target="_blank" rel="noreferrer" aria-label="Google Maps Location" className="w-10 h-10 rounded-full border border-cream/30 grid place-items-center hover:bg-cream/10 transition"><MapPin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-cream/10 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Shri Shyam Jagran Party. All Rights Reserved. · जय श्री श्याम
      </div>
    </footer>
  );
}

function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col gap-3">
      <a href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_TEXT}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
        className="group flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full bg-[#25D366] text-white shadow-divine hover:scale-105 transition animate-flicker">
        <span className="w-8 h-8 rounded-full bg-white/20 grid place-items-center">
          {/* WhatsApp glyph */}
          <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white" aria-hidden="true">
            <path d="M19.11 17.28c-.28-.14-1.66-.82-1.92-.91-.26-.09-.44-.14-.63.14-.19.28-.72.91-.88 1.1-.16.19-.32.21-.6.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.54-.46-.47-.63-.48l-.54-.01c-.19 0-.49.07-.75.35-.26.28-1 1-1 2.43s1.02 2.82 1.17 3.02c.14.19 2.02 3.09 4.9 4.33.68.29 1.22.47 1.63.6.68.22 1.31.19 1.8.12.55-.08 1.66-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33zM16 3C9.38 3 4 8.38 4 15c0 2.36.68 4.55 1.85 6.4L4 29l7.79-1.81A11.94 11.94 0 0 0 16 27c6.62 0 12-5.38 12-12S22.62 3 16 3zm0 21.8c-1.9 0-3.66-.55-5.14-1.49l-.37-.22-4.62 1.07 1.09-4.5-.24-.38A9.75 9.75 0 0 1 6.2 15c0-5.41 4.39-9.8 9.8-9.8s9.8 4.39 9.8 9.8-4.39 9.8-9.8 9.8z" />
          </svg>
        </span>
        <span className="text-sm font-semibold">WhatsApp</span>
      </a>
      <a href={`tel:${PHONE}`} aria-label="Call Me"
        className="group flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full bg-gradient-gold text-maroon-deep font-semibold shadow-divine ring-2 ring-gold/50 hover:scale-105 transition">
        <span className="w-8 h-8 rounded-full bg-white/15 grid place-items-center">
          <Phone className="w-4 h-4" />
        </span>
        <span className="text-sm font-semibold">Call Me</span>
      </a>
    </div>
  );
}
