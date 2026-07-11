import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, type FormEvent } from "react";
import { Phone, MessageCircle, MapPin, Youtube, Instagram, Facebook, Star, Music, Send, Calendar, BookOpen, AlertTriangle, ExternalLink, Mic2, Camera, Video, Crown, Feather } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import logoAsset from "@/assets/logo.png.asset.json";
import heroPosterAsset from "@/assets/hero-poster.png.asset.json";
import shankarAsset from "@/assets/shankar-yadav.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
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
const GOOGLE_MAPS = "https://www.google.com/search?q=shree+shyam+jagaran+party";
const GOOGLE_REVIEWS = "https://www.google.com/search?q=shree+shyam+jagaran+party+ghaziabad";

// Own composed songs
const COMPOSITIONS = ["K8BWWyKj978", "STjpkSjzYbs", "iDFuOJ28J-c"];

// Sample darbar videos (from channel shorts) for gallery video half & jhanki
const DARBAR_VIDEOS = ["4EdyS_wfuaE", "62sBhsIIoK0", "7vYlZ55GXeI"];
const JHANKI_VIDEOS = ["8JwQAzNIctQ", "8XTKVrJTEmU", "DD3jnotB9VE"];

const services = [
  { icon: Crown, title: "Mata ki Chowki & Jagaran", desc: "Soulful jagran & chowki in honour of Mata Rani with full darbar decor and devotional singers." },
  { icon: Feather, title: "Khatu Shyam Kirtan", desc: "Night-long kirtan & bhajans dedicated to Shyam Baba, filled with faith and divine energy." },
  { icon: Music, title: "Bhajan Sandhya", desc: "Live singers, harmonium, tabla & complete sound arrangement for an evening of devotion." },
  { icon: BookOpen, title: "Sundar Kand Path Katha", desc: "Sacred recitation of Hanuman Chalisa & Sundar Kand with experienced pandits and vedic rituals." },
  { icon: Calendar, title: "Private & Society Events", desc: "Home functions, society jagrans, colony events & corporate spiritual gatherings." },
  { icon: Star, title: "Other Devotional Events", desc: "Kirtan, bhajan, jagran, satsang & any special devotional programme tailored to your needs." },
];

