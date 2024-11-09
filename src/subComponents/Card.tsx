import DarkButton from "./DarkButton";

interface card {
  img: string;
  title: string;
  description: string;
  toLink: string;
}
const Card = ({ img, title, description, toLink }: card) => {
 
  return (
    <div className="flex w-3/4 lg:w-full mx-4 my-3 flex-col min-h-[23rem] bg-white border shadow-sm rounded-lg transition-transform duration-300 hover:scale-105">
      <div className="w-full min-h-[10rem] flex justify-center items-center">
        <img src={img} alt="" className=" w-32 h-24" />
      </div>
      <div className="flex flex-col min-h-[13rem] justify-between items-center lg:items-start mx-5 lg:mx-3 my-2">
        <h5 className=" text-xl font-bold text-center lg:text-left tracking-tight">
          {title}
        </h5>
        <p className=" font-normal text-gray-700">{description}</p>
        <div className="w-full flex lg:block  items-center justify-center">
        <DarkButton
            lgScreen={false}
            aTag={false}
            buttonText="Read More"
            toLink={toLink}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
