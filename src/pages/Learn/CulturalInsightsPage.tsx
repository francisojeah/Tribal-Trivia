import { FaInfoCircle, FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";

const CulturalInsightsPage = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const initialTribes = ["Igbo", "Yoruba", "Hausa"];
  const additionalTribes = ["Fulani", "Edo", "Ijaw"];

  const tribesToShow = showMore
    ? [...initialTribes, ...additionalTribes]
    : initialTribes;

  const handlePrevPage = () => {
    navigate(-1);
  };

  return (
    <div className="relative h-screen w-full bg-[#6C63FF] flex flex-col items-center justify-center">
      <div
        className="absolute top-6 left-16 cursor-pointer text-[1.7rem] p-2 rounded-full bg-white border border-black"
        onClick={handlePrevPage}
      >
        <MdKeyboardArrowLeft />
      </div>
      <div className="absolute top-6 right-16 flex gap-8">
        <div className="p-3 cursor-pointer rounded-full bg-white border border-black">
          <FaInfoCircle />
        </div>
        <div className="p-3 cursor-pointer rounded-full bg-white border border-black">
          <HiSpeakerWave />
        </div>
      </div>

      <h1 className="text-5xl text-[#FFB2DE] text-outline-black mb-12">
        Welcome to Cultural Insights
      </h1>
      <p className="text-[1.75rem] text-white text-center mb-12">
        Explore Nigerian languages, cuisine, music, traditions and more.
      </p>

      <h2 className="text-4xl text-[#FFB2DE] text-outline-black mb-8">
        Choose a Tribe
      </h2>
      <div className="grid grid-cols-3 gap-8 mb-12">
        {tribesToShow.map((tribe, index) => (
          <Link key={index} to={`/learn/${tribe.toLowerCase()}`}>
            <div className="bg-white p-6 rounded-xl flex items-center justify-center hover:shadow-md transition duration-300 transform hover:scale-110">
              <p className="text-2xl font-semibold">{tribe}</p>
            </div>
          </Link>
        ))}
      </div>

      <button
        className="flex items-center text-white text-lg hover:text-yellow-200"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Show More"}
        <FaArrowDown
          className={`ml-2 transform ${showMore ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
};

export default CulturalInsightsPage;
