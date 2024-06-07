const GameStartPage = () => {
  return (
    <div
      className="h-screen w-full bg-cover flex flex-col gap-12 items-center justify-center"
      style={{
        backgroundImage: `url('/assets/images/game-background.png')`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <svg width="300" height="100">
        <defs>
          <path id="curve" d="M 50, 75 A 150,75 0 0,1 250,75" />
        </defs>
        <text className="text-[3.5rem] stroke-black" fill="white">
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            Let's Play
          </textPath>
        </text>
      </svg>

      <p className="text-[4rem] text-[#FFB2DE] stroke-black">Tribal Trivia</p>
      <button
        className="px-6 py-3 bg-[#FEF08E] text-black text-xl rounded-full hover:bg-yellow-200"
        style={{ border: "1px solid black" }}
      >
        START
      </button>
    </div>
  );
};

export default GameStartPage;
