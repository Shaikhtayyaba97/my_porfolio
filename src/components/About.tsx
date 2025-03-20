'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-3xl p-8 bg-white rounded-xl shadow-xl space-y-8">
        {/* Heading Section */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">About Me</h1>
        
        {/* Profile Image Section */}
        <div className="flex justify-center mb-6">
          <Image
            src="/profile.png"
            alt="Your Name"
            width={50}
            height={50}
            className="rounded-full w-32 h-32 object-cover shadow-md"
          />
        </div>

        {/* Professional Timeline */}
        <div className="space-y-4 text-lg text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-teal-600">Career Journey</h2>
            <ul className="list-disc ml-6">
              <li>
                <strong>Matriculation (2015)</strong>: Completed my high school education.
              </li>
              <li>
                <strong>Nursing Career (2015 - 2019)</strong>: Pursued nursing and gained hands-on experience in healthcare.
              </li>
              <li>
                <strong>Programming Shift (2024)</strong>: Transitioned to programming after discovering my passion for technology.
              </li>
            </ul>
          </div>

          {/* Skills and Technologies Section */}
          <div>
            <h2 className="text-xl font-semibold text-teal-600">Skills & Technologies</h2>
            <ul className="list-disc ml-6">
              <li>HTML, CSS, JavaScript (TypeScript)</li>
              <li>Next.js, Sanity, Tailwind CSS</li>
              <li>Python (currently learning)</li>
            </ul>
          </div>

          {/* Current Learning */}
          <div>
            <h2 className="text-xl font-semibold text-teal-600">Currently Learning</h2>
            <p className="text-lg">I'm currently expanding my skills in Python and full-stack development.</p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-6">
            <Link
              href="http://linkedin.com/in/tayyaba-shahbaz-801a322b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="inline-block text-lg font-semibold text-teal-600 hover:text-teal-700"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
