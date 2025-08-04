import AboutMemain from './components/aboutMeSection/AboutMemain';
import HeroGradient from './components/herosection/HeroGradient';
import HeroMain from './components/herosection/HeroMain';
import SubHeroSection from './components/herosection/SubHeroSection';
import NavbarMain from './components/navbar/NavbarMain';
import SkillsMain from './components/skillsSection/SkillsMain';
import SubSkills from './components/skillsSection/SubSkills';
import ExperienceMain from './components/experienceMain/ExperienceMain';
import ProjectsMain from './components/projectsSection/ProjectsMain';
import CertificateMain from './components/certificateSection/CertificateMain';
import ContactMeMain from './components/contactmeSection/ContactMeMain';
import FooterMain from './components/footer/FooterMain';

function App() {
  return (
    <main className='font-body'>
      <NavbarMain/>
      <HeroMain/>
      <HeroGradient/>
      <SubHeroSection/>
      <AboutMemain/>
      <SkillsMain/>
      <SubSkills/>
      <ExperienceMain/>
      <ProjectsMain/>
      <CertificateMain/>
      <ContactMeMain/>
      <FooterMain/>
    </main>
  );
}

export default App;
