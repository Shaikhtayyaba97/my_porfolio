'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';


interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  // Handle change for form inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send data to Formspree endpoint
    const response = await fetch('https://formspree.io/f/moveeaon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Thank you for your message!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } else {
      setStatus('Oops! Something went wrong.');
    }
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-lg p-6 bg-white rounded-xl shadow-lg space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-800">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-lg font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-medium text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
              rows={4}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p
            className={`mt-4 text-center text-lg font-semibold ${
              status === 'Thank you for your message!' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {status}
          </p>
        )}

        {/* Email Link */}
        <div className="flex justify-center mt-4">
          <a
            href={`mailto:${formData.email}`}
            className="text-teal-600 hover:text-teal-700 font-semibold text-lg"
          >
            Send an Email
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="http://linkedin.com/in/tayyaba-shahbaz-801a322b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-700 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/share/1DG5xVpfmy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-700 text-2xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/+923153066596"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-700 text-2xl"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
