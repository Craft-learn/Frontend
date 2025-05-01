import Button from "../Button";

const CraftLearnTracks = () => {
  const tracks = [
    {
      title: "Web3 & Digital Finance",
      courses: "4+",
      icons: "/digital.png",
      color: "bg-[#E5EFEF]",
      borderColor: "border-[#005F5B]",
    },
    {
      title: "Practical Artisan Skill Development",
      courses: 3,
      icons: "/skills.png",
      color: "bg-[#EAEAEA]",
      borderColor: "border-[#A0A0A0]",
    },
    {
      title: "Digital Branding & Business Skills",
      courses: 3,
      icons: "/branding.png",
      color: "bg-[#EDE5F3]",
      borderColor: "border-[#6A4D7C]",
    },
  ];

  return (
    <div className="w-screen p-16 border-y">
      <div className="flex justify-between h-[35vh] items-center">
        <div className="text-start space-y-8 p-8 font-chivo">
          <h4 className="uppercase">CraftLearn Tracks</h4>

          <h1 className="text-3xl font-bold ">Find Your Learning Track</h1>
          <p className="text-gray-600 w-[55%] font-dmsans text0-[24px]">
            Choose from our specialized learning tracks that fit your journey
            —whether you're a beginner, a skilled artisan, or exploring Web3 for
            the first time.
          </p>
        </div>

        <div>
          <Button text={"Explore tracks"} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 p-8 place-items-center place-self-center gap-6">
        {tracks.map((track) => (
          <div
            key={track.title}
            className={`${track.color} border ${track.borderColor} px-4 rounded-lg flex  shadow-lg hover:shadow-xl transition-shadow`}
          >
            <div className="self-center  bg-primary rounded-lg">
              <img src={track.icons} alt="Icons" className="" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{track.title}</h2>
              <div className="flex justify-between items-center text-gray-600">
                <span>{track.courses} Courses Available</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftLearnTracks;
