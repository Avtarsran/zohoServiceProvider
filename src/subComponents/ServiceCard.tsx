// import DarkButton from "./DarkButton";

// const ServiceCard = ({ h1text,id, spantext, tagline, description, btntext, keypoints }: any) => {
//   return (
//     <div className="flex w-full px-auto bg-white p-8 my-4 rounded-lg items-center" id={id}>
//       <div className="flex-shrink-0">
//         <img
//           alt="3D illustration of a person sitting on an orange chair using a tablet"
//           className="w-96 h-96"
//           height="150"
//           src="https://storage.googleapis.com/a1aa/image/zmFcyhkRFnIRO5fZn4eIi78zd9YF3JWa5Uqq15PDpeMYtORnA.jpg"
//           width="150"
//         />
//       </div>
//       <div className="ml-8">
//         <h1 className="text-2xl font-bold text-[#3a4750] my-2">
//           {h1text}
//           <span className="text-red-600">{spantext}</span>
//         </h1>
//         <h3 className="text-2xl font-bold text-gray-800 my-2">
//           <span className="text-[#303841] italic">{tagline}</span>
//         </h3>
//         <p className="text-gray-500 mt-2 my-2">{description}</p>
//         <ul className="mt-4 space-y-2">
//           {keypoints.map((item:any) => (
//             <li key={item.number} className="flex items-start">
//               <div className="flex-shrink-0">
//                 <div className="flex items-center justify-center h-8 w-8  text-white">
//                   {item.number}
//                 </div>
//               </div>
//               <div className="ml-3 text-gray-800">
//                 <p className="font-bold">{item.title}</p>
//                 <p>{item.description}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <div className="mt-6 flex space-x-4">
//           <DarkButton
//             lgScreen={false}
//             aTag={true}
//             buttonText={btntext}
//             toLink="/services/#contact"
//           ></DarkButton>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ServiceCard;
import DarkButton from "./DarkButton";

const ServiceCard = ({ h1text, id, spantext, tagline, description, btntext, keypoints }: any) => {
  return (
    <div className="flex flex-col lg:flex-row w-full bg-white p-6 lg:p-8 my-4 rounded-lg items-center" id={id}>
      
      {/* Image Section */}
      <div className="flex-shrink-0 w-full lg:w-1/3 mb-6 lg:mb-0">
        <img
          alt="3D illustration of a person sitting on an orange chair using a tablet"
          className="w-full h-48 sm:h-64 md:h-80 lg:h-auto object-cover rounded-lg"
          src="https://storage.googleapis.com/a1aa/image/zmFcyhkRFnIRO5fZn4eIi78zd9YF3JWa5Uqq15PDpeMYtORnA.jpg"
        />
      </div>
      
      {/* Text Content Section */}
      <div className="w-full lg:w-2/3 lg:ml-8 text-left">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#3a4750] my-2">
          {h1text}
          <span className="text-red-600">{spantext}</span>
        </h1>
        <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-800 my-2">
          <span className="text-[#303841] italic">{tagline}</span>
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-gray-500 mt-2 my-2">{description}</p>
        
        {/* Keypoints */}
        <ul className="mt-4 space-y-3">
          {keypoints.map((item: any) => (
            <li key={item.number} className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 bg-gray-300 text-white rounded-full">
                  {item.number}
                </div>
              </div>
              <div className="ml-3 text-gray-800">
                <p className="font-bold text-sm sm:text-base">{item.title}</p>
                <p className="text-xs sm:text-sm">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
        
        {/* Button */}
        <div className="mt-6 flex justify-start space-x-4">
          <DarkButton
            lgScreen={false}
            aTag={true}
            buttonText={btntext}
            toLink="/services/#contact"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;


