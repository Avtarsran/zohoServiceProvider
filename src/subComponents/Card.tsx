import DarkButton from "./DarkButton";

interface card {
  img: string;
  title: string;
  description: string;
  toLink: string
}
const Card = ({img,title,description,toLink}:card) => {
  return (
      <div className="flex w-3/4 lg:w-full mx-4 flex-col min-h-[23rem] bg-white border shadow-sm rounded-lg">
        <div className="w-full h-2/5 flex justify-center items-center">
          <img
            src={img}
            alt=""
            className=" w-32 h-24"
          />
        </div>
        <div className="flex flex-col h-3/5 justify-between mx-3 my-2">
          <h5 className=" text-xl font-bold tracking-tight">
            {title}
          </h5>
              <p className=" font-normal text-gray-700">
              {description}
        </p>
        <DarkButton aTag={false} buttonText="Read More" lgScreen={false} toLink={toLink}></DarkButton>
        </div>
      </div>
  );
};

export default Card;
