import { FaInfoCircle } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useParams, useNavigate } from "react-router-dom";

const LevelScreen = () => {
  const { level } = useParams<any>();
  const navigate = useNavigate();

  const handlePrevPage = () => {
    navigate(-1);
  };
console.log(level)
  // Format the level name (e.g., level-2 to Level 2)
  const formattedLevel = level?.replace("-", " ").replace(/^\w/, (c) =>
    c.toUpperCase()
  );

  return (
    <div
      className="relative h-screen w-full bg-cover flex flex-col gap-12 items-center justify-center"
      style={{
        backgroundImage: `url('/assets/images/levels-background.png')`,
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
      <p className="text-[5rem] text-[#FFB2DE] text-outline-black fade-in level-slide-in">
        {formattedLevel}
      </p>

      <Link to={`/game/tribal-trivial`} className="fade-in">
        <button
          className="px-6 py-3 bg-yellow-200 text-black text-2xl rounded-full whitespace-nowrap hover:bg-yellow-300 transition-colors duration-300"
          style={{ border: "1px solid black" }}
        >
          Let's Go!
        </button>
      </Link>
    </div>
  );
};

export default LevelScreen;
