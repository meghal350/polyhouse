import HeroSlider from "@/components/HeroSlider";
import { Navbar, Footer } from "@/components/Layout";
import {
  Leaf,
  Droplets,
  Sun,
  ShieldCheck,
  TrendingUp,
  Sprout,
  IndianRupee,
  Users,
  BarChart3,
} from "lucide-react";

import heroImg1 from "@/assets/hero-polyhouse-1.jpg";
import heroImg2 from "@/assets/hero-polyhouse-2.jpg";
import heroImg3 from "@/assets/hero-polyhouse-3.jpg";

const slides = [
  {
    image: heroImg1,
    title: "Polyhouse Farming",
    subtitle: "Protected Cultivation for Modern India",
    description:
      "A flagship programme promoting establishment of Green/Polyhouses to revolutionize agriculture with controlled environment farming.",
  },
  {
    image: heroImg2,
    title: "Year-Round Cultivation",
    subtitle: "4–8x Higher Yield Than Open Fields",
    description:
      "Grow high-value crops like tomatoes, capsicum, and flowers throughout the year with advanced drip irrigation and climate control.",
  },
  {
    image: heroImg3,
    title: "Government Subsidy",
    subtitle: "Up to 50% Subsidy Under NHM & MIDH",
    description:
      "Financial assistance and technical support for farmers to adopt polyhouse farming across all states of India.",
  },
];

const types = [
  {
    icon: Sun,
    title: "Naturally Ventilated",
    desc: "Uses natural air circulation with side and top vents. Ideal for tropical and sub-tropical climates across India.",
    cost: "₹800–1,000/sq.m",
  },
  {
    icon: Droplets,
    title: "Fan & Pad (Climate Controlled)",
    desc: "Equipped with cooling pads and exhaust fans. Best for high-value crops like capsicum, cucumber, and roses.",
    cost: "₹1,500–3,500/sq.m",
  },
  {
    icon: ShieldCheck,
    title: "Shade Net House",
    desc: "Cost-effective structure using shade nets for partial protection against sunlight, rain, and pests.",
    cost: "₹300–500/sq.m",
  },
];

const benefits = [
  { icon: TrendingUp, label: "4–8x Higher Yield" },
  { icon: Droplets, label: "70% Water Savings" },
  { icon: ShieldCheck, label: "Pest & Disease Control" },
  { icon: Sprout, label: "Year-Round Cropping" },
  { icon: BarChart3, label: "Better Quality Produce" },
  { icon: Users, label: "Employment Generation" },
];

const stats = [
  { value: "50%", label: "Government Subsidy" },
  { value: "4-8x", label: "Yield Increase" },
  { value: "70%", label: "Water Saved" },
  { value: "365", label: "Days of Cultivation" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSlider slides={slides} />

      {/* Stats Bar */}
      <section className="relative z-10 -mt-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 text-center animate-count"
                style={{
                  boxShadow: "var(--shadow-elevated)",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary font-display">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="govt-badge mb-4">About the Programme</span>
            <h2 className="section-heading mt-4">What is Polyhouse Farming?</h2>
            <p className="section-subheading mt-4">
              Polyhouse farming is a modern agricultural practice that involves cultivating plants within a
              controlled environment using transparent or semi-transparent materials — enabling farmers to grow
              crops year-round with significantly higher yields.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
              <img src={heroImg2} alt="Inside a polyhouse" className="w-full h-80 object-cover" />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/50">
                <Leaf className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Protected Environment</h4>
                  <p className="text-sm text-muted-foreground">
                    Crops are shielded from harsh weather, pests, and diseases — ensuring consistent quality and higher survival rates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/50">
                <Droplets className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Efficient Water Usage</h4>
                  <p className="text-sm text-muted-foreground">
                    Drip irrigation and controlled systems reduce water usage by up to 70% compared to open-field farming.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/50">
                <IndianRupee className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Higher Returns</h4>
                  <p className="text-sm text-muted-foreground">
                    With 4–8x yield increase and premium quality produce, polyhouse farming offers substantially better income for farmers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section id="types" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="govt-badge mb-4">Types</span>
            <h2 className="section-heading mt-4">Types of Polyhouse</h2>
            <p className="section-subheading mt-4">
              Choose the right structure based on your climate, budget, and crop requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {types.map((t, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <t.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground mb-3">{t.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{t.desc}</p>
                <div className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                  {t.cost}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="govt-badge mb-4">Advantages</span>
            <h2 className="section-heading mt-4">Key Benefits</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-card hover:bg-accent/40 transition-colors duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <b.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidy Section */}
      <section id="subsidy" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="govt-badge mb-4">Financial Support</span>
            <h2 className="section-heading mt-4">Subsidy & Schemes</h2>
            <p className="section-subheading mt-4">
              The Government of India provides substantial financial assistance for polyhouse establishment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="bg-card rounded-2xl p-8"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="text-2xl font-bold font-display text-foreground mb-4">
                National Horticulture Mission (NHM)
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  Up to <strong className="text-foreground">50% subsidy</strong> on polyhouse construction cost
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  Available for individual farmers and farmer groups
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  Covers naturally ventilated and climate-controlled structures
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  Technical training and capacity building included
                </li>
              </ul>
            </div>
            <div
              className="bg-card rounded-2xl p-8"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="text-2xl font-bold font-display text-foreground mb-4">
                MIDH & State Schemes
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  Mission for Integrated Development of Horticulture (MIDH) support
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  Additional <strong className="text-foreground">15–25% state-level</strong> top-up subsidies
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  Bank loan facilitation with subsidized interest rates
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  Special provisions for SC/ST and women farmers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Suitable Crops */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <span className="govt-badge mb-4">Crops</span>
          <h2 className="section-heading mt-4">Suitable Crops for Polyhouse</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {["Tomato", "Capsicum", "Cucumber", "Rose", "Gerbera", "Carnation", "Lettuce", "Strawberry", "Broccoli", "Cherry Tomato", "Orchid", "Anthurium"].map(
              (crop) => (
                <span
                  key={crop}
                  className="px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                >
                  {crop}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
