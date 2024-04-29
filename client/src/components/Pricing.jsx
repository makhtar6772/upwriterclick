import React from "react";
import PricingCard from "./PricingCard";
 // Import the PricingCard component

const ParentComponent = () => {
  return (
    <section className="pricing">
      <div className="wrapper flex justify-center gap-8 md:gap-12 max-w-6xl mx-auto mt-10">
        {/* First Pricing Card */}
        <PricingCard
          title="Basic"
          price="$0"
          features={[
            "Unlimited Jobs Alerts",
            "Custom Keywords Alerts",
            "WhatsApp Integration",
            "2 AI Proposals",
            "Powered by GPT-4",
            "20 AI Proposals",
            "Automatic Proposal Submission",
          ]}
          buttonText="Choose Plan"
        />

        {/* Second Pricing Card */}
        <PricingCard
          title="Standard"
          price="$2"
          features={[
            "Unlimited Jobs Alerts",
            "Custom Keywords Alerts",
            "WhatsApp Integration",
            "15 AI Proposals",
            "Powered by GPT-4",
            "30 AI Proposals",
            "Automatic Proposal Submission",
          ]}
          buttonText="Choose Plan"
        />

        {/* Third Pricing Card */}
        <PricingCard
          title="Premium"
          price="$5"
          features={[
            "Unlimited Jobs Alerts",
            "Custom Keywords Alerts",
            "WhatsApp Integration",
            "30 AI Proposals",
            "Powered by GPT-4",
            "Automatic Proposal Submission",
          ]}
          buttonText="Choose Plan"
        />
      </div>
    </section>
  );
};

export default ParentComponent;
