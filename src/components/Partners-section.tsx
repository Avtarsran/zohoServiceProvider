import { useEffect, useState } from "react";

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerHeight = 1400;

  const handleScroll = () => {
    if (window.scrollY > triggerHeight && !isVisible) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <div
      className={`text-white transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
      }`}
      id="partners"
      style={{ backgroundColor: "#303841" }}
    >
      <div className="container mx-auto py-16">
        <div className="flex justify-center space-x-16 text-2xl font-semibold text-center">
          Zoho Partner For Over 700 Clients Across Many Industries...
        </div>
        <div className="border-t border-gray-600 my-12" />
        <div className="overflow-hidden">
          <div className="marquee text-white" style={{ animation: "marquee 25s linear infinite" }}>
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              alt="Transistor"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
              alt="Reform"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
              alt="Tuple"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
              alt="SavvyCal"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
              alt="Statamic"
              width="158"
              height="48"
            />
          </div>
        </div>
        <div className="text-center mt-8 text-sm">Startups who used our platform</div>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .marquee {
          display: flex;
          white-space: nowrap;
          overflow: hidden;
        }
        .marquee img {
          margin-right: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Partners;
