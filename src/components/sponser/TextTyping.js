import React, { useState, useEffect } from "react";

const TextTyping = ({ text }) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentIndex, text]);

  return (
    <div className="max-w-md mx-auto text-center">
      <p className="text-3xl font-bold mb-4">{typedText}</p>
    </div>
  );
};

export default TextTyping;
