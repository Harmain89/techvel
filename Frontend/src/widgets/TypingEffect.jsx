import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";

const TypingEffect = () => {
  const constantText = "Welcome, ";
  const changingTexts = [
    "To The Techvel Solutions.",
    "To The Future.",
    "To The Real AI Contributors.",
    "To Innovation.",
    "To Digital Transformation."
  ];
  
  const [displayedText, setDisplayedText] = useState(constantText);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Timing configurations
  const typingSpeed = 20;
  const deletingSpeed = 30;
  const pauseBeforeDelete = 2000;
  const pauseBeforeType = 1000;

  useEffect(() => {
    let timeout;
    const currentPhrase = changingTexts[currentPhraseIndex];
    const fullText = constantText + currentPhrase;

    if (!isDeleting) {
      // Typing phase
      if (currentIndex < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, typingSpeed);
      } else {
        // Finished typing current phrase
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBeforeDelete);
      }
    } else {
      // Deleting phase (only delete the changing part)
      if (currentIndex > constantText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next phrase
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % changingTexts.length);
        }, pauseBeforeType);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentPhraseIndex]);

  return (
    <Typography variant="h1" color="white" className="mb-4 text-center">
      {displayedText}
      <span className="animate-pulse">|</span>
    </Typography>
  );
};

export default TypingEffect;