import { useNavigate } from "react-router-dom";

interface card {
  img: string;
  title: string;
  description: string;
  toLink: string;
}
const Card = ({ img, title, description, toLink }: card) => {
  const navigate = useNavigate();

  const goToNextPageAndAnchor = () => {
    navigate(toLink); 
  };
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
          <div onClick={goToNextPageAndAnchor}
            className={`cursor-pointer w-full sm:w-auto md:w-auto lg:w-auto border-4  rounded-xl border-transparent transition ease-in-out delay-150 hover:border-red-200 hover:bg-red-700 duration-150`}
          >
            <div className="get-quote-btn px-3 py-2 bg-[#303841] rounded-xl  text-white transition ease-in-out delay-150 text-center hover:bg-red-700 duration-150">
              Read More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
