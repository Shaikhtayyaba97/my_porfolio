'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [showDescription, setShowDescription] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowDescription(true);
    }, 1000);
    setTimeout(() => {
      setShowButton(true);
    }, 2000);
  }, []);

  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center px-6 sm:px-12 md:px-20"
      style={{
        backgroundImage: "url('/hero.png')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl">
        {/* Heading */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 slide-in-left ${
            !showDescription ? "opacity-0" : "opacity-100"
          } transition-opacity duration-1000`}
        >
          Hello, I am <span className="text-teal-400">Tayyaba Shahbaz</span>
        </h1>

        {/* Description */}
        {showDescription && (
          <p
            className={`text-lg sm:text-xl md:text-2xl mb-6 leading-relaxed slide-in-right ${
              !showButton ? "opacity-0" : "opacity-100"
            } transition-opacity duration-1000`}
          >
            A passionate web developer who creates modern, responsive, and
            user-friendly websites with seamless experiences.
          </p>
        )}

        {/* Button */}
        {showButton && (
          <Link href="/#portfolio">
            <button className="bg-teal-600 hover:bg-teal-500 text-white py-3 px-6 rounded-full text-lg font-medium transition duration-300 transform hover:scale-105 shadow-lg">
              View My Work
            </button>
          </Link>
        )}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .slide-in-left {
          animation: slideInLeft 1s ease-out;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .slide-in-right {
          animation: slideInRight 1s ease-out;
        }
      `}</style>
    </section>
  );
}