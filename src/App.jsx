import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import ProblemSection from './components/ProblemSection';
import ForgeStackSection from './components/ForgeStackSection';
import NexusSection from './components/NexusSection';
import BuildingBlocksSection from './components/BuildingBlocksSection';
import OurVisionSection from './components/OurVisionSection';
import BlogNewsSection from './components/BlogNewsSection';
import FaqSection from './components/FaqSection';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <ProblemSection />
        <ForgeStackSection />
        <NexusSection />
        <BuildingBlocksSection />
        <OurVisionSection />
        <BlogNewsSection />
        <FaqSection />
      </main>
    </>
  );
}

export default App;
