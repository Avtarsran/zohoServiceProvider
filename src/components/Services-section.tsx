import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

      <div className="flex flex-col md:flex-col lg:flex-row justify-between lg:justify-evenly w-full my-10 items-center lg:items-stretch">
        {/* Card 1 */}
        <div
          className="max-w-sm w-full mx-1 my-5 lg:my-0 bg-white border border-gray-200 rounded-lg shadow transform hover:translate-y-5 transition-all duration-500 ease-out flex flex-col justify-between"
        >
          <Link to="/zoho-implementaion">
            <img
              className="rounded-t-lg"
              src="https://img.freepik.com/free-vector/content-management-system-flat_23-2148807863.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid"
              alt="Zoho Implementation"
            />
          </Link>
          <div className="p-5 flex-grow justify-between">
            <Link to="/zoho-implementaion">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                Zoho Consulting & Implementation
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700">
              As a Zoho Partner, we are here to simplify your life and build systems that fit YOUR growing business needs.
            </p>
          </div>
          <div className="p-5 flex justify-start">
            <div className="cursor-pointer border-4 rounded-lg border-white transition ease-in-out delay-150 hover:border-red-200 duration-150">
              <Link
                to="/zoho-implementaion"
                className="inline-flex items-center px-3 py-2 bg-[#303841] rounded-lg border-4 border-white text-white transition ease-in-out delay-150 text-center hover:bg-red-500 duration-150"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="max-w-sm w-full mx-1 my-5 lg:my-0 bg-white border border-gray-200 rounded-lg shadow transform hover:translate-y-5 transition-all duration-500 ease-out flex flex-col justify-between"
        >
          <Link to="/finance-services">
            <img
              className="rounded-t-lg"
              src="https://img.freepik.com/free-vector/online-banking-concept-illustration_114360-17345.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid"
              alt="Zoho Finance Services"
            />
          </Link>
          <div className="p-5 flex-grow">
            <Link to="/finance-services">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Zoho Finance Services</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700">
              Professional back office accounting services catered to your individual business needs.
            </p>
          </div>
          <div className="p-5 flex justify-start">
            <div className="cursor-pointer border-4 rounded-lg border-white transition ease-in-out delay-150 hover:border-red-200 duration-150">
              <Link
                to="/finance-services"
                className="inline-flex items-center px-3 py-2 bg-[#303841] rounded-lg border-4 border-white text-white transition ease-in-out delay-150 text-center hover:bg-red-500 duration-150"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="max-w-sm w-full mx-1 my-5 lg:my-0 bg-white border border-gray-200 rounded-lg shadow transform hover:translate-y-5 transition-all duration-500 ease-out flex flex-col justify-between"
        >
          <Link to="/creator-services">
            <img
              className="rounded-t-lg"
              src="https://img.freepik.com/free-vector/qa-engineer-composition-with-programming-coding-symbols-flat-vector-illustration_1284-78159.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid"
              alt="Zoho Creator Services"
            />
          </Link>
          <div className="p-5 flex-grow">
            <Link to="/creator-services">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Zoho Creator Services</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700">
              Learn how our team of skilled developers can create the perfect Zoho Creator Application for your business.
            </p>
          </div>
          <div className="p-5 flex justify-start">
            <div className="cursor-pointer border-4 rounded-lg border-white transition ease-in-out delay-150 hover:border-red-200 duration-150">
              <Link
                to="/creator-services"
                className="inline-flex items-center px-3 py-2 bg-[#303841] rounded-lg border-4 border-white text-white transition ease-in-out delay-150 text-center hover:bg-red-500 duration-150"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="max-w-sm w-full mx-1 my-5 lg:my-0 bg-white border border-gray-200 rounded-lg shadow transform hover:translate-y-5 transition-all duration-500 ease-out flex flex-col justify-between"
        >
          <Link to="/support-maintainenece-services">
            <img
              className="rounded-t-lg"
              src="https://img.freepik.com/free-vector/call-center-helpdesk-concept-with-support-symbols-isometric-vector-illustration_1284-69102.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid"
              alt="Zoho Support and Maintenance"
            />
          </Link>
          <div className="p-5 flex-grow">
            <Link to="/support-maintainenece-services">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Zoho Support and Maintenance</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700">
              Ongoing support to keep your systems running smoothly and efficiently.
            </p>
          </div>
          <div className="p-5 flex justify-start">
            <div className="cursor-pointer border-4 rounded-lg border-white transition ease-in-out delay-150 hover:border-red-200 duration-150">
              <Link
                to="/support-maintainenece-services"
                className="inline-flex items-center px-3 py-2 bg-[#303841] rounded-lg border-4 border-white text-white transition ease-in-out delay-150 text-center hover:bg-red-500 duration-150"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
