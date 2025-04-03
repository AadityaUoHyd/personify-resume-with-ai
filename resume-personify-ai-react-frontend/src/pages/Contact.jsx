import React from "react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center px-6 py-12">
      <h2 className="text-4xl mb-4 font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-white bg-clip-text text-transparent animate-gradient">Contact Us</h2>
      <p className="text-gray-300 text-center mb-10">
        Have any questions? Feel free to reach out!
      </p>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Contact Information */}
        <div className="bg-base-100 shadow-xl rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-pink-300 mb-4">
            Reach out to us for any queries, feedback, or support.
          </p>
          <div className="space-y-3">
            <p className="flex items-center">
              📍 <span className="ml-2">AB Chatterjee, Gachibowli, Hyderabad, India</span>
            </p>
            <p className="flex items-center">
              ✉️ <span className="ml-2">support@resumepersonify.com</span>
            </p>
            <p className="flex items-center">
              📞 <span className="ml-2">+91 0000000000</span>
            </p>
          </div>

          {/* Google Map Embed */}
          <div className="mt-6">
            <iframe
              className="w-full rounded-lg shadow-lg"
              height="200"
              src="https://www.google.com/maps/embed?..."
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-base-100 shadow-xl rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="btn btn-md text-white font-bold px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-800 to-white animate-gradient transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-125 w-full">
              Send Message
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
