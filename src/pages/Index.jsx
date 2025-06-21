
import Header from "../components/layout/Header.jsx";
import AboutUs from "../components/sections/AboutUs.jsx";
import Services from "../components/sections/Services.jsx";
import Projects from "../components/sections/Projects.jsx";
import Innovation from "../components/sections/Innovation.jsx";
import SeeOurWork from "../components/sections/SeeOurWork.jsx";
import WhyWeStandOut from "../components/sections/WhyWeStandOut.jsx";
import ProudAchievements from "../components/sections/ProudAchievements.jsx";
import Careers from "../components/sections/Careers.jsx";
import ContactUs from "../components/sections/ContactUs.jsx";
import Footer from "../components/layout/Footer.jsx";
import "./styles/main.css"; // ✅ correct


const Index = () => {
  return (
    <div className="websort-app">
      <Header />
      <main>
        <AboutUs />
        <Services />
        <Projects />
        <Innovation />
        <SeeOurWork />
        <WhyWeStandOut />
        <ProudAchievements />
        <Careers />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;