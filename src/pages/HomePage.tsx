import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/Hero-section'
import ServicesSection from '../components/Services-section'
import WhyUs from '../components/WhyUs-section'
import Quotes from '../components/Quotes-section'
import Contact from '../components/Contact-section'
import FeaturesSection from '../components/Features-section'

const HomePage = () => {
  return (
    <div className=''>
    <Header></Header>
    <HeroSection></HeroSection>
    <FeaturesSection></FeaturesSection>
    <ServicesSection></ServicesSection>
    <WhyUs></WhyUs>
    <Quotes></Quotes>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  )
}

export default HomePage
