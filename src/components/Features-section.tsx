import DarkButton from '../subComponents/DarkButton'

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
    <DarkButton aTag={false} buttonText="Read More" lgScreen={false} toLink="/about"></DarkButton>
    </div>
</div>
</div>
  )
}

export default FeaturesSection
