import { HiSpeakerWave } from "react-icons/hi2";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url('/assets/images/game-background.png')`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute text-2xl top-4 right-16 p-2 flex gap-8">
        <div className="p-3 cursor-pointer rounded-full bg-white border border-black">
          <FaInfoCircle />
        </div>
        <div className="p-3 cursor-pointer rounded-full bg-white border border-black">
          <HiSpeakerWave />
        </div>
      </div>
      <div className="flex flex-col gap-14 items-center justify-center">
      <p className="text-[4.5rem] text-[#FFB2DE] text-outline-black">Heritage Explorer</p>
      <p className="text-[2.2rem] text-[#A7E8CE] text-outline-black">Discover, Learn, and Preserve Nigerian Cultural Heritage</p>
      <Link to={"/info-game"}>
      <button
        className="px-6 py-3 bg-yellow-200 text-black text-xl rounded-full hover:bg-yellow-200"
        style={{ border: "1px solid black" }}
      >
        Start Exploring
      </button>
      </Link>
      </div>
    </div>
  );
};

export default LandingPage;
