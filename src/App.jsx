import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PersonalIntro from './components/PersonalIntro';
import SelectedProjects from './components/SelectedProjects';
import PersonalStrengths from './components/PersonalStrengths';
import MentorDetail from './components/MentorDetail';
import StudyRoadmapStepper from './components/StudyRoadmapStepper';
import LiteratureTier from './components/LiteratureTier';
import MethodsGlossary from './components/MethodsGlossary';
import StudyPlan from './components/StudyPlan';
import FullScreenContact from './components/FullScreenContact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-deep-950 text-text-primary">
      {/* Subtle particle layer (behind everything) */}
      <ParticleBackground />

      {/* Grid overlay (subtle) */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-20" />

      {/* Global ambient orbs */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent-cyan/[0.012] blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-purple/[0.008] blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <PersonalIntro />
          <SelectedProjects />
          <PersonalStrengths />
          <StudyPlan />
          <MentorDetail />
          <StudyRoadmapStepper />
          <LiteratureTier />
          <MethodsGlossary />
        </main>
        <FullScreenContact />
      </div>
    </div>
  );
}
