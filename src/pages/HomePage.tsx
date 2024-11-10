import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/Hero-section'
import ServicesSection from '../components/Services-section'
import WhyUs from '../components/WhyUs-section'
import Contact from '../components/Contact-section'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]); 
  return (
    <div className=''>
    <Header></Header>
    <HeroSection></HeroSection>
    <ServicesSection></ServicesSection>
    <WhyUs></WhyUs>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  )
}

export default HomePage
