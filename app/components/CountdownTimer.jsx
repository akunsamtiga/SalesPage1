"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBolt } from "react-icons/fa";

export default function CountdownTimer() {
  const targetDate = new Date("2025-07-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <motion.section
      ref={ref}
      className="flex flex-col items-center justify-center bg-purple-50 p-10 my-10 rounded-xl w-full max-w-lg mx-auto text-center relative overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      aria-labelledby="countdown-heading"
    >
      <h2 id="countdown-heading" className="text-purple-800 text-2xl font-semibold tracking-wide">
        Promo Elektronik Unggul 
      </h2>
      <p className="text-purple-600 text-sm mt-2">
        Persiapkan diri Anda untuk peluncuran koleksi eksklusif!
      </p>

      <div className="flex space-x-4 mt-6" role="timer" aria-live="polite">
        {Object.entries(timeLeft).map(([label, value], index) => (
          <motion.div
            key={label}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div
              className="bg-purple-700 text-white font-bold text-3xl w-16 h-16 flex items-center justify-center rounded-lg"
              aria-label={`${value} ${label}`}
            >
              {value}
            </div>
            <p className="text-xs mt-2 text-purple-700 uppercase">{label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6">
        <FaBolt className="text-purple-700 text-4xl" aria-hidden="true" />
      </div>
    </motion.section>
  );
}
