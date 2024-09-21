import { useEffect, useRef } from "react";
import ContactForm from "../components/Contact-services";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FinanceServices = () => {
  const financeFrontRef = useRef<HTMLDivElement>(null);
  const financeContactRef = useRef<HTMLDivElement>(null);
  const financeFeaturesRef = useRef<HTMLDivElement>(null);
  const migrationServicesRef = useRef<HTMLDivElement>(null);
  const migrationOverviewRef = useRef<HTMLDivElement>(null);
  const migrationBenefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fadeInElements = [financeFrontRef, financeContactRef];
    fadeInElements.forEach((ref) => {
      if (ref.current) {
        ref.current.classList.remove("opacity-0", "translate-y-5");
      }
    });
  }, []);

  const triggerTransition = (height: number, ref: any) => {
    let triggered = false;

    const handleScroll = () => {
      if (triggered) return;
      if (window.scrollY > height) {
        ref.current.classList.remove("opacity-0", "translate-y-5");
        triggered = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  };

  useEffect(() => {
    triggerTransition(270, financeFeaturesRef);
    triggerTransition(800, migrationServicesRef);
    triggerTransition(1200, migrationOverviewRef);
    triggerTransition(1800, migrationBenefitsRef);
  }, []);

  return (
    <div className="">
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
          <section
            ref={financeFrontRef}
            className="hero bg-cover bg-center h-screen opacity-0 transform translate-y-5 transition-all duration-1000 ease-in"
            style={{
              background:
                "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://img.freepik.com/free-vector/online-banking-concept-illustration_114360-17345.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className=" h-full mx-auto p-4">
            <div className="flex justify-center items-center h-full">
            <div className="text-center">
                  <h1 className="text-4xl font-bold">Zoho Finance Services</h1>
                  <p className="text-2xl">
                    We offer a variety of professional back-office accounting
                    services catered to your individual business needs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            ref={financeFeaturesRef}
            className="container mx-auto bg-[#d3d6db] px-4 py-16 opacity-0 transform translate-y-5 transition-all duration-1000 ease-in"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Repeat this block for each service */}
              <ServiceCard
                title="Accounts Receivable"
                description="Assist with the automating and optimizing of clients and invoices. Receiving, posting, and tracking receivables."
              />
              <ServiceCard
                title="Accounts Payable"
                description="Assist with maintaining vendors. Receiving, posting, and tracking payables."
              />
              <ServiceCard
                title="Banking"
                description="Recording bank, credit card & loan transactions and reconciliation of accounts."
              />
              <ServiceCard
                title="Payroll"
                description="Help to find a payroll solution that fits your needs. Record journal entries and reconcile accounts."
              />
              <ServiceCard
                title="Reporting"
                description="Assist in the preparation of financial reports on a monthly, quarterly and/or annual basis. Preparation and tracking of 1099's."
              />
              <ServiceCard
                title="Training & Assistance"
                description="Will assist in training of staff and work closely with your accountant to provide clear work papers for tax returns and/or audits."
              />
            </div>
          </div>

          <div
            ref={migrationServicesRef}
            className="container mx-auto px-4 py-16 opacity-0 transform translate-y-5 transition-all duration-1000 ease-in"
          >
            <h1 className="text-3xl font-bold text-center mb-8">
              Migration Services
            </h1>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold mb-4">
                  Looking to migrate from QuickBooks Online to Zoho Books?
                </h2>
                <p className="text-lg mb-8">We can help.</p>
                <p className="text-lg font-bold">
                  <span className="underline decoration-green-500 decoration-2 underline-offset-2">
                    We can help.
                  </span>
                </p>
              </div>
              <div className="w-96">
                <img
                  src="https://img.freepik.com/free-vector/stock-exchange-data-concept_23-2148583923.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid"
                  alt="QuickBooks Logo"
                />
              </div>
            </div>
          </div>

          <section
            ref={migrationOverviewRef}
            className="bg-gray-100 py-24 opacity-0 transform translate-y-5 transition-all duration-1000 ease-in"
          >
            <div className="container mx-auto p-4">
              <h2 className="text-3xl font-bold">Our Migration Services</h2>
              <p className="text-lg text-gray-600 my-10">
                Our migration services are designed to help businesses like
                yours migrate to the cloud with ease. Our team of experts will
                work with you to assess your current infrastructure, develop a
                customized migration plan, and execute the migration with
                minimal disruption to your business.
              </p>
              <ul className="list-inside text-lg text-gray-600 list-none">
                <li> 📅 Assessment and planning</li>
                <li> 📊 Data migration and integration</li>
                <li> 🔩 Application migration and testing</li>
                <li> ☁️ Cloud infrastructure setup and configuration</li>
                <li> ⚡️ Post-migration support and optimization</li>
              </ul>
            </div>
          </section>

          <section
            ref={migrationBenefitsRef}
            className="bg-[#303841] py-24 opacity-0 transform translate-y-5 transition-all duration-1000 ease-in"
          >
            <div className="container mx-auto p-4">
              <h2 className="text-3xl mb-12 font-bold text-white">
                Benefits of Migration
              </h2>
              <div className="flex justify-center items-strech">
                <BenefitCard
                  title="Reduced Downtime"
                  description="Our expert migration services ensure minimal downtime, so you can focus on running your business."
                />
                <BenefitCard
                  title="Cost Savings"
                  description="Migrating to the cloud can help you reduce costs and increase ROI."
                />
              </div>
              <div className="flex justify-center items-strech">
                <BenefitCard
                  title="Enhanced Security"
                  description="Our migration services ensure that your data and applications are secure in the cloud."
                />
                <BenefitCard
                  title="Improved Scalability"
                  description="The cloud provides scalability and flexibility, so you can grow your business with confidence."
                />
              </div>
            </div>
          </section>
        </div>

        <div className="col-span-1 lg:col-span-2 flex flex-col items-center">
            <ContactForm/>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

interface card {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: card) => (
  <div className="bg-white transform hover:translate-y-5 transition-all duration-400 ease-in p-4 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const BenefitCard = ({ title, description }: card) => (
  <div className="bg-[#3a4750] transform hover:translate-y-5 transition-all duration-400 ease-in text-white p-4 rounded-lg my-5 shadow-lg mx-2 w-full">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p>{description}</p>
  </div>
);

export default FinanceServices;
