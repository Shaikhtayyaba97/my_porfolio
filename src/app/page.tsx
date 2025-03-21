import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/Hero';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-16 px-6 sm:px-12 md:px-20 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-700 mb-6">About Me</h2>
          <p className="text-lg text-gray-700">
            I am a dedicated web developer with a strong background in modern technologies like Next.js and Sanity.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 sm:px-12 md:px-20 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-700 mb-8">My Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Web Development", desc: "I create responsive, dynamic, and modern websites.", link: "/#portfolio" },
              { title: "UI/UX Design", desc: "Designing clean interfaces for enhanced user experience.", link: "/#portfolio" },
              { title: "SEO Optimization", desc: "Helping websites rank higher with SEO strategies.", link: "/#portfolio" }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-teal-700">{service.title}</h3>
                <p className="text-gray-700 mt-4">{service.desc}</p>
                <Link href={service.link}>
                  <button className="mt-4 bg-teal-600 hover:bg-teal-500 text-white py-2 px-4 rounded-full transition duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6 sm:px-12 md:px-20 bg-gray-100 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-700 mb-8">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { img: "/website1.png", title: "E-commerce Website", link: "https://marketplace-kappa-mocha.vercel.app/" },
              { img: "/portfolio.png", title: "Portfolio", link: "https://my-porfolio-eight-phi.vercel.app/" },
              { img: "/blog.png", title: "Blog", link: "https://blogweb-olive.vercel.app/" }
            ].map((project, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg overflow-hidden">
                <Link href={project.link}>
                  <div className="relative w-full h-48">
                    <Image 
                      src={project.img} 
                      alt={project.title} 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-lg transform hover:scale-105 transition duration-300 ease-in-out" 
                    />
                  </div>
                </Link>
                <h3 className="text-xl font-semibold text-teal-700 mt-4">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 sm:px-12 md:px-20 bg-teal-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-4">Feel free to reach out for project discussions or inquiries!</p>
        <Link href="/contact">
          <button className="bg-teal-600 hover:bg-teal-500 text-white py-3 px-6 rounded-full text-lg transition duration-300">
            Contact Me
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;