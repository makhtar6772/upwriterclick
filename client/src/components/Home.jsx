import { React, useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ApplicationFeature from "./ApplicationFeature";
import ParentComponent from "./Pricing";
import Faq from "./Faq";
import Footer from "./Footer";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    setIsLoggedIn(false);
    localStorage.removeItem("userId");
  };
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <HeroSection />
      <ApplicationFeature />
      <ParentComponent />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
