import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, MapPin, Youtube, Instagram, Star, Sparkles, Music, Flame, Send, Calendar, BookOpen } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "+917982956590";
const WHATSAPP = "917982956590";
const WHATSAPP_TEXT = encodeURIComponent("JAI MATA DI\nI Want to enquiry for organinzinag a devotional Programm");
const YOUTUBE = "https://www.youtube.com/@ShriShyamJagranPartyGzb";
const INSTAGRAM = "https://www.instagram.com/shankar98yadav/";

const services = [
  { icon: Sparkles, title: "Mata ki Chowki & Jagaran", desc: "Soulful jagran & chowki in honour of Mata Rani with full darbar decor and devotional singers." },
  { icon: Flame, title: "Khatu Shyam Kirtan", desc: "Night-long kirtan & bhajans dedicated to Shyam Baba, filled with faith and divine energy." },
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
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Gallery />
      <Videos />
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
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-1 md:gap-2">
          <span className="font-devnagri text-[10px] md:text-xs text-gold hidden sm:block leading-none">॥ जय माता दी ॥</span>
          <span className="w-9 h-9 rounded-full bg-gradient-royal grid place-items-center text-cream font-display font-bold">श्री</span>
          <span className="font-display font-semibold tracking-wide text-sm md:text-base leading-tight">Shri Shyam Jagaran Party</span>
          <span className="font-devnagri text-[10px] md:text-xs text-gold hidden sm:block leading-none">॥ जय माता दी ॥</span>
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
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-16">
      <img src={heroBanner} alt="Shri Shyam Jagaran Party stage with Khatu Shyam Baba" width={1920} height={1088} className="absolute inset-0 w-full h-full object-cover" />
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
          Devotional Khatu Shyam Jagaran, Mata Ki Chowki & Bhajan Sandhya —
          soulful voices, sacred nights, unforgettable darbar.
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

function About() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto text-center">
      <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-4">About Us</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-6">A Devotional Legacy in Every Bhajan</h2>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Based in Ghaziabad and led by <strong className="text-foreground">Shri Shankar Yadav ji</strong>, Shri Shyam Jagaran Party has been
        organising soul-stirring jagrans for years across Delhi NCR — Ghaziabad, Noida, Delhi, Gurugram and beyond.
        From intimate home chowkis to grand society jagrans, our mandali brings professional singers,
        harmonium, tabla, sound system and complete darbar decoration to create an atmosphere of pure devotion.
      </p>
      <div className="grid grid-cols-3 gap-6 mt-12">
        {[
          { n: "500+", l: "Jagrans Organised" },
          { n: "15+", l: "Years of Seva" },
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
  const imgs = [gallery1, gallery2, gallery3];
  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-4">Gallery</p>
          <h2 className="text-3xl md:text-5xl font-bold">Moments from Our Darbar</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl shadow-soft group ${i === 0 ? "md:row-span-2 md:h-[560px]" : "h-[270px]"}`}>
              <img src={src} alt={`Jagran gallery ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Videos() {
  return (
    <section className="py-24 px-6 bg-gradient-royal text-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-gold text-xs mb-4">Watch & Listen</p>
          <h2 className="text-3xl md:text-5xl font-bold">Live from Our Jagrans</h2>
          <p className="mt-4 text-cream/80">Subscribe to our YouTube channel for the latest bhajans & kirtan.</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-divine aspect-video max-w-4xl mx-auto border border-gold/30 bg-maroon-deep">
          <iframe
            src="https://www.youtube.com/embed?listType=user_uploads&list=ShriShyamJagranPartyGzb"
            title="Shree Shyam Jagran Party YouTube"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="text-center mt-8">
          <a href={YOUTUBE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-maroon-deep font-medium hover:scale-105 transition">
            <Youtube className="w-5 h-5" /> Visit YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-4">Blessings from Devotees</p>
          <h2 className="text-3xl md:text-5xl font-bold">What Our Devotees Say</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="p-8 rounded-2xl bg-card border border-border shadow-soft">
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
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/60">
      <div className="max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-saffron text-xs mb-4">Get in Touch</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Bulao Baba Ko Apne Aangan</h2>
        <p className="text-muted-foreground mb-12">Direct call or WhatsApp — we respond promptly.</p>
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
          <h3 className="font-display text-xl font-semibold mb-3 text-gradient-gold">Shree Shyam Jagran Party</h3>
          <p className="text-sm text-cream/70 leading-relaxed">
            Ghaziabad-based devotional group spreading faith through soulful jagrans across Delhi NCR.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Contact</h4>
          <p className="text-sm text-cream/70 flex items-center gap-2 mb-2"><Phone className="w-4 h-4" /> +91 79829 56590</p>
          <p className="text-sm text-cream/70 flex items-center gap-2"><MapPin className="w-4 h-4" /> Ghaziabad, Uttar Pradesh</p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Follow</h4>
          <div className="flex gap-3">
            <a href={YOUTUBE} target="_blank" rel="noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full border border-cream/30 grid place-items-center hover:bg-cream/10 transition"><Youtube className="w-5 h-5" /></a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-cream/30 grid place-items-center hover:bg-cream/10 transition"><Instagram className="w-5 h-5" /></a>
            <a href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_TEXT}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-cream/30 grid place-items-center hover:bg-cream/10 transition"><MessageCircle className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-cream/10 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Shree Shyam Jagran Party. All Rights Reserved. · जय श्री श्याम
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
