import { useEffect, useRef } from 'react';
import ContactForm from '../components/Contact-services';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Implementation = () => {
    const implementationFrontRef = useRef<HTMLDivElement>(null);
    const implementationContactRef = useRef<HTMLDivElement>(null);
    const implementationFeaturesRef = useRef<HTMLDivElement>(null);
    const implementationBenefitsRef = useRef<HTMLDivElement>(null);
    const implementationTestimonialsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Show the implementation front and contact sections on load
        if (implementationFrontRef.current) {
            implementationFrontRef.current.classList.remove('opacity-0', 'translate-y-5');
        }
        if (implementationContactRef.current) {
            implementationContactRef.current.classList.remove('opacity-0', 'translate-y-5');
        }

        // Scroll event listeners for other sections
        const handleScroll = () => {
            if (implementationFeaturesRef.current && window.scrollY > 300) {
                implementationFeaturesRef.current.classList.remove('opacity-0', 'translate-y-5');
            }
            if (implementationBenefitsRef.current && window.scrollY > 1200) {
                implementationBenefitsRef.current.classList.remove('opacity-0', 'translate-y-5');
            }
            if (implementationTestimonialsRef.current && window.scrollY > 1600) {
                implementationTestimonialsRef.current.classList.remove('opacity-0', 'translate-y-5');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
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
                        ref={implementationFrontRef}
                        className="hero bg-cover bg-center h-screen opacity-0 transform translate-y-5 transition-all duration-1000 ease-in"
                        style={{
                            background: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://img.freepik.com/free-vector/flat-design-cms-landing-page-template_23-2148825193.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="container mx-auto p-4">
                            <div className="flex justify-center items-center h-full">
                                <div className="text-center">
                                    <h1 className="text-4xl font-bold">Transform Your Business with Our Zoho Implementation Services</h1>
                                    <p className="text-2xl">Streamline Your Operations, Amplify Your Growth</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section
                        ref={implementationFeaturesRef}
                        className="opacity-0 transform translate-y-5 transition-all duration-1000 ease-in"
                        id="implementationFeatures"
                    >
                        <div className="py-12 bg-[#d3d6db] text-white flex flex-col items-center justify-center">
                            {[
                                { emoji: '💻', text: 'Sometimes it is difficult to know where to begin when trying to set up the software you need to run your business; CRM, Finance, HR, Marketing...where do you start? We help you save time and money by giving you the advice you need to quickly and properly implement your Zoho Project.' },
                                { emoji: '🔨', text: 'After a deep discovery process where we get to know about your business and your technology needs, we will implement the Zoho Solution that delivers the platform you need to run your business. From just 1 Zoho application to the over 40 in their business suite, we have the expertise to get you up and running.' },
                                { emoji: '🤝', text: 'After you are up and running our team of experts will help manage and support your organization\'s Zoho platform and provide you with ongoing support and customization to make sure that your technology investment is delivering the results you need, and that your employees are productive.' },
                                { emoji: '🎯', text: 'Throughout the course of our engagement, our team will record customized videos for you to provide training on both the configuration, and the usage of your Zoho implementation. After your system is configured, we offer real-time training sessions for your current team to ensure they can start working effectively right away.' },
                            ].map((feature, index) => (
                                <div key={index} className="rounded-md bg-[#3a4750] transform hover:translate-y-5 transition-all duration-400 ease-in my-3 shadow-md p-4 w-3/4">
                                    <div className="flex justify-center mb-4">
                                        <div className="relative text-4xl">
                                            {feature.emoji}
                                        </div>
                                    </div>
                                    <p className="text-white">{feature.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section
                        ref={implementationBenefitsRef}
                        className="features bg-white py-20 opacity-0 transform translate-y-5 transition-all duration-1000 ease-in"
                        id="implementationBenefits"
                    >
                        <div className="container mx-auto p-4">
                            <div className="flex flex-wrap justify-center">
                                {[
                                    { icon: 'fas fa-cloud-upload-alt', title: 'Effortless Data Migration', text: 'Seamlessly migrate your data to Zoho, ensuring zero downtime and minimal disruption' },
                                    { icon: 'fas fa-puzzle-piece', title: 'Customized Implementation', text: 'Our experts will tailor a customized implementation plan to meet your unique business needs' },
                                    { icon: 'fas fa-question-circle', title: 'Ongoing Support and Training', text: 'Get comprehensive support and training to ensure a smooth transition and maximize your ROI' },
                                ].map((benefit, index) => (
                                    <div key={index} className="w-full md:w-1/2 xl:w-1/3 p-4">
                                        <div className="bg-[#d3d6db] transform hover:translate-y-5 transition-all duration-400 ease-in shadow-md p-4 rounded">
                                            <i className={`${benefit.icon} text-4xl text-gray-600`}></i>
                                            <h2 className="text-2xl font-bold">{benefit.title}</h2>
                                            <p className="text-gray-600">{benefit.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section
                        ref={implementationTestimonialsRef}
                        className="testimonials bg-gray-100 py-20 opacity-0 transform translate-y-5 transition-all duration-1000 ease-in"
                        id="implementationTestimonials"
                    >
                        <div className="container mx-auto p-4">
                            <div className="flex flex-wrap justify-center">
                                {[
                                    { name: 'John', role: 'CEO of XYZ Inc.', testimonial: '"Zoho implementation services helped us increase our sales by 25%!"', img: 'https://img.freepik.com/premium-photo/man-with-glasses-gray-suit-with-white-shirt-gray-jacket_1308157-214466.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid' },
                                    { name: 'Emily', role: 'Marketing Manager at ABC Corp.', testimonial: '"The team was very knowledgeable and helpful throughout the implementation process"', img: 'https://img.freepik.com/premium-photo/man-with-glasses-gray-suit-with-white-shirt-gray-jacket_1308157-214466.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid' },
                                ].map((testimonial, index) => (
                                    <div key={index} className="w-full md:w-1/2 xl:w-1/2 p-4">
                                        <div className="bg-white shadow-md p-4 rounded transform hover:translate-y-5 transition-all duration-400 ease-in">
                                            <img src={testimonial.img} alt={testimonial.name} className="h-12 w-12 rounded-full" />
                                            <p className="text-gray-600">{testimonial.testimonial}</p>
                                            <p className="text-gray-600">- {testimonial.name}, {testimonial.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
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

export default Implementation;
