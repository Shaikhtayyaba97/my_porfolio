

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/Hero';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      

    


   <HeroSection/>





      {/* About Section */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 mb-8">
            I am a dedicated web developer with a strong background in building interactive websites using modern technologies like  Next.js and sanity.
          </p>
          <div className="flex justify-center gap-10">
            {/* Skills */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-teal-700">Skills</h3>
              <div className="mt-4 text-gray-600">
                <p>HTML, CSS, Typescript, Next.js, Sanity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-700 mb-8">My Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-teal-700">Web Development</h3>
              <p className="text-gray-700 mt-4">I create responsive, dynamic, and beautiful websites using the latest web technologies.</p>
              <Link href="/#portfolio">
                <button className="mt-4 bg-teal-800 hover:bg-teal-600 text-white py-2 px-4 rounded-full transition duration-300">Learn More</button>
              </Link>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-teal-700">UI/UX Design</h3>
              <p className="text-gray-700 mt-4">Designing clean and modern interfaces that enhance user experience and engagement.</p>
              <Link href="/#portfolio">
                <button className="mt-4 bg-teal-800 hover:bg-teal-600 text-white py-2 px-4 rounded-full transition duration-300">Learn More</button>
              </Link>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-teal-700">SEO Optimization</h3>
              <p className="text-gray-700 mt-4">Helping websites rank higher in search engines with SEO best practices.</p>
              <Link href="/#portfolio">
                <button className="mt-4 bg-teal-800 hover:bg-teal-600 text-white py-2 px-4 rounded-full transition duration-300">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      

      <section id="portfolio" className="py-16 px-8 bg-gray-100">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl sm:text-lg font-bold text-teal-700 mb-8">
      Click here to view my projects
    </h2>
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
      {/* Project 1 */}
      <div className="bg-white p-6 shadow-lg rounded-lg group overflow-hidden">
        <Link href="https://marketplace-kappa-mocha.vercel.app/">
          <div className="relative w-full h-48">
            <Image
              src="/website1.png"
              alt="Project 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg transform group-hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </Link>
        <h3 className="text-xl font-semibold text-teal-700 mt-4">E-commerce website</h3>
        <p className="text-gray-700 mt-4">
          A responsive website built using Next.js and Sanity for CMS.
        </p>
      </div>

      {/* Project 2 */}
      <div className="bg-white p-6 shadow-lg rounded-lg group overflow-hidden">
        <Link href="https://my-porfolio-eight-phi.vercel.app/">
          <div className="relative w-full h-48">
            <Image
              src="/portfolio.png"
              alt="Project 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg transform group-hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </Link>
        <h3 className="text-xl font-semibold text-teal-700 mt-4">Portfolio</h3>
        <p className="text-gray-700 mt-4">
          A beautiful portfolio website built using modern web technologies.
        </p>
      </div>

      {/* Project 3 */}
      <div className="bg-white p-6 shadow-lg rounded-lg group overflow-hidden">
        <Link href="https://blogweb-olive.vercel.app/">
          <div className="relative w-full h-48">
            <Image
              src="/blog.png"
              alt="Project 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg transform group-hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </Link>
        <h3 className="text-xl font-semibold text-teal-700 mt-4">Blog</h3>
        <p className="text-gray-700 mt-4">
          A blog website designed with an emphasis on user experience.
        </p>
      </div>
    </div>
  </div>
</section>




      {/* Contact Section */}
      <section className="py-16 px-8 bg-teal-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-4">Feel free to reach out to discuss your project or if you have any questions!</p>
        <Link href="/contact">
          <button className="bg-teal-600 hover:bg-teal-500 text-white py-3 px-6 rounded-full text-lg transition duration-300">Contact Me</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
