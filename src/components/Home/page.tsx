import FetchForHome from "../Projects/fetchForHome";
import HeroSection from "./HeroSection";
import SkillsShowcase from "./SkillShowcase";

export default function HomePage() {
  return (
    <div>
      <div className="relative z-10">
        <HeroSection />
      </div>
      <div className="relative z-10">
        <SkillsShowcase />
      </div>
      <div className="relative z-10">
        <FetchForHome />
      </div>
    </div>
  );
}
