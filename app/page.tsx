import Hero from "@/components/home/hero";
import ServicesStrip from "@/components/home/services-strip";
import FeaturedWork from "@/components/home/featured-work";
import StatsBand from "@/components/home/stats-band";
import TeamTeaser from "@/components/home/team-teaser";
import CtaBand from "@/components/home/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <FeaturedWork />
      <StatsBand />
      <TeamTeaser />
      <CtaBand />
    </>
  );
}
