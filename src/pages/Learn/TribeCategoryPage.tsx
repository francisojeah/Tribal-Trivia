import { useEffect, useRef, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

const TribeCategoryPage = () => {
  const navigate = useNavigate();
  const { tribe = "", category = "" } = useParams();

  const tribeData: any = {
    igbo: {
      traditions: {
        images: [
          {
            id: 1,
            src: "/assets/images/Igbo/igbo_tradition_image1.jpg",
            details: "Details for Image 1",
          },
          {
            id: 2,
            src: "/assets/images/Igbo/igbo_tradition_image2.jpg",
            details: "Details for Image 2",
          },
        ],
        funFacts: [
          "Igbo Tradition Fun Fact 1",
          "Igbo Tradition Fun Fact 2",
          "Igbo Tradition Fun Fact 3",
        ],
      },
      "arts and literature": {
        images: [
          {
            id: 1,
            src: "/assets/images/Igbo/image4.jpeg",
            details:
              "The Ikorodu Monument is a captivating monumental sculpture crafted by skilled Igbo artisans. Carved from a single piece of wood, it depicts a powerful ancestral figure with intricate facial features and symbolic adornments.",
          },
          {
            id: 2,
            src: "/assets/images/Igbo/image5.jpeg",
            details:
              "A striking Igbo sculpture resembling a traditional mask, crafted from wood and clay, symbolizing ancestral spirits and cultural identity.",
          },
        ],
        funFacts: [
          {text:" The Igbo have a rich literary tradition, with notable authors such as Chinua Achebe, whose works like 'Things Fall Apart' have received global acclaim."},
          {text:"Traditional Igbo music and dance are integral parts of their culture, with instruments like the udu, ogene, and ikoro. Modern Igbo music includes highlife and contemporary Afrobeat."},
          {text:"Igbo Tradition Fun Fact 3"},
        ],
        audio: "/assets/images/Igbo/arts.mp3",
        message:
          "The Igbo have a rich tradition in arts and literature, exemplified by renowned authors like Chinua Achebe, whose works such as 'Things Fall Apart' have achieved global acclaim. Their culture also includes vibrant music and dance, featuring traditional instruments like the udu, ogene, and ikoro, as well as modern genres such as highlife and contemporary Afrobeat.",
      },
      language: {
        images: [
          {
            id: 1,
            src: "/assets/images/Igbo/image7.jpeg",
            details: "The Igbo language, also known as 'Asụsụ Igbo,' is a tonal language with numerous dialects, spoken by millions in Nigeria. It has a rich oral tradition and uses the Nsibidi writing system for communication and record-keeping.",
          },
          {
            id: 2,
            src: "/assets/images/Igbo/image8.jpeg",
            details: "Many Igbo proverbs and idioms are deeply embedded in the language, reflecting the wisdom and values of the Igbo people.",
          },
        ],
        funFacts: [
          { text: "The Igbo language, also known as 'Asụsụ Igbo,' is tonal and has over 20 dialects. It is spoken by millions in Nigeria and has a rich oral tradition." },
          { text: "Igbo language uses a writing system called Nsibidi, which is a set of symbols indigenous to southeastern Nigeria, used for various purposes, including communication, records, and art." },
          { text: "Many Igbo proverbs and idioms are deeply embedded in the language, reflecting the wisdom and values of the Igbo people." },
        ],
        audio: "/assets/images/Igbo/language.mp3",
        message: "The Igbo people speak the Igbo language, which is part of the Volta–Niger branch of the Niger–Congo language family. This language is rich in diversity, featuring numerous dialects that vary significantly across different regions. Despite these variations, there is a mutual intelligibility among the dialects, allowing communication within the Igbo-speaking community. The language is an essential aspect of Igbo identity and cultural heritage."
      },
      cuisine: {
        images: [
          {
            id: 1,
            src: "/assets/images/Igbo/image3.jpeg",
            details:
              "Oha Soup is a traditional Nigerian dish made with Oha leaves, assorted meats or fish, and local spices. It's known for its rich flavor and is popular among the Igbo ethnic group.",
          },
          {
            id: 2,
            src: "/assets/images/Igbo/image14.jpeg",
            details:
              "Okpa is a Nigerian snack made from fermented Bambara groundnuts. It has a dense, slightly sweet, and nutty flavor, commonly enjoyed in the eastern region of Nigeria.",
          },
        ],
        funFacts: [
          { text: "Igbo cuisine includes a unique dish called Nkwobi, which is a spicy cow foot delicacy often enjoyed as a special treat.", audio: "/assets/images/Igbo/fun-cuisine.m4a" },
          { text: "The Igbo people have a traditional method of fermenting and drying cassava to make Abacha, also known as African salad, which is a popular and refreshing dish.", audio: "/path/to/abacha_audio.mp3" },
          { text: "Yams hold cultural significance in Igbo society, and they are celebrated annually during the New Yam Festival. Yams are often boiled, roasted, or pounded to make various dishes.", audio: "/path/to/yam_audio.mp3" },
        ],
        audio: "/assets/images/Igbo/cuisine.m4a",
        message:
          "Igbo cuisine is diverse and flavorful, featuring a variety of traditional dishes that reflect the region's agricultural abundance. Staples like yams, cassava, and rice are commonly used, often accompanied by richly seasoned stews and soups. Popular dishes include okpa, Nkwobi, Oha soup, egusi soup made with melon seeds, and ofe nsala, a white soup typically prepared with catfish. Palm oil is a fundamental ingredient, adding depth and richness to many recipes. The cuisine emphasizes fresh, locally sourced ingredients, creating a vibrant and hearty culinary tradition.",
      },
      music: {
        images: [
          {
            id: 1,
            src: "/assets/images/Igbo/igbo_music_image1.jpg",
            details: "Details for Image 1",
          },
          {
            id: 2,
            src: "/assets/images/Igbo/igbo_music_image2.jpg",
            details: "Details for Image 2",
          },
        ],
        funFacts: [
          "Igbo Music Fun Fact 1",
          "Igbo Music Fun Fact 2",
          "Igbo Music Fun Fact 3",
        ],
      },

      // Add other categories as needed
    },
    Yoruba: {
      // Data for Yoruba tribe
    },
    // Add data for other tribes as needed
  };

  const categoryData = tribeData[tribe][category];
  const [revealedCards, setRevealedCards] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const [pageOpenAudioPlayed, setPageOpenAudioPlayed] = useState(false);
  const [messages, setMessages] = useState<string[]>([categoryData?.message]);
  const [inputValue, setInputValue] = useState<string>("");

  const audioRefs = useRef<HTMLAudioElement[]>([]);

  const handleCardClick = (index: number) => {
    setRevealedCards((prev) => {
      const newRevealedCards = [...prev];
      newRevealedCards[index] = !newRevealedCards[index];
      return newRevealedCards;
    });
    if (audioRefs.current[index] && index===0) {
      audioRefs.current[index].play();
    }
  };
  const [text, setText] = useState<string>("");

  useEffect(() => {
    let currentIndex = 0;
    let currentTitle = "";
    let currentMessage = "";
    let currentText = "";

    const timer = setInterval(() => {
      if (currentIndex < messages.length) {
        if (currentTitle.length === 0) {
          currentMessage = messages[currentIndex];
        }

        if (currentText.length < currentTitle.length + currentMessage.length) {
          const charToShow =
            currentMessage[currentText.length - currentTitle.length];

          currentText += charToShow;

          if (charToShow === "\n") {
            setText((prevText) => prevText + "<br>");
          } else {
            setText((prevText) => prevText + charToShow);
          }
        } else {
          currentIndex++;
          currentText = "";
          currentMessage = "";
        }
      } else {
        clearInterval(timer);
      }
    });

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handlePrevPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    // Play the page open audio when the component mounts
    const audio = new Audio(categoryData.audio);
    audio.play();

    // Clean up function to pause the audio when the component unmounts
    return () => {
      audio.pause();
    };
  }, [categoryData.audio]);

  return (
    <div className="relative h-screen w-full flex">
      <div className="w-3/4 p-8 bg-[#6C63FF] relative">
        <div
          className="absolute top-6 left-16 cursor-pointer text-[1.7rem] p-2 rounded-full bg-white border border-black z-10"
          onClick={handlePrevPage}
        >
          <MdKeyboardArrowLeft />
        </div>
        <div className="absolute text-2xl top-4 right-16 p-2 flex gap-8 z-10">
          <div className="p-3 cursor-pointer rounded-full bg-white border border-black">
            <FaInfoCircle />
          </div>
          <div className="p-3 cursor-pointer rounded-full bg-white border border-black">
            <HiSpeakerWave />
          </div>
        </div>

        <div className="pt-24">
          <h1 className="text-5xl text-[#FFB2DE] text-outline-black mb-8 capitalize">
            {category} of {tribe} Tribe
          </h1>

          <div className="grid grid-cols-2 gap-28 mb-8">
            {categoryData.images?.map((image: any, index: any) => (
              <div key={index} className="relative">
                <div className={`flip-card  rounded-xl w-full h-64`}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={image.src}
                        alt={`Image ${index + 1}`}
                        className="rounded-xl w-full h-64 object-fit bg-white cursor-pointer"
                        onClick={() => handleCardClick(index)}
                      />
                    </div>
                    <div className="flip-card-back rounded-xl absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white text-2xl p-4">
                      {image.details}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8"></div>

          <h2 className="text-3xl text-[#FFB2DE] text-outline-black mb-4">
            Fun Facts
          </h2>

          <div className="grid grid-cols-3 gap-8">
            {categoryData.funFacts?.map((fact: any, index: any) => (
              <div
                key={index}
                className={`p-4 rounded-xl bg-white text-black cursor-pointer transition duration-300 h-40 relative overflow-hidden ${
                  revealedCards[index] ? "" : "blur-sm"
                }`}
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`absolute inset-0 flex items-center justify-center text-lg font-semibold ${
                    revealedCards[index] ? "hidden" : ""
                  }`}
                >
                  Tap to reveal
                </div>
                {revealedCards[index] ? fact.text : ""}
                <audio
                  ref={(el) => (audioRefs.current[index] = el!)}
                  src={fact.audio}
                ></audio>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-1/4 p-8 bg-gray-200 border-l border-black flex flex-col items-center">
        <h2 className="text-2xl mb-4">Cultural Guide</h2>
        <div className="relative flex-grow w-full bg-white border border-black rounded-lg p-4">
          {/* Chatbot */}
          <div className="overflow-y-auto max-h-[500px]">
            {/* {messages.map((message, index) => (
              <div key={index} className="mb-2">
                {message}
              </div>
            ))} */}
            {text}
          </div>
          <div className="absolute bottom-6 mt-14 flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={handleInputChange}
              className="flex-grow w-52 px-4 py-2 bg-gray-100 text-black border border-black rounded-md"
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TribeCategoryPage;
