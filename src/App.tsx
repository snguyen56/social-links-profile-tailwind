function App() {
  return (
    <main>
      <div>
        <h1 className="text-3xl font-bold underline">Jessica Randall</h1>
        <p>London, United Kingdom</p>
        <p>"Front-end developer and avid reader."</p>
        <div>
          <button>GitHub</button>
          <button>Frontend Mentor</button>
          <button>LinkedIn</button>
          <button>Twitter</button>
          <button>Instagram</button>
        </div>
      </div>

      <div className="text-[11px] text-center">
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
      </div>
    </main>
  );
}

export default App;
