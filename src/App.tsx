import avatarImg from "./assets/images/avatar-jessica.jpeg";

function App() {
  return (
    <main className="grid place-items-center h-screen w-screen bg-off-black text-white">
      <div className="bg-dark-grey w-[327px] h-[578px] sm:w-[384px] sm:h-[610px] rounded-[10px] flex flex-col items-center pt-[23px] px-[24px] sm:pt-[40px] sm:px-[40px]">
        <img
          className="rounded-full size-[88px]"
          src={avatarImg}
          alt="avatar image"
        />

        <h1 className="font-semibold pt-7 text-[24px]">Jessica Randall</h1>
        <p className="text-green font-semibold pt-1">London, United Kingdom</p>
        <p className="pt-[24px]">"Front-end developer and avid reader."</p>
        <div className="flex flex-col gap-[16px] w-full mt-[24px]">
          <button className="bg-grey font-semibold rounded-lg py-[12px]">
            GitHub
          </button>
          <button className="bg-grey font-semibold rounded-lg py-[12px]">
            Frontend Mentor
          </button>
          <button className="bg-grey font-semibold rounded-lg py-[12px]">
            LinkedIn
          </button>
          <button className="bg-grey font-semibold rounded-lg py-[12px]">
            Twitter
          </button>
          <button className="bg-grey font-semibold rounded-lg py-[12px]">
            Instagram
          </button>
        </div>
      </div>

      {/* <div className="text-[11px] text-center">
        Challenge by{" "}
        <a
          className="text-attribution"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="text-attribution" href="#">
          Your Name Here
        </a>
        .
      </div> */}
    </main>
  );
}

export default App;
