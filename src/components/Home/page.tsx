import FetchBlogsHome from "../Blogs/fetchHomeBlog";
import FetchForHome from "../Projects/fetchForHome";
import HeroSection from "./HeroSection";
import PersonalInfoPage from "./PersonalInfo";
import SkillsShowcase from "./SkillShowcase";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <PersonalInfoPage />
      <SkillsShowcase />

      <FetchForHome />
      <FetchBlogsHome />
    </div>
  );
}
