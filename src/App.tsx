import avatarImg from "./assets/images/avatar-jessica.jpeg";

function App() {
  return (
    <main className="grid place-items-center h-screen w-screen bg-off-black text-white">
      <div className="bg-dark-grey w-[327px] h-[578px] rounded-[13px] flex flex-col items-center">
        <img
          className="rounded-full size-[90px]"
          src={avatarImg}
          alt="avatar image"
        />

        <h1 className="font-bold">Jessica Randall</h1>
        <p className="text-green font-semibold">London, United Kingdom</p>
        <p>"Front-end developer and avid reader."</p>
        <div>
          <button>GitHub</button>
          <button>Frontend Mentor</button>
          <button>LinkedIn</button>
          <button>Twitter</button>
          <button>Instagram</button>
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
