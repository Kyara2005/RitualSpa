import { ClientEffects } from "@/components/ClientEffects";
import { FloatingBook } from "@/components/FloatingBook";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { HeadSpa } from "@/components/HeadSpa";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { NailTrends } from "@/components/NailTrends";
import { Services } from "@/components/Services";
import { SocialWatchlist } from "@/components/SocialWatchlist";
import { Society } from "@/components/Society";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <NailTrends />
        <HeadSpa />
        <Gallery />
        <Testimonials />
        <Society />
        <SocialWatchlist />
        <Location />
      </main>
      <Footer />
      <FloatingBook />
    </>
  );
}
