import { useEffect, useState } from "react";

const Quotes = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cards = [
    {
      id: 1,
      quote: "I got my tech job on Wellfound (AngelList Talent) 4 years ago and I'm still happy! Pays well, great culture, and unlimited PTO.",
    },
    {
      id: 2,
      quote: "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.",
    },
    {
      id: 3,
      quote: "I can't imagine my day to day without this platform. Life would be a lot more difficult.",
    },
  ];

  const triggerHeight = 1900;

  const handleScroll = () => {
    if (window.scrollY > triggerHeight && !isVisible) {
      setIsVisible(true);
    }
  };

  const showNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const showPrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <div
      className={`max-w-7xl mx-auto p-6 mt-8 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ marginBottom: "2rem" }}
      id="quotes"
    >
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-500">Quotes</p>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">From our users</h1>
          <div className="flex">
            <button
              className="border-2 rounded-lg border-white transition ease-in-out delay-150 hover:border-red-500 hover:shadow-[-5px_5px_0_0_rgb(99.6%,79.2%,79.2%)] duration-150"
              onClick={showPrevCard}
            >
              <div className="transition ease-in-out delay-150 px-3 py-2 text-center rounded-lg hover:bg-red-200 hover:text-red-600 duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </div>
            </button>
            <button
              className="border-2 rounded-lg border-white transition ease-in-out delay-150 hover:border-red-500 hover:shadow-[5px_5px_0_0_rgb(99.6%,79.2%,79.2%)] duration-150"
              onClick={showNextCard}
            >
              <div className="transition ease-in-out delay-150 px-3 py-2 text-center rounded-lg hover:bg-red-200 hover:text-red-600 duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div id="cardContainer" className="relative">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card bg-pink-50 p-6 rounded-lg ${index === currentCardIndex ? "" : "hidden"}`}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-pink-100 rounded-full">
                <span className="text-red-500 text-xl font-bold">99</span>
              </div>
            </div>
            <p className="text-gray-900">{card.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;