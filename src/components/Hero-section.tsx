import React, { useEffect, useState } from "react";

const HeroSection: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true)

    const animatedText = document.getElementById("animatedText");
    const animatedHeading = document.getElementById("animatedHeading");
    const animatedImg = document.getElementById("animatedImg");

    if (animatedText && animatedHeading && animatedImg) {
      // Remove the Tailwind's initial opacity and transform classes for animation
      animatedText.classList.remove("opacity-0", "translate-y-5");
      animatedHeading.classList.remove("opacity-0", "translate-y-5");
      animatedImg.classList.remove("opacity-0", "-translate-y-8");
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 sm:block invisible sm:visible md:flex absolute sm:static">

        <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1 my-5">
          <div className="font-semibold w-full sm:w-3/4 mt-32 sm:mt-0">
            <div
              className="w-full sm:w-96 opacity-0 transform translate-y-5 transition-all duration-1000 ease-out bg-transparent text-3xl sm:text-5xl text-center sm:text-left"
              id="animatedHeading"
            >
              Empowering Your Business with Customized Zoho Solutions
            </div>
            <div
              className="mt-5 text-lg opacity-0 transform translate-y-5 transition-all duration-1000 ease-out text-gray-500 text-center sm:text-left"
              id="animatedText"
            >
              At Elephant Tech Labs, we specialize in providing tailored Zoho
              consulting, implementation, and support services designed to
              optimize your business operations. Let us help you transform your
              business.
            </div>
          </div>
        </div>

        <div className="justify-center items-center invisible md:visible md:flex absolute md:static">
          <img
            id="animatedImg"
            className="opacity-0 transform -translate-y-8 transition-all duration-1000 ease-out w-96 bg-black"
            style={{ mixBlendMode: "color-burn" }}
            src="https://elephanttechlabs.com/wp-content/uploads/2024/08/vecteezy_doodle-font-z-rainbow-colors_26395717.jpg"
            alt="Animated"
          />
        </div>
      </div>
      <section
      className={`hero sm:hidden bg-cover bg-center h-screen opacity-0 transform translate-y-5 transition-all duration-1000 ease-in ${
        show ? 'opacity-100' : ''
      }`}
      id="creatorFront"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://elephanttechlabs.com/wp-content/uploads/2024/08/vecteezy_doodle-font-z-rainbow-colors_26395717.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="h-full mx-auto p-4">
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Empowering Your Business with Customized Zoho Solutions</h1>
            <p className={`mt-5 text-lg opacity-0 transform translate-y-5 transition-all duration-1000 ease-in ${
        show ? 'opacity-100' : ''
      } text-gray-800 text-center sm:text-left`}>
            At Elephant Tech Labs, we specialize in providing tailored Zoho
              consulting, implementation, and support services designed to
              optimize your business operations. Let us help you transform your
              business.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default HeroSection;
