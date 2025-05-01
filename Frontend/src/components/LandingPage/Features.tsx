import { features } from "../../utils/features";

const Features = () => {
  return (
    <div className="flex flex-col  min-h-screen w-screen gap-8 py-4 md:py-16">
      <div className="text-center flex flex-col h-[27vh] py-2 md:py-8 justify-between text-font-primary">
        <p className="uppercase font-chivo font-semibold ">Key Benefits</p>
        <div className="flex flex-col gap-y-4 py-4 md:py-8">
          <p className="font-chivo text-3xl font-bold">
            What You Get with CraftLearn
          </p>
          <p className="font-dmsans text-font-sec w-[45%] self-center text-balance">
            CraftLearn blends hands-on artisan training with Web3-powered
            learning, helping you master your craft and gain digital
            recognition—all in one place.
          </p>
        </div>
      </div>

      <div className="grid  grid-cols-3 items-center justify-center  py-8 gap-4 gap-y-16 md:px-[10vw] font-chivo">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col text-center gap-y-4 rounded-lg shadow-sm bg-[#FFFBE5] border-[#9b9494] border-[0.2px]  px-4 md:px-8 py-2  h-[23vh]"
          >
            <div className="bg-[#AEFF0005]  rounded-full  shadow-lg md:w-24 w-16 h-16 md:h-24 flex items-center justify-center self-center relative bottom-16   ">
              <img
                src={feature.icon}
                alt={feature.title}
                className="self-center rounded-md "
              />{" "}
            </div>
            <p className="font-chivo text-[#333333] relative font-bold bottom-8 text-2xl">
              {feature.title}
            </p>
            <p className="text-sm font-dmsans relative bottom-8  text-font-primary">
              {feature.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Features;
