import { useState, useEffect } from "react";

const useCountdown = (initialSeconds) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev <= 0 ? initialSeconds : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [initialSeconds]);
  return {
    hours: Math.floor(seconds / 3600),
    mins:  Math.floor((seconds % 3600) / 60),
    secs:  seconds % 60,
  };
};

export default useCountdown;