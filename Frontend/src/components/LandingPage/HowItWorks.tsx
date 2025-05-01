const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Learn Web3 Basics",
      description: "Before diving into your craft, take a short Web3 crash course. Earn a verified Web3 certificate upon completion."
    },
    {
      number: 2,
      title: "Pick a Craft",
      description: "Choose from artisan skills like baking, bead-making, or weaving. Learn at your own pace with expert-led lessons."
    },
    {
      number: 3,
      title: "Get Certified & Earn",
      description: "Complete your craft course, receive a blockchain-verified certificate, and unlock earning opportunities."
    }
  ];

  return (
    <div className="w-screen p-16 2xl:p-32 grid place-items-center">
      <div className="text-center py-4 md:py-8 grid gap-y-4">
        <h2 className="text-sm uppercase text-font-primary mb-4">HOW IT WORKS</h2>
        <h1 className="text-3xl text-center leading-[40px] font-bold font-chivo">Your CraftLearn Journey in <br />3 Steps</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3  md:p-8 gap-x-4 self-center relative">
        {/* Connecting line */}
        <div className="absolute top-[80px] left-1/5 w-[25vw] xl:w-[22vw]"><img src="/arrow.png" alt="arrow"/></div>
        <div className="absolute top-[80px] w-[25vw] xl:w-[22vw] left-[52%]"><img src="/arrow.png" alt="arrow"/></div>

        {steps.map((step) => (
          <div 
            key={step.number} 
            className=" flex flex-col py-2 items-center"
          >
            <div className="w-16 h-16 relative top-12 bg-[#005F5B] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 z-10">
              {step.number}
            </div>
            <div className="bg-primary border border-gray-200 rounded-lg p-8 text-center shadow-lg w-full h-56">
              <h3 className="text-xl font-semibold py-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;