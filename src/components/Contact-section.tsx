import { useEffect, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isImgVisible, setIsImgVisible] = useState(false);

  const triggerHeight = 2100; // Change as needed
  const imgTriggerHeight = 2200; // Change as needed

  const handleScroll = () => {
    if (window.scrollY > triggerHeight && !isVisible) {
      setIsVisible(true);
    }
    if (window.scrollY > imgTriggerHeight && !isImgVisible) {
      setIsImgVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, isImgVisible]);

  return (
    <div
      className={`p-4 transition-all duration-1000 ease-out bg-gray-100 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      id="contact"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="picture-column col-span-2 flex flex-col rounded-md justify-center items-center">
          {/* Picture column */}
          <img
            src="https://img.freepik.com/premium-vector/email-marketing_1302918-1430.jpg?uid=R163239129&ga=GA1.1.215708907.1726218374&semt=ais_hybrid" // Update the image path accordingly
            alt="Contact"
            className={`w-full lg:w-3/4 h-3/4 rounded-md  lg:rounded-sm object-cover object-center transition-all duration-1000 ease-out ${
              isImgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            id="imgContact"
          />
        </div>
        <div className="text-column w-full flex flex-col justify-center items-center col-span-1">
          {/* Text and contact form column */}
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form className="w-3/4">
            <div className="form-group mb-4">
              <label htmlFor="name" className="block text-lg mb-2">Name:</label>
              <input type="text" id="name" name="name" className="w-full p-2 border border-gray-400 rounded" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email" className="block text-lg mb-2">Email:</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-gray-400 rounded" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="company" className="block text-lg mb-2">Company:</label>
              <input type="text" id="company" name="company" className="w-full p-2 border border-gray-400 rounded" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="website" className="block text-lg mb-2">Website:</label>
              <input type="url" id="website" name="website" className="w-full p-2 border border-gray-400 rounded" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="services" className="block text-lg mb-2">Services:</label>
              <select id="services" name="services" className="w-full p-2 border border-gray-400 rounded">
                <option value="">Select a service</option>
                <option value="service1">Service 1</option>
                <option value="service2">Service 2</option>
                <option value="service3">Service 3</option>
                <option value="service4">Service 4</option>
                <option value="service5">Service 5</option>
              </select>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="brief-description" className="block text-lg mb-2">Brief Description:</label>
              <textarea id="brief-description" name="brief-description" className="w-full p-2 border border-gray-400 rounded"></textarea>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="how-we-can-help" className="block text-lg mb-2">How we can help:</label>
              <textarea id="how-we-can-help" name="how-we-can-help" className="w-full p-2 border border-gray-400 rounded"></textarea>
            </div>
            <div className={`cursor-pointer border-4 rounded-xl border-transparent transition ease-in-out delay-150 hover:border-red-200 hover:bg-red-700 duration-150`}>
              <div className="get-quote-btn px-3 py-2 bg-[#303841] rounded-xl  text-white transition ease-in-out delay-150 text-center hover:bg-red-700 duration-150">
                Submit
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
