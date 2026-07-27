import { Concept } from "@/components/Concept";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Concept />
        <Services />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
