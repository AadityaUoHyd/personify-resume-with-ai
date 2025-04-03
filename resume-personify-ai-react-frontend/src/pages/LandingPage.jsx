import React from "react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    text: `"This 'Resume Personify' saved me so much time! My resume looks professional and got me multiple interviews. The AI-driven suggestions really helped me tailor my resume to specific job roles. Highly recommended!"`,
    name: "Rohan Dev",
    role: "Software Engineer",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    text: `"I love the templates and the ease of use. I never thought creating a resume could be this simple. Within minutes, I had a well-structured and beautifully designed resume. This is a game-changer!"`,
    name: "Shreya Jha",
    role: "Marketing Specialist",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    text: `"An effortless way to craft a professional resume with AI. The intuitive interface and smart recommendations make the entire process smooth and efficient. It saved me hours of formatting."`,
    name: "Anushka Kumari",
    role: "HR Manager",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    text: `"Build a polished, professional resume in no time with excellent functionality. The automated AI-generated bullet points saved me so much effort. Absolutely love it!"`,
    name: "Gukesh Gupta",
    role: "Software Tester",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    text: `"This tool made my resume-building process stress-free. The AI suggestions were spot on, and it adjusted the content based on my experience level. Best resume builder out there!"`,
    name: "Aditya Mehta",
    role: "Data Analyst",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    text: `"I was able to create a stunning resume in minutes. The formatting and structure are just perfect, and the AI automatically optimized my content for ATS (Applicant Tracking Systems). I highly recommend it!"`,
    name: "Neha Sharma",
    role: "Graphic Designer",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

const LandingPage = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-base-200 flex items-center">
        <div className="hero-content text-center">
          <div className="max-w-2xl">

            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-800 to-white bg-clip-text text-transparent animate-gradient">
              AI Powered Resume Creation
            </h1>

            <p className="py-4 text-lg text-base-content">
              Craft Your Ideal Resume with AI. Build a professional resume in
              minutes. Just describe yourself, and our AI will do the rest!
            </p>
            <Link
              to={"/generate-resume"}
              className="btn btn-lg text-white font-bold px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-800 to-white animate-gradient transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-125">
              Get Started
            </Link>


          </div>
        </div>
      </section>

      {/* Testimonials with Horizontal Scroll */}
      <section className="py-8 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Hear from Our Users
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-scroll">
              {testimonials.concat(testimonials).map((testimonial, index) => (
                <div
                  key={index}
                  className="card bg-base-100 shadow-xl w-80 h-60 mx-4 flex-shrink-0 flex flex-col justify-between p-4 overflow-hidden"
                >
                  <div className="flex-1">
                    <p className="text-sm text-pink-500 text-wrap break-words">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={testimonial.img} alt="User" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-yellow-300 ">{testimonial.name}</h4>
                      <p className="text-xs text-grey-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Keyframes for Animation */}
      <style>
        {`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          white-space: nowrap;
          animation: scroll 20s linear infinite;
        }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
