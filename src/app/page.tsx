import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { Hero } from "@/components/sections/hero";
import { Products } from "@/components/sections/products";
import { BundleSection } from "@/components/sections/bundle";
import { Benefits } from "@/components/sections/benefits";
import { SocialProof } from "@/components/sections/social-proof";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Products />
        <BundleSection />
        <Benefits />
        <SocialProof />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
