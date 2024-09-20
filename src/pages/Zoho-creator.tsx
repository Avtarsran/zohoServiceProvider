import { useState, useEffect } from 'react';
import ContactForm from '../components/Contact-services';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CreatorFront = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true)
  }, []);

  return (
    <section
      className={`hero bg-cover bg-center h-screen opacity-0 transform translate-y-5 transition-all duration-1000 ease-in ${
        show ? 'opacity-100' : ''
      }`}
      id="creatorFront"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://img.freepik.com/premium-photo/creative-google-images-perfect-your-projects_1199394-213064.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Zoho Creator Services</h1>
            <p className="text-2xl">
              Zoho Creator is a cloud-based platform that allows businesses to build custom applications. It offers
              seamless integration, mobility, scalability, and robust security measures to protect your data.
              <br />
              Learn how our team of professional developers can create the perfect Zoho Creator Application for your
              business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CreatorWhy = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`container bg-gray-100 py-24 px-4 opacity-0 transform translate-y-5 transition-all duration-1000 ease-in ${
        show ? 'opacity-100' : ''
      }`}
      id="creatorWhy"
    >
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Zoho Creator?</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 transform hover:translate-y-5 transition-all duration-400 ease-in">
          <div className="flex justify-center items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">Customization</h2>
          <p className="text-gray-600">
            Zoho Creator allows you to build custom applications tailored to your business needs without needing
            extensive coding knowledge.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 transform hover:translate-y-5 transition-all duration-400 ease-in">
          <div className="flex justify-center items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L 7.5 4.5v1.409l 4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">Automation</h2>
          <p className="text-gray-600">
            It enables you to automate business processes, reducing manual work and increasing efficiency.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 transform hover:translate-y-5 transition-all duration-400 ease-in">
          <div className="flex justify-center items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">Integration</h2>
          <p className="text-gray-600">
            Zoho Creator seamlessly integrates with other Zoho products and various third-party applications, ensuring
            smooth data flow across different platforms.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-lg shadow-md p-6 transform hover:translate-y-5 transition-all duration-400 ease-in">
          <div className="flex justify-center items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">Mobility</h2>
          <p className="text-gray-600">
            With its mobile app, you can manage your applications on the go, making it easier for remote or field work.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 transform hover:translate-y-5 transition-all duration-400 ease-in">
          <div className="flex justify-center items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Security</h2>
          <p className="text-gray-600">
            Zoho takes data security seriously and provides robust security measures including strong encryption, 2FA, IP
            restrictions, and audit logs.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 transform hover:translate-y-5 transition-all duration-400 ease-in">
          <div className="flex justify-center items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Scalability</h2>
          <p className="text-gray-600">
            As your business grows, Zoho Creator can easily adapt and scale with your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

const CreatorTestimonials1 = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setShow(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`grid grid-cols-5 my-12 opacity-0 transform translate-y-5 transition-all duration-1000 ease-in ${
        show ? 'opacity-100' : ''
      }`}
      id="creatorTestimonials1"
    >
      <div className="col-span-3 flex items-center justify-center">
        <img
          src="https://img.freepik.com/premium-photo/interactive-recruitment-dashboard-displaying-candidate-progress-hiring-metrics_1327465-1492.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid"
          alt="just an image"
        />
      </div>
      <div className="p-4 mt-8 col-span-2 flex items-center justify-center flex-col">
        <div className="bg-white rounded-lg shadow-md p-4 transform hover:translate-y-5 transition-all duration-400 ease-in">
          <h2 className="text-sm font-bold mb-4">
            "What the ElephantTechLabs team did with this is incredible... We take it for granted now, but just one year
            ago we had the most ridiculous process for completing our patient's orders."
          </h2>
          <div className="flex flex-col lg:flex-row items-center mt-4">
            <img
              src="https://img.freepik.com/premium-photo/man-with-glasses-gray-suit-with-white-shirt-gray-jacket_1308157-214466.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid"
              alt="Stephen Watterson"
              className="rounded-full w-10 h-10 mr-4"
            />
            <p className="text-gray-700 font-bold">STEPHEN WATTERSON</p>
          </div>
          <p className="text-gray-500 text-sm mt-2">Pediatric HeadShape Clinic - COO / GM</p>
        </div>
      </div>
    </div>
  );
};

const CreatorTestimonials2 = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1100) {
        setShow(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`grid grid-cols-5 opacity-0 transform translate-y-5 transition-all duration-1000 ease-in ${
        show ? 'opacity-100' : ''
      } mb-12`}
      id="creatorTestimonials2"
    >
      <div className="col-span-3 flex items-center justify-center">
        <img
          src="https://img.freepik.com/free-vector/dashboard-user-panel_23-2148397663.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid"
          alt="just an image"
        />
      </div>
      <div className="p-4 mt-8 col-span-2 flex flex-col justify-center items-center">
        <div className="bg-white rounded-lg shadow-md p-4 transform hover:translate-y-5 transition-all duration-400 ease-in">
          <h2 className="text-sm font-bold mb-4">
            "What the ElephantTechLabs team did with this is incredible... We take it for granted now, but just one year
            ago we had the most ridiculous process for completing our patient's orders."
          </h2>
          <div className="flex flex-col lg:flex-row items-center mt-4">
            <img
              src="https://img.freepik.com/premium-photo/man-with-glasses-gray-suit-with-white-shirt-gray-jacket_1308157-214466.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid"
              alt="Stephen Watterson"
              className="rounded-full w-10 h-10 mr-4"
            />
            <p className="text-gray-700 font-bold">STEPHEN WATTERSON</p>
          </div>
          <p className="text-gray-500 text-sm mt-2">Pediatric HeadShape Clinic - COO / GM</p>
        </div>
      </div>
    </div>
  );
};



const CreatorSerivces = () => {
  return (
    <div className=''>
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
        <div className='grid gird-cols-1 lg:grid-cols-5'>
            <div className="cols-span-1 lg:col-span-3">
            <CreatorFront />
      <CreatorWhy></CreatorWhy>
      <CreatorTestimonials1>
      </CreatorTestimonials1>
      <CreatorTestimonials2></CreatorTestimonials2>
            </div>
            <div className='col-span-1 lg:col-span-2'><ContactForm></ContactForm></div>
        </div>
      <Footer></Footer>
    </div>
  );
};

export default CreatorSerivces;
