import { Hero } from "@/components/Hero";
import { HazardMarquee } from "@/components/HazardMarquee";
import { Services } from "@/components/Services";
import { Steps } from "@/components/Steps";
import { MemberCards } from "@/components/MemberCards";
import { Coverage } from "@/components/Coverage";
import { RcaStrip } from "@/components/RcaStrip";

export default function Home() {
  return (
    <main>
      <Hero />
      <HazardMarquee />
      <Services />
      <Steps />
      <MemberCards />
      <Coverage />
      <RcaStrip />
    </main>
  );
}
