import { FaInfoCircle, FaRegPaperPlane, FaRedo } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

const GameScreen = () => {
  const [images, setImages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [backgroundStyle, setBackgroundStyle] =
    useState<string>("bg-[#6C63FF]");
  const navigate = useNavigate();

  const fetchImages = () => {
    try {
      const folders = ["Igbo", "Yoruba" /* "Hausa", "Uruobo" */];
      const randomIndex = Math.floor(Math.random() * folders.length);
      const selectedFolder = folders[randomIndex];

      const uniqueIndices = new Set();
      while (uniqueIndices.size < 4) {
        uniqueIndices.add(Math.floor(Math.random() * 14) + 1);
      }
      const randomIndices = Array.from(uniqueIndices);

      const imageUrls = randomIndices.map(
        (index) => `/assets/images/${selectedFolder}/image${index}.jpeg`
      );

      setImages(imageUrls);
      console.log(imageUrls);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    const normalizedInput = inputValue.trim().toLowerCase();
    const normalizedFolderName = images[0].split("/")[3].toLowerCase();
    console.log(normalizedFolderName);
    if (normalizedInput === normalizedFolderName) {
      setFeedback("Correct!");
      setBackgroundStyle("bg-green-500");
      setTimeout(() => {
        setBackgroundStyle("bg-[#6C63FF]");
        setFeedback("");
        handleRetry();
      }, 2000);
    } else {
      setFeedback("Incorrect. Try again!");
      setBackgroundStyle("bg-red-500");
      setTimeout(() => {
        setBackgroundStyle("bg-[#6C63FF]");
        setFeedback("");
      }, 2000);
    }
  };

  const handleRetry = () => {
    setInputValue("");
    setFeedback("");
    fetchImages();
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handlePrevPage = () => {
    navigate(-1);
  };

  return (
    <div
      className={`relative h-screen w-full flex flex-col items-center justify-center ${backgroundStyle}`}
    >
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

      <h1 className="text-5xl text-[#FFB2DE] text-outline-black mb-8">
        Guess the Tribe
      </h1>

      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Render images dynamically */}
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="rounded-xl w-64 h-52 object-fit bg-white"
          />
        ))}
      </div>

      <div className="mb-8 flex gap-4">
        <input
          type="text"
          placeholder="Enter the tribe"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          className="px-4 py-2 bg-white text-black text-xl border border-black rounded-md"
        />
        <button
          className="p-3 bg-yellow-200 text-black text-xl border border-black rounded-full"
          onClick={handleSubmit}
        >
          <FaRegPaperPlane />
        </button>
        <button className="p-3 bg-white text-black text-xl border border-black rounded-full">
          <FaRedo className=" cursor-pointer" onClick={handleRetry} />
        </button>
      </div>

      {feedback && <div className="text-xl text-white mb-4">{feedback}</div>}
    </div>
  );
};

export default GameScreen;
