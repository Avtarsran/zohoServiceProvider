import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  const [showSections, setShowSections] = useState({
    approach: false,
    quote: false,
    values: false,
    team: false,
    journey: false,
    clients: false,
    contact: false,
  });
  const [showFront, setShowFront] = useState({
    header: false,
    who: false,
  });

  const handleScroll = () => {
    const scrollY = window.scrollY;

    setShowSections((prev) => ({
      ...prev,
      approach: scrollY > 500,
      quote: scrollY > 750,
      values: scrollY > 950,
      team: scrollY > 1250,
      journey: scrollY > 1650,
      clients: scrollY > 2050,
      contact: scrollY > 2450,
    }));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setShowFront((prev) => ({
      ...prev,
      header: true,
      who: true,
    }));
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header></Header>
      <header
        className={`text-center py-16 bg-white transition-all duration-1000 ease-in ${
          showFront.header
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
      >
        <h1 className="text-4xl font-bold mb-2 text-[#303841]">
          Empowering Small Businesses with Seamless Zoho CRM Solutions
        </h1>
        <p className="text-lg text-[#303841]">
          Automating Tasks, Driving Growth, and Enhancing Productivity for
          Modern Businesses
        </p>
      </header>

      <section
        className={`container mx-auto px-6 py-12 lg:grid lg:grid-cols-2 lg:gap-12 text-[#303841] transition-all duration-1000 ease-in ${
          showFront.who
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
        id="aboutWho"
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg mb-6">
            We are a dedicated team of CRM professionals, specializing in{" "}
            <strong>Zoho CRM solutions</strong> for small businesses. Our
            mission is to help organizations automate tasks, manage customer
            relationships efficiently, and enhance their overall productivity by
            leveraging Zoho's powerful features.
          </p>

          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-lg">
            From <strong>CRM setup and configuration</strong> to{" "}
            <strong>custom workflows</strong> and <strong>integrations</strong>,
            we provide tailored solutions to suit your unique business needs.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/brainstorming-concept-landing-page_23-2148298375.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid"
            alt="CRM Team"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section
        className={`bg-white py-12 text-[#303841] transition-all duration-1000 ease-in my-12 ${
          showSections.approach
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
        id="aboutApproach"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-[#303841]">
              <span className="text-5xl mb-4 inline-block">🛠️</span>
              <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
              <p>Custom Zoho CRM setups designed to meet your unique needs.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-[#303841]">
              <span className="text-5xl mb-4 inline-block">🎯</span>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p>Certified Zoho CRM experts ready to assist with any issues.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-[#303841]">
              <span className="text-5xl mb-4 inline-block">📈</span>
              <h3 className="text-xl font-semibold mb-2">
                Scalable for Growth
              </h3>
              <p>
                CRM solutions that grow with your business, ensuring long-term
                value.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-[#303841]">
              <span className="text-5xl mb-4 inline-block">🤝</span>
              <h3 className="text-xl font-semibold mb-2">
                Client-Focused Strategy
              </h3>
              <p>We ensure the CRM aligns with your business goals.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`text-center py-16 bg-white transition-all duration-1000 ease-out ${
          showSections.quote
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5"
        }`}
        id="aboutQuote"
      >
        <blockquote className="text-2xl font-semibold italic text-white bg-[#303841] p-6 rounded-lg mx-auto max-w-4xl">
          “To help businesses automate tasks, streamline operations, and focus
          on growth by providing efficient, user-friendly Zoho CRM solutions
          that evolve with their needs.”
        </blockquote>
      </section>

      <section
        className={`container mx-auto px-6 py-12 bg-white text-[#303841] my-12 transition-all duration-1000 ease-in ${
          showSections.values
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
        id="aboutValues"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-[#303841]">
            <span className="text-5xl mb-4 inline-block">🌟</span>
            <h3 className="text-xl font-semibold mb-2">Client Success</h3>
            <p>We go the extra mile to ensure CRM solutions work seamlessly.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-[#303841]">
            <span className="text-5xl mb-4 inline-block">🤝</span>
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p>
              Transparent and honest dealings, building trust with our clients.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-[#303841]">
            <span className="text-5xl mb-4 inline-block">💡</span>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p>Continuously enhancing your CRM, keeping your business ahead.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-[#303841]">
            <span className="text-5xl mb-4 inline-block">💬</span>
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p>Working closely with clients to create custom CRM solutions.</p>
          </div>
        </div>
      </section>

      <section
        className={`container mx-auto px-6 py-12 bg-gray-300 text-[#303841] my-12 transition-all duration-1000 ease-in ${
          showSections.team
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
        id="aboutTeam"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-slate-100 rounded-lg shadow-md text-[#303841]">
            <img
              src="https://img.freepik.com/premium-photo/man-with-glasses-gray-suit-with-white-shirt-gray-jacket_1308157-214466.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid"
              alt="Team Member"
              className="rounded-full h-32 w-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p>CRM Specialist</p>
          </div>
          <div className="p-6 bg-slate-100 rounded-lg shadow-md text-[#303841]">
            <img
              src="https://img.freepik.com/premium-photo/man-with-glasses-gray-suit-with-white-shirt-gray-jacket_1308157-214466.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid"
              alt="Team Member"
              className="rounded-full h-32 w-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p>Business Analyst</p>
          </div>
          <div className="p-6 bg-slate-100 rounded-lg shadow-md text-[#303841]">
            <img
              src="https://img.freepik.com/premium-photo/man-with-glasses-gray-suit-with-white-shirt-gray-jacket_1308157-214466.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid"
              alt="Team Member"
              className="rounded-full h-32 w-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Michael Lee</h3>
            <p>Technical Lead</p>
          </div>
        </div>
      </section>

      <section
        className={`container mx-auto px-6 py-12 text-center transition-all duration-1000 ease-in ${
          showSections.journey
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
        id="aboutJourney"
      >
        <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
        <p className="text-lg mb-6">
          From our humble beginnings to becoming a leading Zoho CRM service
          provider, our journey has been fueled by our commitment to excellence
          and client satisfaction.
        </p>
      </section>

      <section
        className={`container mx-auto px-6 py-12 text-center bg-gray-300 text-[#303841] transition-all duration-1000 ease-in ${
          showSections.clients
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
        id="aboutClients"
      >
       <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
            <div className="relative">
                <div className="absolute inset-0 bg-gray-200 bg-opacity-20"></div>
                <div className="relative">
                    <div className="flex flex-col space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="https://img.freepik.com/premium-photo/man-with-glasses-gray-suit-with-white-shirt-gray-jacket_1308157-214466.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid"
                                alt="Client 1" className="mx-auto w-44 h-44 mb-4 rounded-full" />
                            <blockquote className="italic text-lg">“Their Zoho CRM setup transformed our sales process,
                                making it easier to manage and track leads. They’re a game-changer!”</blockquote>
                            <p className="mt-4 text-gray-600">– Client Name</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="https://img.freepik.com/premium-photo/man-with-glasses-gray-suit-with-white-shirt-gray-jacket_1308157-214466.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid"
                                alt="Client 2" className="mx-auto w-44 h-44 mb-4 rounded-full" />
                            <blockquote className="italic text-lg">“Thanks to their expert team, we’ve saved countless hours
                                on administrative tasks. Their CRM solutions are intuitive and scalable.”</blockquote>
                            <p className="mt-4 text-gray-600">– Client Name</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section
        className={`py-16 bg-white text-[#303841] text-center my-12 transition-all duration-1000 ease-in ${
          showSections.contact
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
        id="aboutContact"
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to streamline your business?
        </h2>
        <p className="text-lg mb-8">
          Get in touch with us today and see how our Zoho CRM services can
          transform the way you work.
        </p>
        <div className="cursor-pointer flex flex-col mx-auto border-4 rounded-lg w-52 border-white transition ease-in-out delay-150 hover:border-red-200 duration-150">
          <div className="get-quote-btn px-3 py-2 bg-[#303841] rounded-lg border-4 border-white text-white transition ease-in-out delay-150 text-center hover:bg-red-500 duration-150">
            Contact Us
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default About;
