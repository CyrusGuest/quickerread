import React, { useEffect, useState } from "react";
import Reader from "./components/Reader";
import { install } from 'ga-gtag';
import VerticalAd from "./components/VerticalAd";

function App() {
  const [content, setContent] = useState("");
  const [wpm, setWpm] = useState(60);
  const [currentlyReading, setCurrentlyReading] = useState(false);

  useEffect(() => {
    install('G-DX372ZLMRF'); 
  }, []);

  return (
    <div className="grid grid-cols-3">
      <VerticalAd />
      <div>
        {currentlyReading ? (
          <Reader
            content={content.split(" ")}
            wpm={wpm}
            setCurrentlyReading={setCurrentlyReading}
          />
        ) : (
          ""
        )}

        <div
          className={`flex flex-col mx-auto max-w-lg text-center mt-20 text-white ${
            currentlyReading ? "opacity-5" : ""
          }`}
        >
          <h1 className="font-bold text-5xl">quickerread</h1>
          <h2>
            enter your reading in the box below, pick a speed, and find out what
            you're truly capable of.
          </h2>

          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            placeholder="enter text here"
            className="mt-10 md:w-full w-3/4 mx-auto p-2 border-white border-2 rounded-lg outline-none bg-[#1C1C1C] glow"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          <h1 className="mt-10 text-2xl">
            current WPM (words per minute):
            <span className="font-bold"> {wpm}</span>
          </h1>
          <input
            value={wpm}
            onChange={(e) => setWpm(e.target.value)}
            type="range"
            name="wpm"
            id="wpm"
            min="1"
            max="1000"
            className="slider mt-2 w-3/4 mx-auto md:w-full"
          />

          <button
            onClick={() => setCurrentlyReading(true)}
            className="bg-[#1C1C1C] glow mt-8 transition-all text-white w-48 mx-auto py-2 rounded-lg font-bold hover:bg-white hover:text-[#1C1C1C]"
          >
            enter read mode
          </button>
        </div>
      </div>
      <VerticalAd />
    </div>
  );
}

export default App;
