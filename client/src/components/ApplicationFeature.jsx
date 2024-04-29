import React from "react";

const ApplicationFeature = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto mt-10">
      <div className="feature bg-white border border-gray-300 rounded-lg transition-colors duration-300 hover:bg-gray-200 p-6">
        <h6 className="feature-title text-xl font-semibold mb-4">
          Upwork Job Alerts
        </h6>
        <p className="feature-description text-base leading-relaxed">
          Get an edge over other applicants and be the first to apply for the
          best jobs with Upwork Job Alerts. Don't miss any job opportunity that
          could be the perfect fit for you!
        </p>
      </div>
      <div className="feature bg-white border border-gray-300 rounded-lg transition-colors duration-300 hover:bg-gray-200 p-6">
        <h6 className="feature-title text-xl font-semibold mb-4">
          Custom Keyword Alerts
        </h6>
        <p className="feature-description text-base leading-relaxed">
          Put yourself in control of your job search with Custom Keyword Alerts.
          Enter the keywords that match your skills and get notifications of
          relevant jobs before anyone else.
        </p>
      </div>
      <div className="feature bg-white border border-gray-300 rounded-lg transition-colors duration-300 hover:bg-gray-200 p-6">
        <h6 className="feature-title text-xl font-semibold mb-4">
          Google Chrome Extension
        </h6>
        <p className="feature-description text-base leading-relaxed">
          Get the perfect cover letter for jobs in one click with the Google
          Chrome Extension. Make sure your application stands out and get the
          job you''ve always wanted!
        </p>
      </div>
      <div className="feature bg-white border border-gray-300 rounded-lg transition-colors duration-300 hover:bg-gray-200 p-6">
        <h6 className="feature-title text-xl font-semibold mb-4">
          AI Templates
        </h6>
        <p className="feature-description text-base leading-relaxed">
          Get instant job alerts directly on WhatsApp! Don't miss out on any
          great opportunity and stay on top of your job search with
          notifications sent straight to your WhatsApp.
        </p>
      </div>
      <div className="feature bg-white border border-gray-300 rounded-lg transition-colors duration-300 hover:bg-gray-200 p-6">
        <h6 className="feature-title text-xl font-semibold mb-4">AI Mentor</h6>
        <p className="feature-description text-base leading-relaxed">
          Get the best freelancing advice from AI Mentor. Get personalized tips
          and guidance tailored to your skills and experience, so you can make
          the most out of your career!
        </p>
      </div>
      <div className="feature bg-white border border-gray-300 rounded-lg transition-colors duration-300 hover:bg-gray-200 p-6">
        <h6 className="feature-title text-xl font-semibold mb-4">
          AI Proposal Writer
        </h6>
        <p className="feature-description text-base leading-relaxed">
          Get personalized cover letters for Jobs in one click with AI Cover
          Letter Writer. Don't waste time and stand out from the crowd with the
          most compelling cover letter ever!
        </p>
      </div>
    </section>
  );
};

export default ApplicationFeature;
