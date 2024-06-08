import { FaInfoCircle } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const GameStartPage = () => {
  const navigate = useNavigate();

  const handlePrevPage = () => {
    navigate(-1);
  };
  return (
    <div
      className="relative h-screen w-full bg-cover flex flex-col gap-12 items-center justify-center"
      style={{
        backgroundImage: `url('/assets/images/game-background.png')`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute top-6 left-16 cursor-pointer text-[1.7rem] p-2 rounded-full bg-white border border-black"
        onClick={handlePrevPage}
      >
        <MdKeyboardArrowLeft />
      </div>
      <div className="absolute text-2xl top-4 right-16 p-2 flex gap-8">
        <div className="p-3 cursor-pointer rounded-full bg-white border border-black">
          <FaInfoCircle />
        </div>
        <div className="p-3 cursor-pointer rounded-full bg-white border border-black">
          <HiSpeakerWave />
        </div>
      </div>
      <svg width="300" height="100">
        <defs>
          <path id="curve" d="M 50, 75 A 150,75 0 0,1 250,75" />
        </defs>
        <text className="text-[2.8rem] text-outline-black" fill="white">
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            Let's Play
          </textPath>
        </text>
      </svg>

      <p className="text-[5rem] text-[#FFB2DE] text-outline-black">
        Tribal Trivia
      </p>
      <Link to={"/game/level-1"}>
        <button
          className="px-6 py-3 bg-yellow-200 text-black text-2xl rounded-full whitespace-nowrap hover:bg-yellow-300"
          style={{ border: "1px solid black" }}
        >
          START
        </button>
      </Link>
    </div>
  );
};

export default GameStartPage;