const reviews = [
  { name: "Rakesh Sharma", place: "Kavi Nagar, Ghaziabad", rating: 5, text: "Bhagwan ki kripa se hamare ghar par bahut hi sunder jagran hua. Shankar ji ki mandali ne saari raat baandh diya. Sabhi mehmaan bhaav vibhor ho gaye." },
  { name: "Meena Gupta", place: "Indirapuram", rating: 5, text: "Best Mata Ki Chowki experience. Sound, decoration and singing — everything was perfect and truly divine. Highly recommended." },
  { name: "Amit Yadav", place: "Vaishali, Ghaziabad", rating: 5, text: "Professional team, punctual and very devoted singers. Har bhajan dil ko chhoo gaya. Jai Shree Shyam!" },
  { name: "Pooja Verma", place: "Noida", rating: 5, text: "Amazing Khatu Shyam jagran arranged in our society. Everyone appreciated the arrangements and soulful voice." },
  { name: "Sunil Aggarwal", place: "Delhi", rating: 5, text: "Sundar Kand Path at our home was so peaceful. The whole atmosphere turned divine. Thank you Shankar ji." },
  { name: "Neha Singh", place: "Gurugram", rating: 5, text: "Booked them for Bhajan Sandhya — the singers are extremely talented and humble. Truly blessed evening." },
  { name: "Ravi Chauhan", place: "Vasundhara", rating: 5, text: "Khatu Shyam jagaran was memorable for our entire family. Baba ki kripa aur mandali ki mehnat dono dikhti hai." },
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
      <Gallery />
      <Jhanki />

      <Compositions />
      <Reviews />
      <ContactSection />
      <BookingForm />
      <Footer />
      <FloatingContact />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={LOGO} alt="Shri Shyam Jagran Party logo" className="h-14 md:h-16 w-auto object-contain drop-shadow-lg" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="hover:text-saffron transition">Services</a>
          <a href="#gallery" className="hover:text-saffron transition">Gallery</a>
          <a href="#reviews" className="hover:text-saffron transition">Reviews</a>
          <a href="#booking" className="hover:text-saffron transition">Book</a>
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
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-20">
      <img src={HERO_POSTER} alt="Shri Shyam Jagaran Party banner" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
      <div className="relative z-10 text-center px-6 max-w-4xl animate-float-up">
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 text-gold">
          <span className="font-devnagri text-lg md:text-2xl animate-flicker">॥ जय माता दी ॥</span>
          <span className="font-devnagri text-2xl md:text-4xl animate-flicker">॥ जय श्री श्याम ॥</span>
          <span className="font-devnagri text-lg md:text-2xl animate-flicker">॥ जय माता दी ॥</span>
        </div>
        <h1 className="font-display text-4xl md:text-7xl font-bold text-cream leading-tight">
          Shri Shyam <span className="text-gradient-gold">Jagaran Party</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-cream/90 font-light">GHAZIABAD, NOIDA, DELHI, NCR ALL over india</p>
        <p className="mt-6 text-cream/85 text-base md:text-lg max-w-2xl mx-auto">
          Devotional Khatu Shyam Jagaran, Mata Ki Chowki & Jagaran & Bhajan Sandhya —
          soulful voices, sacred nights, unforgettable Moments.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_TEXT}`} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-maroon-deep font-medium shadow-divine hover:scale-105 transition">
            <MessageCircle className="w-5 h-5" /> WhatsApp Now
          </a>
          <a href="#booking" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cream/40 text-cream hover:bg-cream/10 transition">
            Book Your Jagaran <Send className="w-4 h-4" />
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
    <div className="bg-destructive/10 border-y-2 border-destructive/40 py-4 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-3 text-center">
        <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-destructive shrink-0 animate-flicker" />
        <p className="text-sm md:text-base font-semibold text-destructive">
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
    <section className="py-16 px-6 bg-gradient-to-b from-secondary/40 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-4">Sanchalak</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
          <span className="font-devnagri">श्री शंकर यादव जी</span>
        </h2>
        <div className="relative inline-block">
          <div className="absolute -inset-4 rounded-full bg-gradient-gold blur-2xl opacity-40 animate-flicker" />
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-gold shadow-divine bg-gradient-royal">
            <img src={SHANKAR} alt="Shri Shankar Yadav ji" className="w-full h-full object-cover object-top" />
          </div>
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
    <section className="py-24 px-6 max-w-6xl mx-auto text-center">
      <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-4">About Us</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-6">A Devotional Legacy in Every Bhajan</h2>
      <p className="text-muted-foreground text-lg leading-relaxed max-w-5xl mx-auto">
        Based in Ghaziabad and led by <strong className="text-foreground">Shri Shankar Yadav ji</strong>, Shri Shyam Jagaran Party has been
        organising soul-stirring jagrans & Kirtans for years across Delhi NCR — Ghaziabad, Noida, Delhi, Gurugram and beyond.
        From intimate home chowkis to grand society jagrans, our mandali brings professional singers,
        harmonium, tabla, sound system and complete darbar decoration to create an atmosphere of pure devotion.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
        {[
          { n: "500+", l: "Jagrans Organised" },
          { n: "300+", l: "Shyam Kirtan & Other Devotional Events" },
          { n: "13+", l: "Years of Seva" },
          { n: "100%", l: "Devotees Blessed" },
        ].map((s) => (
          <div key={s.l} className="p-6 rounded-2xl bg-card shadow-soft border border-border">
            <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">{s.n}</div>
            <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-secondary/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-4">Our Seva</p>
          <h2 className="text-3xl md:text-5xl font-bold">Divine Services We Offer</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-divine transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-gold grid place-items-center mb-5 shadow-soft">
                <Icon className="w-7 h-7 text-maroon-deep" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const photos = [gallery1, gallery2, gallery3];
  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-4">Gallery</p>
          <h2 className="text-3xl md:text-5xl font-bold">Moments from Our Darbar</h2>
          <p className="mt-3 text-muted-foreground text-sm">More photos on our <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="text-saffron underline">Instagram</a> & <a href={GOOGLE_MAPS} target="_blank" rel="noreferrer" className="text-saffron underline">Google page</a>.</p>
        </div>

        {/* Photos */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Camera className="w-6 h-6 text-saffron" />
            <h3 className="text-2xl font-display font-semibold">Darbar Photos</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {photos.map((src, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl shadow-soft group ${i === 0 ? "md:row-span-2 md:h-[560px]" : "h-[270px]"}`}>
                <img src={src} alt={`Darbar photo ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Video className="w-6 h-6 text-saffron" />
            <h3 className="text-2xl font-display font-semibold">Darbar Videos</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {DARBAR_VIDEOS.map((id) => (
              <div key={id} className="rounded-2xl overflow-hidden shadow-soft aspect-[9/16] bg-maroon-deep border border-border">
                <iframe
                  src={`https://www.youtube.com/embed/${id}?rel=0`}
                  title={`Darbar video ${id}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Jhanki() {
  return (
    <section className="py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-4 flex items-center justify-center gap-2">
            <Crown className="w-4 h-4" /> Divine Jhanki
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">Sajji Hui Jhanki & Darbar Decor</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Glimpses of our beautifully decorated jhankis of Mata Rani, Shyam Baba & other devotional setups —
            crafted with love and devotion for every event.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {JHANKI_VIDEOS.map((id) => (
            <div key={id} className="rounded-2xl overflow-hidden shadow-divine aspect-[9/16] bg-maroon-deep border border-gold/30">
              <iframe
                src={`https://www.youtube.com/embed/${id}?rel=0`}
                title={`Jhanki video ${id}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Videos() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent((i) => (i + 1) % SHORTS_IDS.length), 21000);
    return () => clearInterval(t);
  }, []);
  const id = SHORTS_IDS[current];

  return (
    <section className="py-24 px-6 bg-gradient-royal text-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-gold text-xs mb-4">Watch & Listen</p>
          <h2 className="text-3xl md:text-5xl font-bold">Live from Our Jagrans</h2>
          <p className="mt-4 text-cream/80">Top Shorts from our channel — auto-changing every 21 seconds.</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-divine aspect-[9/16] max-w-sm mx-auto border border-gold/30 bg-maroon-deep mb-8">
          <iframe
            key={id}
            src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`}
            title={`Short ${id}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="flex justify-center gap-1.5 mb-8">
          {SHORTS_IDS.map((_, i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all ${i === current ? "w-8 bg-gold" : "w-4 bg-cream/30"}`} />
          ))}
        </div>
        <div className="text-center flex flex-wrap justify-center gap-4">
          <a href={YOUTUBE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-maroon-deep font-medium hover:scale-105 transition">
            <Youtube className="w-5 h-5" /> Visit YouTube Channel
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cream/40 text-cream hover:bg-cream/10 transition">
            <Instagram className="w-5 h-5" /> Instagram Reels
          </a>
        </div>
      </div>
    </section>
  );
}

