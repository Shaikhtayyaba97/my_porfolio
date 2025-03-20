'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [showDescription, setShowDescription] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Trigger the animations after some delay
    setTimeout(() => {
      setShowDescription(true);
    }, 1000); // 1 second delay after name animation
    setTimeout(() => {
      setShowButton(true);
    }, 2000); // 2 seconds delay after description animation
  }, []);

  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.png')", // Ensure this path is correct
      }}
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-opacity-40"></div>
     

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-8 max-w-2xl mx-auto">
        {/* Main Heading */}
        <h1
          className={`text-5xl sm:text-6xl font-extrabold mb-6 text-shadow-lg slide-in-left ${
            !showDescription ? "slide-out-left" : ""
          }`}
        >
          Hello, I am Tayyaba Shahabaz
        </h1>

        {/* Description */}
        {showDescription && (
          <p
            className={`text-xl sm:text-2xl mb-6 text-lg md:text-xl leading-relaxed slide-in-right ${
              !showButton ? "slide-out-right" : ""
            }`}
          >
            A passionate web developer who loves building beautiful and
            functional websites. I create modern, responsive, and user-friendly
            websites that deliver a seamless experience.
          </p>
        )}

        {/* Button */}
        {showButton && (
          <Link href="/#portfolio">
            <button className="bg-teal-700 hover:bg-teal-600 text-white py-3 px-6 rounded-full text-lg transition duration-300 transform shadow-xl button-hover">
              View My Work
            </button>
          </Link>
        )}
      </div>

      {/* Inline Style for Animations */}
      <style jsx>{`
        /* Keyframes for sliding-in from left */
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Keyframes for sliding-out to the left */
        @keyframes slideOutLeft {
          0% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-100%);
          }
        }

        /* Keyframes for sliding-in from right */
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Keyframes for sliding-out to the right */
        @keyframes slideOutRight {
          0% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }

        /* Apply the slide-in effect */
        .slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }

        .slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }

        /* Apply the slide-out effect */
        .slide-out-left {
          animation: slideOutLeft 1s ease-in forwards;
        }

        .slide-out-right {
          animation: slideOutRight 1s ease-in forwards;
        }

        /* Button hover effect */
        .button-hover:hover {
          animation: buttonHover 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
}
