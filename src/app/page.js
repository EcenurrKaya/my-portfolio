import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import { Qualification } from "./components/Qualification";
import { ProjectsPage } from "./components/ProjectsPage";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col">
        <div className="container mx-auto md:px-12 px-4 py-4">
          <HeroSection/>
          <Qualification/>
          <Features/>
          <ProjectsPage/>
        </div>
      </main>
  );
}
