import { FaInfoCircle } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";


const categories = [
  "Music",
  "Fashion",
  "Cuisine",
  "Places",
  "Film",
  "Language",
  "Arts and Literature",
  "History",
  "Traditions",
];

const TribePage = () => {
  const { tribe } = useParams();

  const navigate = useNavigate();

  const handlePrevPage = () => {
    navigate(-1);
  };
  return (
    <div
      className="relative h-screen w-full bg-cover flex flex-col gap-12 items-center justify-center"
      style={{
        backgroundImage: `url('/assets/images/tribe-background.png')`,
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
      <h1 className="text-5xl text-[#FFB2DE] text-outline-black mb-8 capitalize">
        The {tribe} Tribe
      </h1>

      <p className="text-[2rem] text-white text-center mb-8">
        Explore various aspects of the {tribe} tribe.
      </p>

      <div className="grid grid-cols-3 gap-8 mb-8">
        {categories.map((category, index) => (
          <Link key={index} to={`/learn/${tribe?.toLowerCase()}/${encodeURIComponent(category).toLowerCase()}`}>
            <div className="bg-white p-6 rounded-xl flex items-center justify-center hover:shadow-md transition duration-300 transform hover:scale-110">
              <p className="text-2xl">{category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TribePage