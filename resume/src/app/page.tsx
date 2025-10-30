import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import CareerSection from "./components/sections/CareerSection";
import ProjectSection from "./components/sections/ProjectSection";
// import BlogSection from "./components/sections/BlogSection";

export default function Page() {
  return (
    <>
      <HomeSection id="home"/>
      <AboutSection id="about"/>
      <CareerSection id="career"/>
      <ProjectSection id="projects"/>
      {/* <BlogSection id="blog"/> */}
    </>
  );
}
