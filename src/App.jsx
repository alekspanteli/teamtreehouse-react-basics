import reactLogo from "./assets/react.svg";

const Header = () => {
  return (
    <header className="px-7 py-8 bg-[#8063FA] rounded-t-md flex items-center border-solid border-b-1 border-[#D4CAFF] text-white gap-5">
      <h1 className="grow font-normal text-2xl text-right tracking-wider">
        Scoreboard
      </h1>
      <span className="text-sm font-semibold">Players: 1</span>
    </header>
  );
};

const Player = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-between items-center bg-white rounded-b-md border-solid border-b-4 border-[#D4CAFF]">
        <span className="text-2xl font-bold pl-7">Alex</span>
        <Counter />
      </div>
    </div>
  );
};

const Counter = () => {
  return (
    <div className="flex gap-3 items-center">
      <button className="text-slate-900 text-3xl p-5 bg-slate-200 hover:bg-slate-300">
        -
      </button>
      <span className="font-bold text-xl">35</span>
      <button className="text-slate-900 text-3xl p-5 bg-slate-200 hover:bg-slate-300">
        +
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="container mx-auto">
      <Player />
    </div>
  );
}

export default App;
