import { FaInfoCircle } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const InfoGamePage = () => {
  const navigate = useNavigate();

  const handlePrevPage = () => {
    navigate(-1);
  };
  return (
    <div className="relative bg-[#FFB2DE] h-screen flex flex-col items-center justify-center text-center px-4">
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
      <h2 className="text-5xl font-bold text-yellow-200 text-outline-black mb-8">
        Explore Your Way
      </h2>
      <p className="text-[1.75rem] text-white text-outline-black mb-12">
        Choose how you would like to discover the wonders of Nigerian cultural
        heritage.
      </p>

      <div className="flex flex-col md:flex-row gap-10 max-w-md md:max-w-4xl mx-auto">
        <div className="relative flex bg-white flex-col w-[50rem] h-[18rem] items-center p-6 border-2 border-black rounded-[1.5rem] hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-3xl font-bold text-[#9FB4FF]  mb-6">Learn</h3>
          <p className="text-xl text-black mb-8">
            Explore Nigerian languages, cuisine, music, traditions and more.
          </p>
          <Link
            to={"/learn"}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          >
            <button
              className="px-5 py-[0.6rem] bg-yellow-200 text-black text-2xl whitespace-nowrap rounded-full hover:bg-yellow-300"
              style={{ border: "1px solid black" }}
            >
              Cultural Insights
            </button>
          </Link>
        </div>

        <div className="relative flex bg-white flex-col w-[50rem] h-[18rem] items-center p-6 border-2 border-black rounded-[1.5rem] hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-3xl font-bold text-[#9FB4FF]  mb-6">Play</h3>
          <p className="text-xl text-black mb-8">
            Engage with interactive games that test and expand your knowledge of
            Nigerian cultures.
          </p>
          <Link
            to={"/game"}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          >
            <button
              className="px-5 py-[0.6rem] bg-yellow-200 text-black text-2xl rounded-full whitespace-nowrap hover:bg-yellow-300"
              style={{ border: "1px solid black" }}
            >
              Tribal Trivia
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoGamePage;
