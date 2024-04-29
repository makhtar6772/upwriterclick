import React from "react";

function Faq() {
  return (
    <>
      <section className="faq">
        <div className="centerplease">FAQ accordion</div>
        <br />
        <div className="content max-w-2xl mx-auto">
          <div>
            <input
              type="checkbox"
              id="question1"
              name="q"
              className="questions hidden"
            />
            <label
              htmlFor="question1"
              className="question cursor-pointer block bg-gray-100 border border-gray-200 rounded-lg p-4 pl-12 transition duration-300 hover:bg-gray-200"
            >
              What is Upwriter?
            </label>
            <div className="answers mt-2 ml-12 opacity-0 max-h-0 overflow-hidden transition-all duration-300">
              Upwriter is an AI-powered tool designed to assist freelancers and
              agencies in crafting personalized and professional cover letters
              quickly and efficiently.
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              id="question2"
              name="q"
              className="questions hidden"
            />
            <label
              htmlFor="question2"
              className="question cursor-pointer block bg-gray-100 border border-gray-200 rounded-lg p-4 pl-12 transition duration-300 hover:bg-gray-200"
            >
              How does Upwriter help freelancers and agencies win more clients?
            </label>
            <div className="answers mt-2 ml-12 opacity-0 max-h-0 overflow-hidden transition-all duration-300">
              Upwriter helps freelancers and agencies win more clients by
              analyzing job postings, matching them with user profiles, and
              generating tailored cover letters in seconds. This saves valuable
              time and increases the chances of landing desired projects.
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              id="question3"
              name="q"
              className="questions hidden"
            />
            <label
              htmlFor="question3"
              className="question cursor-pointer block bg-gray-100 border border-gray-200 rounded-lg p-4 pl-12 transition duration-300 hover:bg-gray-200"
            >
              What are the key features of Upwriter?
            </label>
            <div className="answers mt-2 ml-12 opacity-0 max-h-0 overflow-hidden transition-all duration-300">
              The key features of Upwriter include AI-powered job analysis,
              profile matching, personalized cover letter generation,
              time-saving automation, and professional-quality templates.
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              id="question4"
              name="q"
              className="questions hidden"
            />
            <label
              htmlFor="question4"
              className="question cursor-pointer block bg-gray-100 border border-gray-200 rounded-lg p-4 pl-12 transition duration-300 hover:bg-gray-200"
            >
              How does Upwriter generate highly converting cover letters?
            </label>
            <div className="answers mt-2 ml-12 opacity-0 max-h-0 overflow-hidden transition-all duration-300">
              Upwriter generates highly converting cover letters by utilizing
              advanced AI algorithms to analyze job requirements, identify
              relevant skills and experiences from user profiles, and compose
              compelling and personalized content that resonates with potential
              clients.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
