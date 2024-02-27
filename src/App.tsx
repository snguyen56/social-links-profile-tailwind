import avatarImg from "./assets/images/avatar-jessica.jpeg";

function App() {
  return (
    <main className="grid place-items-center h-screen w-screen bg-off-black text-white">
      <div className="relative bg-dark-grey w-[327px] h-[578px] sm:w-[384px] sm:h-[610px] rounded-[10px] flex flex-col items-center pt-[23px] px-[24px] sm:pt-[40px] sm:px-[40px]">
        <img
          className="rounded-full size-[88px]"
          src={avatarImg}
          alt="avatar image"
        />

        <h1 className="font-semibold pt-7 text-[24px]">Jessica Randall</h1>
        <p className="text-green font-semibold pt-1">London, United Kingdom</p>
        <p className="pt-[24px]">"Front-end developer and avid reader."</p>
        <div className="flex flex-col gap-[16px] w-full mt-[24px]">
          <button className="bg-grey font-semibold rounded-lg py-[12px] hover:bg-green hover:text-dark-grey">
            GitHub
          </button>
          <button className="bg-grey font-semibold rounded-lg py-[12px] hover:bg-green hover:text-dark-grey">
            Frontend Mentor
          </button>
          <button className="bg-grey font-semibold rounded-lg py-[12px] hover:bg-green hover:text-dark-grey">
            LinkedIn
          </button>
          <button className="bg-grey font-semibold rounded-lg py-[12px] hover:bg-green hover:text-dark-grey">
            Twitter
          </button>
          <button className="bg-grey font-semibold rounded-lg py-[12px] hover:bg-green hover:text-dark-grey">
            Instagram
          </button>
        </div>
        <div className="text-[11px] text-center top-[590px] sm:top-[625px] absolute">
          Challenge by{" "}
          <a
            className="text-attribution"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            className="text-attribution"
            href="https://github.com/snguyen56"
            target="_blank"
          >
            Steven Nguyen
          </a>
          .
        </div>
      </div>
    </main>
  );
}

export default App;
