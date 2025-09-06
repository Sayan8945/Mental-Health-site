import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import serviceImg1 from "../assets/service1.png";
import serviceImg2 from "../assets/service2.png";
import serviceImg3 from "../assets/service3.png";
import serviceImg4 from "../assets/service4.png";

const Services = () => {
  return (
    <div id="services" className="bg-[#f7f8fc] md:px-32">
      <div className="container pt-28 px-4 mx-auto ">
        <div className="text-center space-y-5">
          <h2 className="text-4xl font-bold font-secondary text-heroBg">
            What Can We Do Together
          </h2>
          <p className="md:w-1/2 mx-auto">
            Life brings challenges, but you don’t have to face them alone.
            Together, we can work on strengthening relationships, improving
            communication, building resilience, and finding peace within.
          </p>
          {/* service category */}
          <Tabs>
            <TabList className="flex flex-wrap justify-evenly items-center md:gap-8 gap-4">
              <Tab>Couple Counseling</Tab>
              <Tab>Can’t Focus</Tab>
              <Tab>Feeling Stuck</Tab>
              <Tab>Self-distructed</Tab>
            </TabList>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md-w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Couple Counseling
                  </h3>
                  <p className="mb-8">
                    Offers a safe space for partners to talk openly, improve
                    understanding, and strengthen their bond.<br/> It helps in
                    resolving conflicts, enhancing communication, and building a
                    healthier, happier relationship together.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Improves communication and understanding between partners
                    </li>
                    <li>Helps resolve conflicts in a healthy way</li>
                    <li>Strengthens emotional connection and trust</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={serviceImg1}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover md:h-[446px]"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md-w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Can’t Focus
                  </h3>
                  <p className="mb-8">
                    Struggling to concentrate can feel frustrating and
                    exhausting.<br/> Counseling can help uncover what’s affecting
                    your focus and guide you with tools to improve attention and
                    mental clarity.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Identifies underlying causes of distraction</li>
                    <li>Teaches strategies to improve concentration</li>
                    <li>Reduces stress and boosts productivity</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={serviceImg2}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover md:h-[446px]"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className=" md-w-1/2 bg-white rounded-lg p-12 font-secondar">
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Feeling Stuck
                  </h3>
                  <p className="mb-8">
                    At times, life may feel overwhelming or directionless,
                    leaving you unsure of the next step.<br/> Counseling can help you
                    gain clarity, build confidence, and move forward with
                    purpose.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Provides clarity and fresh perspective</li>
                    <li>Helps set realistic goals and direction</li>
                    <li>Builds motivation and confidence to take action</li>
                  </ul>
                </div>
                <div className="md:w-1/2 ">
                  <img
                    src={serviceImg3}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover md:h-[446px]"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md-w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Self-distructed
                  </h3>
                  <p className="mb-8">
                    Sometimes we may fall into habits or thoughts that hurt us,
                    even without realizing it.<br/> Counseling offers support to
                    break these cycles, understand the root causes, and find
                    healthier ways to cope.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Identifies negative patterns and their triggers</li>
                    <li>Encourages healthier coping strategies</li>
                    <li>Builds self-worth and a more positive outlook</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={serviceImg4}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover md:h-[446px]"
                  />
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
