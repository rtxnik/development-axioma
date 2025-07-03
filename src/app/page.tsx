import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import CompanyIntro from "@/components/CompanyIntro"
import ServicesSection from "@/components/ServicesSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CompanyIntro />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
