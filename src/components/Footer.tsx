'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white p-5 mt-10">
      <div className="flex justify-center">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
