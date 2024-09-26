import { Link } from "react-router-dom";

interface button {
  buttonText: string;
  toLink: string;
  aTag: boolean;
  lgScreen: boolean
}

const DarkButton = ({ buttonText, toLink, aTag, lgScreen }: button) => {
  return (
    <div className={`cursor-pointer w-44 lg:w-auto border-4 ${lgScreen?"invisible lg:visible absolute lg:static":""}  rounded-xl border-white transition ease-in-out delay-150 hover:border-red-200 hover:bg-red-700 duration-150`}>
      <div className="get-quote-btn px-3 py-2 bg-[#303841] rounded-xl  text-white transition ease-in-out delay-150 text-center hover:bg-red-700 duration-150">
        {aTag ? (
          <a href={toLink}>{buttonText}</a>
        ) : (
          <Link to={toLink}>{buttonText}</Link>
        )}
      </div>
    </div>
  );
};

export default DarkButton;
