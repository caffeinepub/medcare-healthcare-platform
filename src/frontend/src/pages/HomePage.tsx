import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  Search, 
  Truck, 
  Shield, 
  Clock, 
  Heart,
  CheckCircle2,
  Package,
  FileText,
  Zap,
  RefreshCw,
  Star,
  Quote
} from 'lucide-react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'medicines', label: 'Medicines' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'why-choose', label: 'Why Choose Us' },
    { id: 'testimonials', label: 'Testimonials' },
  ];

  const services = [
    {
      icon: <Truck className="h-10 w-10" />,
      title: 'Home Delivery',
      description: 'Fast and reliable medicine delivery right to your doorstep within hours.',
      features: ['Same-day delivery', 'Track your order', 'Contactless delivery']
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: 'Prescription Orders',
      description: 'Upload your prescription and get your medicines delivered hassle-free.',
      features: ['Easy upload', 'Verified by pharmacists', 'Secure & confidential']
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: 'Emergency Delivery',
      description: 'Need medicines urgently? We provide express emergency delivery services.',
      features: ['24/7 availability', 'Priority processing', 'Express delivery']
    },
    {
      icon: <RefreshCw className="h-10 w-10" />,
      title: 'Subscription Refills',
      description: 'Never run out of your regular medicines with our auto-refill service.',
      features: ['Auto-refill reminders', 'Flexible schedules', 'Easy management']
    },
  ];

  const howItWorksSteps = [
    {
      step: '1',
      title: 'Search Medicine',
      description: 'Search for your required medicines in our extensive database',
      icon: <Search className="h-8 w-8" />
    },
    {
      step: '2',
      title: 'Upload Prescription',
      description: 'Upload your prescription for verification by our licensed pharmacists',
      icon: <FileText className="h-8 w-8" />
    },
    {
      step: '3',
      title: 'Place Order',
      description: 'Confirm your order and choose your preferred delivery time',
      icon: <Package className="h-8 w-8" />
    },
    {
      step: '4',
      title: 'Get Delivered',
      description: 'Receive your medicines safely at your doorstep',
      icon: <Truck className="h-8 w-8" />
    },
  ];

  const whyChooseReasons = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Licensed Pharmacists',
      description: 'All prescriptions verified by certified healthcare professionals'
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: 'Quality Assured',
      description: 'Genuine medicines from trusted manufacturers only'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '24/7 Availability',
      description: 'Order anytime, anywhere with round-the-clock service'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Care You Trust',
      description: 'Compassionate healthcare support and guidance'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      content: 'MedCare has made managing my monthly prescriptions so much easier. The delivery is always on time and the service is exceptional!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Senior Citizen',
      content: 'As an elderly person, I appreciate how easy it is to use MedCare. The interface is simple and the staff is always helpful.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Working Professional',
      content: 'The emergency delivery service saved me when I urgently needed medication. Fast, reliable, and professional!',
      rating: 5
    },
  ];

  const sampleMedicines = [
    { name: 'Paracetamol 500mg', category: 'Pain Relief', stock: 'In Stock', price: '$5.99' },
    { name: 'Amoxicillin 250mg', category: 'Antibiotic', stock: 'In Stock', price: '$12.99' },
    { name: 'Ibuprofen 400mg', category: 'Pain Relief', stock: 'In Stock', price: '$7.49' },
    { name: 'Cetirizine 10mg', category: 'Allergy', stock: 'In Stock', price: '$8.99' },
    { name: 'Omeprazole 20mg', category: 'Digestive', stock: 'Low Stock', price: '$14.99' },
    { name: 'Metformin 500mg', category: 'Diabetes', stock: 'In Stock', price: '$11.49' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img
                src="/assets/generated/medcare-logo-transparent.dim_200x200.png"
                alt="MedCare Logo"
                className="h-12 w-12"
              />
              <span className="text-2xl font-bold font-heading text-primary">
                MedCare
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-2 rounded-full font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="px-4 py-3 rounded-lg font-medium text-left text-foreground hover:bg-primary/10 hover:text-primary transition-all"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground leading-tight">
                  Check. Order.{' '}
                  <span className="text-primary">
                    Get Medicines Delivered.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Your trusted healthcare partner for convenient medicine delivery and professional pharmaceutical care.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('medicines')}
                  className="text-lg px-8 py-7 rounded-full shadow-soft-lg hover:shadow-soft transition-all font-heading"
                >
                  Check Availability
                  <Search className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('services')}
                  className="text-lg px-8 py-7 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-heading"
                >
                  Our Services
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Licensed Pharmacists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">24/7 Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in-up">
              <div className="relative rounded-3xl overflow-hidden shadow-soft-lg">
                <img
                  src="/assets/generated/healthcare-hero.dim_800x600.jpg"
                  alt="Healthcare Professional"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft-lg p-6 border border-border">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg font-heading text-foreground">Trusted Care</p>
                    <p className="text-sm text-muted-foreground">Licensed & Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive healthcare solutions designed for your convenience and well-being
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-soft rounded-2xl group">
                <CardContent className="p-8 space-y-6">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-5 w-fit text-primary group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold font-heading text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Medicine Availability Section */}
      <section id="medicines" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Medicine Availability
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Search our extensive inventory of quality medicines
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for medicines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-16 pr-6 py-7 text-lg rounded-full border-2 border-primary/20 focus:border-primary shadow-soft"
              />
            </div>
          </div>

          {/* Medicine Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleMedicines.map((medicine, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-soft rounded-2xl">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold font-heading text-foreground">{medicine.name}</h3>
                      <Badge variant="secondary" className="rounded-full">{medicine.category}</Badge>
                    </div>
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className={`text-sm font-medium ${medicine.stock === 'In Stock' ? 'text-primary' : 'text-orange-500'}`}>
                      {medicine.stock}
                    </span>
                    <span className="text-2xl font-bold font-heading text-foreground">{medicine.price}</span>
                  </div>
                  <Button className="w-full rounded-full" size="lg">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple steps to get your medicines delivered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-soft rounded-2xl h-full">
                  <CardContent className="p-8 space-y-6 text-center">
                    <div className="relative inline-block">
                      <div className="bg-gradient-to-br from-primary to-accent rounded-full p-6 text-white">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full h-10 w-10 flex items-center justify-center font-bold font-heading text-lg shadow-soft">
                        {step.step}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold font-heading text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="h-1 w-8 bg-gradient-to-r from-primary to-accent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MedCare Section */}
      <section id="why-choose" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Why Choose MedCare?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience healthcare excellence with our trusted pharmaceutical services
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseReasons.map((reason, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-soft rounded-2xl text-center group">
                <CardContent className="p-8 space-y-6">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 w-fit mx-auto text-primary group-hover:scale-110 transition-transform">
                    {reason.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold font-heading text-foreground">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real experiences from people who trust MedCare
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-soft rounded-2xl">
                <CardContent className="p-8 space-y-6">
                  <Quote className="h-10 w-10 text-primary/30" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold font-heading text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/assets/generated/medcare-logo-transparent.dim_200x200.png"
                  alt="MedCare Logo"
                  className="h-12 w-12"
                />
                <span className="text-2xl font-bold font-heading text-primary">MedCare</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Your trusted healthcare partner for convenient medicine delivery and professional pharmaceutical care.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold font-heading text-foreground mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold font-heading text-foreground mb-4 text-lg">Services</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">Home Delivery</li>
                <li className="text-muted-foreground">Prescription Orders</li>
                <li className="text-muted-foreground">Emergency Delivery</li>
                <li className="text-muted-foreground">Subscription Refills</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold font-heading text-foreground mb-4 text-lg">Contact Us</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Email: support@medcare.com</li>
                <li>Phone: 1-800-MEDCARE</li>
                <li>Emergency: 911</li>
                <li>Hours: 24/7</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-center text-muted-foreground">
              © 2025. Built with <Heart className="inline h-4 w-4 text-primary" /> using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

