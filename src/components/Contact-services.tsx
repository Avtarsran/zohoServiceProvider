import React, { useEffect, useRef } from 'react';

const ContactForm: React.FC = () => {
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = formRef.current;
        if (element) {
            element.classList.remove('opacity-0', 'translate-y-5');
        }
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };

    return (
        <div
            ref={formRef}
            className="bg-[#d3d6db] contactForm rounded-lg px-2 py-3 m-2 opacity-0 transform translate-y-5 transition-all duration-1000 ease-in sm:shadow"
            id="implementationContact"
        >
            <h2 className="text-2xl text-center font-bold mb-2">Contact Us</h2>
            <form className="w-full px-2 sm:px-5" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row justify-between">
                    <div className="form-group mb-1.5">
                        <label htmlFor="name" className="block text-lg mb-1">Name:</label>
                        <input type="text" id="name" name="name" className="p-1 mx-0 sm:mx-1 border border-gray-400 rounded w-full sm:w-auto" />
                    </div>
                    <div className="form-group mb-1.5">
                        <label htmlFor="email" className="block text-lg mb-1">Email:</label>
                        <input type="email" id="email" name="email" className="p-1 border border-gray-400 rounded w-full sm:w-auto" />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-evenly">
                    <div className="form-group mb-1.5">
                        <label htmlFor="company" className="block text-lg mb-1">Company:</label>
                        <input type="text" id="company" name="company" className="p-1 mx-0 sm:mx-1 border border-gray-400 rounded w-full sm:w-auto" />
                    </div>
                    <div className="form-group mb-1.5">
                        <label htmlFor="website" className="block text-lg mb-1">Website:</label>
                        <input type="url" id="website" name="website" className="p-1 border border-gray-400 rounded w-full sm:w-auto" />
                    </div>
                </div>

                <div className="form-group mb-1.5 w-full">
                    <label htmlFor="services" className="block text-lg mb-1">Services:</label>
                    <select id="services" name="services" className="w-full p-1 border border-gray-400 rounded">
                        <option value="Zoho consulting & implementation">Zoho consulting & implementation</option>
                    </select>
                </div>
                <div className="form-group mb-1.5">
                    <label htmlFor="brief-description" className="block text-lg mb-1">Brief Description:</label>
                    <textarea id="brief-description" name="brief-description" className="w-full p-1 border border-gray-400 rounded"></textarea>
                </div>
                <div className="form-group mb-1.5">
                    <label htmlFor="how-we-can-help" className="block text-lg mb-1">How we can help:</label>
                    <textarea id="how-we-can-help" name="how-we-can-help" className="w-full p-1 border border-gray-400 rounded"></textarea>
                </div>
                <div className="cursor-pointer border-2 rounded-lg border-[#d3d6db] transition ease-in-out delay-150 hover:border-red-300 duration-150">
                    <button type="submit" className="get-quote-btn px-3 py-2 bg-[#303841] rounded-lg border-4 border-[#d3d6db] text-white transition ease-in-out delay-150 text-center hover:bg-red-500 hover:border-[#d3d6db] duration-150">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
