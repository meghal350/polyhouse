import { Leaf, Phone, Mail, MapPin } from "lucide-react";

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
    <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-16">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
          <Leaf className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <span className="font-display font-bold text-lg text-foreground leading-none">Polyhouse India</span>
          <span className="block text-xs text-muted-foreground">Ministry of Agriculture</span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
        <a href="#types" className="text-muted-foreground hover:text-primary transition-colors">Types</a>
        <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">Benefits</a>
        <a href="#subsidy" className="text-muted-foreground hover:text-primary transition-colors">Subsidy</a>
        <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer id="contact" className="bg-foreground text-background py-16">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-xl">Polyhouse India</span>
          </div>
          <p className="text-background/70 text-sm leading-relaxed">
            A flagship programme by the Government of India to promote protected cultivation and modern agricultural practices across the nation.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><a href="#about" className="hover:text-primary transition-colors">About Programme</a></li>
            <li><a href="#types" className="hover:text-primary transition-colors">Types of Polyhouse</a></li>
            <li><a href="#benefits" className="hover:text-primary transition-colors">Benefits</a></li>
            <li><a href="#subsidy" className="hover:text-primary transition-colors">Subsidy Information</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> 1800-180-1551</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> polyhouse@gov.in</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Krishi Bhawan, New Delhi</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-background/50">
        © 2026 Polyhouse India — Government of India. All rights reserved.
      </div>
    </div>
  </footer>
);

export { Navbar, Footer };
