import React, { useEffect, useState } from 'react';
import Card from '../subComponents/Card';

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
      className={`flex flex-col items-center mt-24 transition-all duration-1000 ease-out ${hasTriggered ? '' : 'opacity-0 translate-y-5'}`}
      id="serviceSection"
      style={{ paddingTop: '2rem', paddingBottom: '3rem', backgroundColor: '#f7f7f7' }}
    >
      <div className="text-3xl font-semibold text-[#3a4750]" id="service-section">
        Our Services
      </div>

      <div className="flex flex-col md:flex-col lg:flex-row justify-between lg:justify-evenly w-full my-10 items-strech">
        {/* Card 1 */}
        <Card img="https://img.freepik.com/free-vector/content-management-system-flat_23-2148807863.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid" title='Zoho Consulting & Implementation' description='As a Zoho Partner, we are here to simplify your life and build systems that fit YOUR growing business needs' toLink='/zoho-implementaion'></Card>

        

        {/* Card 2 */}
        <Card img="https://img.freepik.com/free-vector/online-banking-concept-illustration_114360-17345.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid" title='Zoho Finance Services' description='Professional back office accounting services catered to your individual business needs.' toLink='/finance-services'></Card>

        

        {/* Card 3 */}
        <Card img='https://img.freepik.com/free-vector/qa-engineer-composition-with-programming-coding-symbols-flat-vector-illustration_1284-78159.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid' title='Zoho Creator Services' description='Learn how our team of skilled developers can create the perfect Zoho Creator Application for your business.' toLink='/creator-services'></Card>
      

        {/* Card 4 */}
        <Card img='https://img.freepik.com/free-vector/call-center-helpdesk-concept-with-support-symbols-isometric-vector-illustration_1284-69102.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid' title='Zoho Support and Maintenance' description='Ongoing support to keep your systems running smoothly and efficiently.' toLink='/support-maintainenece-services'></Card>
        
      </div>
    </div>
  );
};

export default ServicesSection;
