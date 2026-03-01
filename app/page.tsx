import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import StatsSection from '@/components/stats-section'
import ProcessSection from '@/components/process-section'
import TestimonialsSection from '@/components/testimonials-section'
import PricingSection from '@/components/pricing-section'
import FaqSection from '@/components/faq-section'
import ContactForm from '@/components/contact-form'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden break-keep">
      <HeroSection />
      <ServicesSection />
      <div className="hidden md:block">
        <StatsSection />
      </div>
      <div className="hidden md:block">
        <ProcessSection />
      </div>
      <TestimonialsSection />
      <div className="hidden md:block">
        <PricingSection />
      </div>
      <FaqSection />
      <ContactForm />
    </main>
  )
}
