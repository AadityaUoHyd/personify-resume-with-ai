import React from "react";

const Services = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center px-6 py-12">
      <h2 className="text-4xl mb-8 font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-white bg-clip-text text-transparent animate-gradient">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Service 1 - AI Resume Builder */}
        <div className="card bg-base-100 shadow-xl p-6">
          <div className="flex items-center justify-center">
            <span className="text-5xl text-primary">📝</span>
          </div>
          <h3 className="text-2xl font-semibold mt-4 text-center">AI Resume Suggestion</h3>
          <p className="text-gray-600 text-center mt-2">
            Generate ATS-friendly resumes using our AI-powered builder with optimized templates.
          </p>
        </div>

        {/* Service 2 - Customizable Templates */}
        <div className="card bg-base-100 shadow-xl p-6">
          <div className="flex items-center justify-center">
            <span className="text-5xl text-primary">📑</span>
          </div>
          <h3 className="text-2xl font-semibold mt-4 text-center">Customizable Templates</h3>
          <p className="text-gray-600 text-center mt-2">
            Choose from a variety of modern, professional templates tailored to different industries.
          </p>
        </div>

        {/* Service 3 - Industry-Specific Suggestions */}
        <div className="card bg-base-100 shadow-xl p-6">
          <div className="flex items-center justify-center">
            <span className="text-5xl text-primary">💡</span>
          </div>
          <h3 className="text-2xl font-semibold mt-4 text-center">Industry-Specific Insights</h3>
          <p className="text-gray-600 text-center mt-2">
            Get AI-powered suggestions based on your industry, job role, and experience level.
          </p>
        </div>

        {/* Service 4 - AI-Powered Cover Letter */}
        <div className="card bg-base-100 shadow-xl p-6">
          <div className="flex items-center justify-center">
            <span className="text-5xl text-primary">✉️</span>
          </div>
          <h3 className="text-2xl font-semibold mt-4 text-center">AI Cover Letter Generator</h3>
          <p className="text-gray-600 text-center mt-2">
            Craft personalized cover letters using AI-generated professional writing suggestions.
          </p>
        </div>

        {/* Service 5 - Resume Review & Score */}
        <div className="card bg-base-100 shadow-xl p-6">
          <div className="flex items-center justify-center">
            <span className="text-5xl text-primary">📊</span>
          </div>
          <h3 className="text-2xl font-semibold mt-4 text-center">Resume Review & Score</h3>
          <p className="text-gray-600 text-center mt-2">
            Instantly analyze your resume and receive actionable improvement tips.
          </p>
        </div>

        {/* Service 6 - One-Click Export */}
        <div className="card bg-base-100 shadow-xl p-6">
          <div className="flex items-center justify-center">
            <span className="text-5xl text-primary">📂</span>
          </div>
          <h3 className="text-2xl font-semibold mt-4 text-center">One-Click Export</h3>
          <p className="text-gray-600 text-center mt-2">
            Export your resume in multiple formats (PDF, Word) with a single click.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
