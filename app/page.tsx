import Hero from "@/components/home/hero";
import ServicesStrip from "@/components/home/services-strip";
import FeaturedWork from "@/components/home/featured-work";
import StatsBand from "@/components/home/stats-band";
import TeamTeaser from "@/components/home/team-teaser";
import CtaBand from "@/components/home/cta-band";
import { getHeroSlides } from "@/lib/hero-slides";

export default function Home() {
  const heroSlides = getHeroSlides();

  return (
    <>
      <Hero slides={heroSlides} />
      <ServicesStrip />
      <FeaturedWork />
      <StatsBand />
      <TeamTeaser />
      <CtaBand />
    </>
  );
}
