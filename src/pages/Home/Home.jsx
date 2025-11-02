import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "For Students",
      text: "Post questions during class without disrupting. Get answers from professors or TAs.",
    },
    {
      title: "For Professors",
      text: "Teach with focus while questions are collected. Respond when convenient, ensuring clarity.",
    },
    {
      title: "For TAs",
      text: "Handle escalated or unanswered questions, ensuring no student query goes unnoticed.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start gap-8 px-4 py-15 text-center z-10 backdrop-blur-xs">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
        Welcome to Vidya Vichar
      </h1>

      <p className="text-gray-100 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed px-4">
        A platform dedicated to sharing educational resources and fostering collaborative learning.
      </p>

      <button
        onClick={() => navigate("/signup")}
        className="cursor-pointer flex items-center gap-2 px-6 py-3 text-md sm:text-lg bg-linear-to-r from-pink-500 to-violet-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <span>Get Started</span>
        <FaArrowRight className="text-white text-lg" />
      </button>

      <div className="flex flex-wrap items-center justify-center gap-6 mt-6 w-full px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[90%] sm:w-[300px] h-auto sm:h-[200px] rounded-2xl p-6 bg-violet-300 bg-opacity-80 hover:shadow-lg hover:shadow-violet-400/50 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="font-bold text-xl sm:text-2xl mb-3 text-pink-900">{card.title}</h3>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