// Composed songs player — switches every 60s and resumes where it left off
declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

function Compositions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const indexRef = useRef(0);
  const savedTimes = useRef<number[]>(COMPOSITIONS.map(() => 0));
  const [displayIndex, setDisplayIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let switchTimer: ReturnType<typeof setInterval> | null = null;

    const loadApi = () =>
      new Promise<void>((resolve) => {
        if (window.YT && window.YT.Player) return resolve();
        const existing = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
        if (!existing) {
          const s = document.createElement("script");
          s.src = "https://www.youtube.com/iframe_api";
          document.body.appendChild(s);
        }
        window.onYouTubeIframeAPIReady = () => resolve();
        const check = setInterval(() => {
          if (window.YT && window.YT.Player) {
            clearInterval(check);
            resolve();
          }
        }, 200);
      });

    const switchTrack = () => {
      if (!playerRef.current) return;
      try {
        const t = playerRef.current.getCurrentTime?.() ?? 0;
        savedTimes.current[indexRef.current] = t;
      } catch {}
      const next = (indexRef.current + 1) % COMPOSITIONS.length;
      indexRef.current = next;
      setDisplayIndex(next);
      const startAt = Math.floor(savedTimes.current[next] || 0);
      try {
        playerRef.current.loadVideoById({ videoId: COMPOSITIONS[next], startSeconds: startAt });
      } catch {}
    };

    loadApi().then(() => {
      if (cancelled || !containerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: COMPOSITIONS[0],
        playerVars: { autoplay: 0, rel: 0, modestbranding: 1, playsinline: 1 },
        events: {
          onReady: () => {
            switchTimer = setInterval(switchTrack, 60000);
          },
        },
      });
    });

    return () => {
      cancelled = true;
      if (switchTimer) clearInterval(switchTimer);
      try { playerRef.current?.destroy?.(); } catch {}
    };
  }, []);

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-4">Original Bhajans</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-flex items-center gap-3 justify-center">
          <Mic2 className="w-8 h-8 text-saffron" /> My Own Composed Songs
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-6">
          Original bhajans composed and sung by <strong className="text-foreground">Shri Shankar Yadav ji</strong>.
          Tracks auto-switch every minute and resume from where each one left off.
        </p>
        <div className="flex justify-center gap-2 mb-6">
          {COMPOSITIONS.map((_, i) => (
            <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium transition ${i === displayIndex ? "bg-gradient-gold text-maroon-deep" : "bg-secondary text-muted-foreground"}`}>
              Bhajan {i + 1}
            </span>
          ))}
        </div>
        <div className="rounded-2xl overflow-hidden shadow-divine aspect-video border border-border bg-card">
          <div ref={containerRef} className="w-full h-full" />
        </div>
        <a href={YOUTUBE} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-maroon-deep font-medium hover:scale-105 transition">
          <Youtube className="w-5 h-5" /> Listen to All Compositions
        </a>
      </div>
    </section>
  );
}

function Reviews() {
  const [index, setIndex] = useState(0);
  const perPage = 2;
  const pages = Math.ceil(reviews.length / perPage);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % pages), 5000);
    return () => clearInterval(t);
  }, [pages]);

  const visible = reviews.slice(index * perPage, index * perPage + perPage);

  return (
    <section id="reviews" className="py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-4">Blessings from Devotees</p>
          <h2 className="text-3xl md:text-5xl font-bold">What Our Devotees Say</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 transition-opacity duration-500" key={index}>
          {visible.map((r) => (
            <div key={r.name} className="p-8 rounded-2xl bg-card border border-border shadow-soft animate-float-up">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground italic leading-relaxed">"{r.text}"</p>
              <div className="mt-5 pt-5 border-t border-border">
                <p className="font-semibold">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.place}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show review page ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition ${i === index ? "bg-saffron w-8" : "bg-border"}`}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <a href={GOOGLE_REVIEWS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-royal text-cream font-medium shadow-soft hover:scale-105 transition">
            <Star className="w-4 h-4 fill-gold text-gold" /> View More Reviews on Google <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/60">
      <div className="max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-4">Get in Touch</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Bulao Mata Rani & Baba Shyam Ko Aapne Ghar</h2>
        <p className="text-muted-foreground mb-12">We respond quickly — call or WhatsApp us anytime.</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a href={`tel:${PHONE}`} className="group p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-divine transition hover:-translate-y-1">
            <Phone className="w-10 h-10 mx-auto text-saffron mb-4 group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold mb-2">Call Directly</h3>
            <p className="text-2xl font-display text-gradient-gold">+91 79829 56590</p>
            <p className="text-xs text-muted-foreground mt-2">Available 24×7</p>
          </a>
          <a href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_TEXT}`} target="_blank" rel="noreferrer"
             className="group p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-divine transition hover:-translate-y-1">
            <MessageCircle className="w-10 h-10 mx-auto text-saffron mb-4 group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold mb-2">WhatsApp Chat</h3>
            <p className="text-2xl font-display text-gradient-gold">Message Us</p>
            <p className="text-xs text-muted-foreground mt-2">Quick reply guaranteed</p>
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
    <section id="booking" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-4">Book Now</p>
          <h2 className="text-3xl md:text-5xl font-bold">Share Your Requirements</h2>
          <p className="text-muted-foreground mt-3">Fill the form — we'll get back with a divine plan for your event.</p>
        </div>
        <form onSubmit={onSubmit} className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-divine space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Your Name" name="name" required />
            <Field label="Phone Number" name="phone" type="tel" required pattern="[0-9]{10}" minLength={10} maxLength={10} />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium mb-2 block">Event Type</label>
              <select name="event" required defaultValue="Khatu Shyam Jagran" className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-ring outline-none">
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
            <label className="text-sm font-medium mb-2 block">Requirements / Message</label>
            <textarea name="message" rows={4} maxLength={1000} className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-ring outline-none resize-none" placeholder="Tell us about your event, expected guests, any special requirements..." />
          </div>
          <button type="submit" className="w-full py-4 rounded-full bg-gradient-royal text-cream font-medium shadow-divine hover:opacity-95 transition inline-flex items-center justify-center gap-2">
            <Send className="w-4 h-4" /> Send Enquiry via WhatsApp
          </button>
          {sent && <p className="text-center text-sm text-saffron">Opening WhatsApp… Jai Shree Shyam! 🙏</p>}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, pattern, minLength, maxLength }: { label: string; name: string; type?: string; required?: boolean; pattern?: string; minLength?: number; maxLength?: number }) {
  return (
    <div>
      <label className="text-sm font-medium mb-2 block">{label}{required && <span className="text-saffron ml-1">*</span>}</label>
      <input name={name} type={type} required={required} pattern={pattern} minLength={minLength} maxLength={maxLength}
        className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-ring outline-none" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="text-cream py-14 px-6" style={{ background: "var(--maroon-deep)" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <img src={LOGO} alt="Shri Shyam Jagran Party logo" className="w-56 md:w-64 mb-4 drop-shadow-2xl" />
          <h3 className="font-display text-xl font-semibold mb-3 text-gradient-gold">Shri Shyam Jagaran Party</h3>
          <p className="text-sm text-cream/70 leading-relaxed">
            Ghaziabad-based devotional group spreading faith through soulful Jagrans, Shyam Kirtan, Kirtan, Bhajan Sandhya, Sundar Kand Path Katha & Other Devotional Events across Delhi NCR and All Over India.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Contact</h4>
          <p className="text-sm text-cream/70 flex items-center gap-2 mb-2"><Phone className="w-4 h-4" /> +91 79829 56590</p>
          <p className="text-sm text-cream/70 flex items-center gap-2"><MapPin className="w-4 h-4" /> Ghaziabad, Uttar Pradesh</p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Follow</h4>
          <div className="flex flex-wrap gap-3">
            <a href={YOUTUBE} target="_blank" rel="noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full border border-cream/30 grid place-items-center hover:bg-cream/10 transition"><Youtube className="w-5 h-5" /></a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-cream/30 grid place-items-center hover:bg-cream/10 transition"><Instagram className="w-5 h-5" /></a>
            <a href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_TEXT}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-cream/30 grid place-items-center hover:bg-cream/10 transition"><MessageCircle className="w-5 h-5" /></a>
            <a href={GOOGLE_MAPS} target="_blank" rel="noreferrer" aria-label="Google Maps Location" className="w-10 h-10 rounded-full border border-cream/30 grid place-items-center hover:bg-cream/10 transition"><MapPin className="w-5 h-5" /></a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-cream/30 grid place-items-center hover:bg-cream/10 transition"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-cream/10 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Shri Shyam Jagaran Party. All Rights Reserved. · जय श्री श्याम
      </div>
    </footer>
  );
}

function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_TEXT}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-divine hover:scale-110 transition animate-flicker">
        <MessageCircle className="w-6 h-6" />
      </a>
      <a href={`tel:${PHONE}`} aria-label="Call"
        className="w-14 h-14 rounded-full bg-gradient-royal text-cream grid place-items-center shadow-divine hover:scale-110 transition">
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
