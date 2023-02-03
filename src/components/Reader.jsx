import React, { useEffect, useState } from "react";

const Reader = ({ content, wpm, setCurrentlyReading }) => {
  const [currentWord, setCurrentWord] = useState("");

  useEffect(() => {
    const nextWord = (newWord) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          setCurrentWord(newWord);
          resolve();
        }, (60 * 1000) / wpm);
      });
    };

    const startReading = async () => {
      let wordIndex = 0;

      for (let i = 0; i < content.length; i++) {
        await nextWord(content[wordIndex]);
        wordIndex++;
      }
    };

    startReading();
  }, [content, wpm]);

  return (
    <div>
      <div
        onClick={() => setCurrentlyReading(false)}
        className="x-position text-5xl text-white m-4 font-bold cursor-pointer"
      >
        X
      </div>

      <div className="word-position text-7xl text-white">{currentWord}</div>
    </div>
  );
};

export default Reader;
