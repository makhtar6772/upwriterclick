import React from "react";
import img from './modules/images/site.jpg'
function HeroSection() {
  return (
    <>
      <section className="max-w-full mx-auto px-4 py-16 md:min-h-[calc(75vh-100px)] grid md:grid-cols-2 gap-0">
        <div className="flex flex-col justify-center items-center md:items-start md:text-left ml-40">
          <h1 className="text-3xl font-medium text-dark-green">
            <span className="font-bold">Upwriter:</span> Elevating Cover Letters
            <br />
            <span className="font-bold text-green">Freelancer's Assistant</span>
          </h1>
          <p className="text-wrap text-text-color mt-8">
            Upwriter: Your AI-powered Upwork cover letter assistant. Craft
            <br></br>
            personalized cover letters in seconds and stand out from the
            <br></br>
            competition with Upwriter
          </p>
        </div>
        <div className="relative flex justify-center items-center">
          <img src={img} alt="DeskTopComputer" />
        </div>
      </section>
      <div className="w-full bg-green-400 h-14"></div>
    </>
  );
}

export default HeroSection;
