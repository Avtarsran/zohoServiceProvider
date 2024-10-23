import DarkButton from "../subComponents/DarkButton";

const FeaturesSection = () => {
  return (
    <div>
      <div className="flex flex-col my-5 justify-center items-center">
        <div>
          <div className="text-2xl md:text-3xl mx-3 text-center font-semibold">
            Want to know more about our services
          </div>
        </div>
        <div className="my-2">
          <DarkButton
            aTag={false}
            buttonText="Click here"
            lgScreen={false}
            toLink="/services"
          ></DarkButton>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
