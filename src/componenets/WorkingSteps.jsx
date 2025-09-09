import React from "react";

const WorkingSteps = () => {
  return (
    <div className="relative bg-cover bg-center py-12 bg-working-img" id="about">
      <div className="absolute inset-0 bg-heroBg bg-opacity-90"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="text-white text-center mb-20">
          <h2 className="text-4xl font-bold font-title mb-4">How We Work</h2>
          <p className="text-lg md:w-1/2 w-full mx-auto">
            At MediBloom, we make mental wellness simple, private, and accessible for every student. Here’s how it works:


          </p>
        </div>

        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8">
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-12 rounded-full flex items-center justify-center">
              1
            </div>
            <h3 className="text-lg font-medium mt-8">Fill a Form</h3>
            <p className="my-2">
              
Start by answering a few quick questions about your mental health needs and preferences. This helps us understand the kind of support you’re looking for.

            </p>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-12 rounded-full flex items-center justify-center">
              2
            </div>
            <h3 className="text-lg font-medium mt-8">Get Matched</h3>
            <p className="my-2">
              Based on your inputs, our system connects you with the right resources—whether it’s self-help tools, peer support, or a professional counselor.

            </p>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-12 rounded-full flex items-center justify-center">
              3
            </div>
            <h3 className="text-lg font-medium mt-8">Scheduled</h3>
            <p className="my-2">
              Book and attend your session at a time that works best for you. You can also access continuous support through chat, resources, and wellness activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingSteps;
