import { Link } from 'react-router-dom'

const FeaturesSection = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-32">
    <div>
        <div className="text-3xl md:text-xl text-center font-semibold">
            We help you automate your business
        </div>
    </div>
    <div>
        <div className="cursor-pointer mt-5 border-4 rounded-lg border-white transition ease-in-out delay-150 hover:border-red-200
                    duration-150">
            <div className="get-quote-btn px-3 py-2 bg-[#303841] 
                        rounded-lg border-4 border-white text-white transition ease-in-out delay-150
                         text-center
                        hover:bg-red-500
                        duration-150">
                <Link to="/about">
                    See How
                </Link>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default FeaturesSection
