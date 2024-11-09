import { useLocation } from "react-router-dom";
import Contact from "../components/Contact-section";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceCard from "../subComponents/ServiceCard";
import ServiceCard2 from "../subComponents/ServiceCard2";
import { useEffect } from "react";

const ServicePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      console.log(elementId)
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]); 
  return (
    <div>
      <Header></Header>
      <div className="flex justify-center items-center flex-col">
        <ServiceCard
          id={"zoho-implementaion"}
          h1text={"Zoho CRM "}
          spantext={"Implementation"}
          tagline={"Build Stronger Customer Relationships with Zoho CRM"}
          description={
            "Zoho CRM is designed to help you manage customer relationships more effectively. Whether you need help setting up your CRM from scratch or improving an existing system, we provide end-to-end implementation services that align with your business goals"
          }
          btntext={"Get Started with Zoho CRM"}
          keypoints={[
            {
              title: "Customization",
              description:
                "Customization of modules, fields, and workflows to match your unique sales process",
              number: 1,
            },
            {
              title: "Integration",
              description:
                "Integration with third-party tools to create a unified system.",
              number: 2,
            },
            {
              title: "Automation",
              description:
                "Automation of routine tasks like follow-ups, lead scoring, and email marketing.",
              number: 3,
            },
            {
              title: "Support",
              description:
                "Ongoing support and training to maximize CRM usage.",
              number: 4,
            },
          ]}
        ></ServiceCard>

        <ServiceCard2
          h1text={" Zoho One "}
          id={
            "zoho-solutions"
          }
          spantext={"Solutions"}
          tagline={"The All-in-One Business Operating System"}
          description={
            "Zoho One gives you access to over 40 integrated applications, covering everything from sales, marketing, and support to finance, HR, and analytics. Our team specializes in implementing Zoho One to help you maximize efficiency across your entire business."
          }
          btntext={"The All-in-One Business Operating System"}
          keypoints={[
            {
              title: "Data Flow",
              description:
                "Seamless integration between all Zoho apps, ensuring smooth data flow",
              number: 1,
            },
            {
              title: "Management",
              description:
                "Centralized management of all business functions, from sales and marketing to HR and finance",
              number: 2,
            },
            {
              title: "Collaboration",
              description:
                "Enhanced collaboration with tools like Zoho Projects, Zoho People, and Zoho Books.",
              number: 3,
            },
            {
              title: "Custom Integration",
              description:
                "Custom configuration and integration with your existing systems.",
              number: 4,
            },
          ]}
        ></ServiceCard2>

        <ServiceCard
          h1text={"Zoho Creator "}
          id={"zoho-creator"}
          spantext={"Solutions"}
          tagline={"Build Custom Apps and Internal Tools with Zoho Creator"}
          description={
            "Zoho Creator is a powerful low-code platform that allows you to build custom applications without the complexities of traditional development. We leverage Zoho Creator to create scalable internal tools, self-service portals, and mission-critical systems, tailored specifically for your business."
          }
          btntext={"Create Custom Apps with Zoho Creator"}
          keypoints={[
            {
              title: "Internal Tools",
              description:
                "Build scalable internal tools to simplify processes, automate recurring tasks, create approval workflows, track items, and boost employee engagement.",
              number: 1,
            },
            {
              title: "Portals",
              description:
                "Build self-service portals that can help customers, vendors, and business partners with a single point of access to your products, services, and information.",
              number: 2,
            },
            {
              title: "Core Systems",
              description:
                "Build mission-critical core systems tailored to your business needs without the challenges of traditional development or the limitations of off-the-shelf solutions.",
              number: 3,
            },
            {
              title: "Extend Applications",
              description:
                "Supercharge your existing systems, whether it’s a Zoho application or a third-party app, to create solutions tailored to your unique use-cases.",
              number: 4,
            },
          ]}
        ></ServiceCard>

        <ServiceCard2
          h1text={" Zoho + Generative "}
          id={"zoho-generative"}
          spantext={"AI Integration"}
          tagline={
            "Enhance Zoho with Generative AI – AI-Powered Workflows and Automations"
          }
          description={
            "Integrate Zoho apps with powerful Generative AI systems like ChatGPT to supercharge your workflows, enhance customer interactions, and automate repetitive tasks. Our AI integration services help you use the latest AI technologies to boost productivity and drive innovation."
          }
          btntext={"Boost Your Business with AI"}
          keypoints={[
            {
              title: "Customer Support",
              description:
                "Automate customer support by integrating AI-powered chatbots with Zoho CRM or Desk.",
              number: 1,
            },
            {
              title: "Zoho Analytics",
              description:
                "Generate intelligent reports and insights with AI-assisted analytics in Zoho Analytics.",
              number: 2,
            },
            {
              title: "Marketing",
              description:
                "Leverage AI to create personalized email marketing campaigns and sales outreach strategies.",
              number: 3,
            },
            {
              title: "AI Integration",
              description:
                "Enhance your customer engagement by integrating AI with your sales and support systems.",
              number: 4,
            },
          ]}
        ></ServiceCard2>

        <div className="flex flex-col my-16 justify-center items-center">
          <div id="moreServices">
            <div className="text-2xl md:text-3xl mx-3 text-center font-semibold">
              From Core to Custom: Elevating Your CRM with Additional Expertise
            </div>
          </div>
        </div>

        <ServiceCard
          h1text={"Zoho "}
          id={"zoho-analytics"}
          spantext={"Analytics & Reporting"}
          tagline={"Make Data-Driven Decisions with Zoho Analytics"}
          description={
            "With Zoho Analytics, you can turn your data into actionable insights. We help you create customized reports and interactive dashboards to track key performance metrics across your business, enabling better decision-making."
          }
          btntext={"Enhance Your Analytics"}
          keypoints={[
            {
              title: "Import Data",
              description:
                "Data import from multiple sources, including third-party apps, databases, and spreadsheets.",
              number: 1,
            },
            {
              title: "Creation",
              description:
                "Creation of dynamic dashboards with real-time data.",
              number: 2,
            },
            {
              title: "Advanced Analytics",
              description:
                "Advanced analytics with predictive forecasting and trend analysis.",
              number: 3,
            },
            {
              title: "Reports",
              description:
                "Automated reports sent to your team on a regular basis.",
              number: 4,
            },
          ]}
        ></ServiceCard>

        <ServiceCard2
          h1text={" Zoho "}
          id={"zoho-integration"}
          spantext={"Integration Services"}
          tagline={"Seamlessly Integrate Zoho with Your Existing Tools"}
          description={
           "We know that businesses often use a combination of different tools. Our Zoho Integration Services ensure your Zoho apps work seamlessly with third-party platforms like Salesforce, QuickBooks, Shopify, and more, so you can manage everything from one place."}
          btntext={"Start Integrating Your Systems"}
          keypoints={[
            {
              title: "Integration",
              description:
                "Integration of Zoho apps with existing systems and third-party software.",
              number: 1,
            },
            {
              title: "Custom Api",
              description:
                "Custom API development for complex workflows.",
              number: 2,
            },
            {
              title: "Migration",
              description:
                "Smooth data migration from legacy systems to Zoho apps.",
              number: 3,
            },
            {
              title: "Monitoring",
              description:
                "Continuous monitoring and troubleshooting to ensure optimal performance.",
              number: 4,
            },
          ]}
        ></ServiceCard2>

        <ServiceCard
          h1text={"Zoho "}
          id={"zoho-training"}
          spantext={"Training & Support"}
          tagline={"Empower Your Team with Expert Zoho Training"}
          description={
           "We provide hands-on training for your team to ensure everyone knows how to make the most of Zoho’s powerful tools. From basic CRM navigation to advanced feature use, we’ll equip your team with the skills they need."
          }
          btntext={"Get Zoho Training"}
          keypoints={[
            {
              title: "Training",
              description:
                "Tailored training sessions for different departments and roles.",
              number: 1,
            },
            {
              title: "Documentation",
              description:
                "Comprehensive documentation and user guides.",
              number: 2,
            },
            {
              title: "Support",
              description:
                "Ongoing support with troubleshooting and optimization.",
              number: 3,
            },
            {
              title: "Workshop",
              description:
                "Regular updates and workshops to keep your team up to date.",
              number: 4,
            },
          ]}
        ></ServiceCard>
        <section
        className={` bg-white text-[#303841] text-center my-12 transition-all duration-1000 ease-in`}
        id="aboutContact"
      >
        <h2 className="text-3xl font-bold mb-4">
        Let’s Work Together!
        </h2>
        <p className="text-lg mb-8">
        Ready to take your business to the next level? Contact us today to learn how we can help you unlock the power of Zoho.
        </p>
        
      </section>

      </div>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default ServicePage;
