import DarkButton from '../subComponents/DarkButton'

const FeaturesSection = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-32">
    <div>
        <div className="text-2xl md:text-3xl mx-3 text-center font-semibold">
            We help you automate your business
        </div>
    </div>
    <div className='my-2'>
    <DarkButton aTag={false} buttonText="Read More" lgScreen={false} toLink="/about"></DarkButton>
    </div>
</div>
</div>
  )
}

export default FeaturesSection
