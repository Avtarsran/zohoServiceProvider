import { useState, useEffect } from 'react';
import ContactForm from '../components/Contact-services';
import Footer from '../components/Footer';
import Header from '../components/Header';

const SupportPage = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);
  const [showCalltoaction, setShowCalltoaction] = useState(false);

  useEffect(() => {
      setShowHeader(true);
      setShowHero(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 270 && !showOverview) {
        setShowOverview(true);
      }
      if (scrollPosition > 770 && !showBenefits) {
        setShowBenefits(true);
      }
      if (scrollPosition > 1470 && !showTestimonials) {
        setShowTestimonials(true);
      }
      if (scrollPosition > 2070 && !showCalltoaction) {
        setShowCalltoaction(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header></Header>
      <style>
        {`
          .contactForm {
            position: sticky;
            top: 23%;
            z-index: 40;
          }
        `}
      </style>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="col-span-1 lg:col-span-3">
          {/* Header Section */}
          <header
            className={`bg-white py-4 my-12 transform transition-all duration-1000 ease-in ${showHeader ? '' : 'opacity-0 translate-y-5'}`}
            id="supportHeader"
          >
            <div className="container mx-auto p-4">
              <h1 className="text-3xl font-bold">Zoho Support and Maintenance Services</h1>
              <p className="text-lg text-gray-600">Expert Support for Your Zoho CRM Needs</p>
            </div>
          </header>

          {/* Hero Section */}
          <section
            className={`bg-cover bg-center h-screen transform transition-all duration-1000 ease-in ${showHero ? '' : 'opacity-0 translate-y-5'}`}
            id="supportHero"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://img.freepik.com/free-vector/call-center-technical-support-online-service-platform-idea-customer-service-clients-support-with-valuable-information-crm-vector-flat-illustration_613284-2992.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="container mx-auto p-4 pt-44">
              <h2 className="text-4xl font-bold text-black">
                Get the Most Out of Your Zoho CRM with Our Expert Support
              </h2>
              <p className="text-2xl text-black">
                Our team of experts provides top-notch support and maintenance services to ensure your Zoho CRM runs smoothly and efficiently
              </p>
            </div>
          </section>

          {/* Service Overview Section */}
          <section
            className={`bg-[#d3d6db] transform transition-all duration-1000 ease-in py-24 ${showOverview ? '' : 'opacity-0 translate-y-5'}`}
            id="supportOverview"
          >
            <div className="container bg-[#303841] transform hover:translate-y-5 transition-all duration-400 ease-in rounded w-5/6 mx-auto p-4">
              <h2 className="text-3xl font-bold text-slate-200">Overview of Our Zoho Support and Maintenance Services</h2>
              <p className="text-lg text-slate-300">
                Our Zoho support and maintenance services are designed to help you get the most out of your CRM system. Our team of experts provides 24/7 technical support, regular software updates, and customized solutions to meet your specific business needs. With our support, you can focus on growing your business while we handle the technical aspects of your Zoho CRM.
              </p>
            </div>
          </section>

          {/* Features and Benefits Section */}
          <section
            className={`bg-gray-100 transform transition-all duration-1000 ease-in py-24 ${showBenefits ? '' : 'opacity-0 translate-y-5'}`}
            id="supportBenefits"
          >
            <div className="container mx-auto p-4">
              <h2 className="text-3xl font-bold">Features and Benefits</h2>
              <div className="flex">
                <div className="w-full p-4">
                  <div className="bg-[#d3d6db] transform hover:translate-y-5 transition-all duration-400 ease-in shadow-md p-4 rounded">
                    <i className="fas fa-clock text-2xl text-orange-500" />
                    <h3 className="text-lg font-bold">24/7 Technical Support</h3>
                    <p className="text-gray-600">
                      Get instant support from our team of experts, available 24/7 to resolve any technical issues you may encounter.
                    </p>
                  </div>
                </div>
                <div className="w-full p-4">
                  <div className="bg-[#d3d6db] transform hover:translate-y-5 transition-all duration-400 ease-in shadow-md p-4 rounded">
                    <i className="fas fa-cog text-2xl text-orange-500" />
                    <h3 className="text-lg font-bold">Regular Software Updates</h3>
                    <p className="text-gray-600">
                      Stay up-to-date with the latest Zoho CRM features and security patches with our regular software updates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-full p-4">
                  <div className="bg-[#d3d6db] transform hover:translate-y-5 transition-all duration-400 ease-in shadow-md p-4 rounded">
                    <i className="fas fa-puzzle-piece text-2xl text-orange-500" />
                    <h3 className="text-lg font-bold">Customized Solutions</h3>
                    <p className="text-gray-600">
                      Our team of experts will work with you to develop customized solutions that meet your specific business needs.
                    </p>
                  </div>
                </div>
                <div className="w-full p-4">
                  <div className="bg-[#d3d6db] transform hover:translate-y-5 transition-all duration-400 ease-in shadow-md p-4 rounded">
                    <i className="fas fa-star text-2xl text-orange-500" />
                    <h3 className="text-lg font-bold">Priority Support</h3>
                    <p className="text-gray-600">
                      Get priority support for critical issues, ensuring that your business operations are not disrupted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section
            className={`bg-white py-24 transform transition-all duration-1000 ease-in ${showTestimonials ? '' : 'opacity -0 translate-y-5'}`}
            id="supportTestimonials"
          >
            <div className="container mx-auto p-4">
              <h2 className="text-3xl font-bold">What Our Clients Say</h2>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                  <div className="bg-gray-100 transform hover:translate-y-5 transition-all duration-400 ease-in shadow-md p-4 rounded">
                    <img
                      src="https://img.freepik.com/premium-photo/man-with-glasses-gray-suit-with-white-shirt-gray-jacket_1308157-214466.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid"
                      alt="Client 1"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <p className="text-lg text-gray-600">
                      "The support team has been incredibly responsive and helpful. They've gone above and beyond to ensure our Zoho CRM is running smoothly." - John Doe, CEO of XYZ Corporation
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                  <div className="bg-gray-100 transform hover:translate-y-5 transition-all duration-400 ease-in shadow-md p-4 rounded">
                    <img
                      src="https://img.freepik.com/premium-photo/man-with-glasses-gray-suit-with-white-shirt-gray-jacket_1308157-214466.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid"
                      alt="Client 2"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <p className="text-lg text-gray-600">
                      "The customized solutions provided by the support team have greatly improved our sales productivity. We couldn't be happier with the service!" - Jane Smith, Sales Manager of ABC Inc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section
            className={`bg-[#3a4750] transform transition-all duration-1000 ease-in py-24 ${showCalltoaction ? '' : 'opacity-0 translate-y-5'}`}
            id="supportCalltoaction"
          >
            <div className="container mx-auto text-slate-200 p-4">
              <h2 className="text-3xl font-bold">Get Started with Our Zoho Support and Maintenance Services</h2>
              <p className="text-lg mt-4">
                Contact us today to learn more about our Zoho support and maintenance services and how we can help your business thrive.
              </p>
            </div>
          </section>
        </div>
        <div className="col-span-1 lg:col-span-2 flex flex-col items-center">
          <ContactForm></ContactForm>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SupportPage;