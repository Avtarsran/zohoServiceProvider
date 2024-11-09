import React, { useEffect, useState } from 'react';
import Card from '../subComponents/Card';
import FeaturesSection from './Features-section';

const ServicesSection: React.FC = () => {
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = 300;
      if (window.scrollY > triggerHeight && !hasTriggered) {
        setHasTriggered(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasTriggered]);

  return (
    <div
      className={`flex bg-gray-100 flex-col items-center mt-24 transition-all duration-1000 ease-out ${hasTriggered ? '' : 'opacity-0 translate-y-5'}`}
      id="serviceSection"
      style={{ paddingTop: '2rem', paddingBottom: '3rem'}}
    >
      <div className="text-3xl font-semibold text-[#3a4750]" id="service-section">
        Our Services
      </div>

      <div className="flex flex-col md:flex-col lg:flex-row justify-between lg:justify-evenly w-full my-10 items-center ">
        {/* Card 1 */}
        <Card img="https://img.freepik.com/free-vector/content-management-system-flat_23-2148807863.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid" title='Zoho CRM Implementation' description='As a Zoho Partner, we are here to simplify your life and build systems that fit YOUR growing business needs' toLink="/services#zohoImplementation"></Card>

        

        {/* Card 2 */}
        <Card img="https://img.freepik.com/free-vector/online-banking-concept-illustration_114360-17345.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid" title=' Zoho One Solutions' description='Professional back office accounting services catered to your individual business needs.' toLink="/services#zohoSolutions"></Card>

        

        {/* Card 3 */}
        <Card img='https://img.freepik.com/free-vector/qa-engineer-composition-with-programming-coding-symbols-flat-vector-illustration_1284-78159.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid' title='Zoho Creator Solutions' description='Learn how our team of skilled developers can create the perfect Zoho Creator Application for your business.' toLink="/services#zohoCreator"></Card>
      

        {/* Card 4 */}
        <Card img='https://img.freepik.com/free-vector/call-center-helpdesk-concept-with-support-symbols-isometric-vector-illustration_1284-69102.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid' title=' Zoho + Generative AI Integration' description='Ongoing support to keep your systems running smoothly and efficiently.' toLink="/services#zohoGenerative"></Card>
        
      </div>
      <FeaturesSection></FeaturesSection>
    </div>
  );
};

export default ServicesSection;
