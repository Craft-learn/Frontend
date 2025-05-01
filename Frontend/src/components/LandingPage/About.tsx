import Button from "../Button"

const About = () => {
    return (<div className="bg-primary w-screen flex gap-4 md:gap-8 self-center border-b border-b-black justify-between  items-center py-8 h-[80vh] relative px-4 md:px-16">
        <div className="hidden md:flex w-[40%]">
            <img src="/about.png" alt="About"/>
        </div>
        <div className="flex  w-[75%] gap-4 flex-col justify-between h-[40vh] text-font-primary px-8 font-chivo" >
            <h4 className="font-[500]">ABOUT CRAFTLEARN</h4>
            <div className="flex flex-col gap-y-4 ">
            <p className="text-[50px] font-bold leading-[50px]">Empower Your Craft with CraftLearn</p>
            <article className="w-[70%] font-dmsans text-[20px]  ">CraftLearn is a learning platform that helps artisans <span className="font-bold">master their craft</span> while unlocking <span className="font-bold">Web3 opportunities</span>. Whether you're a beginner or a pro, gain valuable skills, earn digital recognition, and take your craft to the next level.</article>
            <div className="flex gap-x-4">
                <Button text="Started Learning Now!"/>
                <Button text="Explore Tracks" color="bg-[#F9F9F7]"/>
            </div>
            </div>
        </div>


    </div>)

}
export default About