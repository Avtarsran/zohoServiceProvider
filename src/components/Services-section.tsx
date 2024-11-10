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
        <Card img="https://img.freepik.com/free-vector/content-management-system-flat_23-2148807863.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid" title='Zoho CRM Implementation' description='Helping businesses manage their customer relationships more effectively with customized Zoho CRM setups.' toLink="/services#zohoImplementaion"></Card>

        

        {/* Card 2 */}
        <Card img="https://img.freepik.com/free-vector/online-banking-concept-illustration_114360-17345.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid" title=' Zoho One Solutions' description=' Implementing Zoho’s all-in-one suite of applications to streamline operations across all departments.' toLink="/services#zohoSolutions"></Card>

        

        {/* Card 3 */}
        <Card img='https://img.freepik.com/free-vector/qa-engineer-composition-with-programming-coding-symbols-flat-vector-illustration_1284-78159.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid' title='Zoho Creator Solutions' description='Building custom internal tools, portals, and mission-critical systems tailored to specific business needs.' toLink="/services#zohoCreator"></Card>
      

        {/* Card 4 */}
        <Card img='https://img.freepik.com/free-vector/call-center-helpdesk-concept-with-support-symbols-isometric-vector-illustration_1284-69102.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid' title=' Zoho + Gen AI Integration' description='Harnessing the power of AI to automate workflows, enhance customer interactions, and drive innovation.' toLink="/services#zohoGenerative"></Card>
        
      </div>
      <FeaturesSection></FeaturesSection>
    </div>
  );
};

export default ServicesSection;
