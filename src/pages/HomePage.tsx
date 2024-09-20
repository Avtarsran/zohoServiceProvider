import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/Hero-section'
import ServicesSection from '../components/Services-section'
import WhyUs from '../components/WhyUs-section'
import Partners from '../components/Partners-section'
import Quotes from '../components/Quotes-section'
import Contact from '../components/Contact-section'
import FeaturesSection from '../components/Features-section'

const HomePage = () => {
  return (
    <>
    <Header></Header>
    <HeroSection></HeroSection>
    <FeaturesSection></FeaturesSection>
    <ServicesSection></ServicesSection>
    <WhyUs></WhyUs>
    <Partners></Partners>
    <Quotes></Quotes>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default HomePage
