import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import Star from "../components/Star";
import ThemeToggle from "../components/ThemeToggle";

function Home(){
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme toggle */}
            <ThemeToggle/>
            {/* Background Effect */}
            <Star/>
            {/* NavBar */}
            <NavBar/>
            {/* Main Content */}
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
            {/* Footer */}
            <Footer/>

        </div>
    )
}

export default Home;