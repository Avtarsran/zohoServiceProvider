import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/Hero-section'
import ServicesSection from '../components/Services-section'
import WhyUs from '../components/WhyUs-section'
import Contact from '../components/Contact-section'

const HomePage = () => {
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
