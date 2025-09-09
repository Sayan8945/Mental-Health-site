import React, { useState } from "react";
import thumbmnailImg1 from "../assets/video-thumbnail1.jpg";
import thumbmnailImg2 from "../assets/video-thumbnail2.jpg";
import thumbmnailImg3 from "../assets/video-thumbnail3.jpg";
import thumbmnailImg4 from "../assets/video-thumbnail4.jpg";
import { IoPlay } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { FaCircleArrowRight } from "react-icons/fa6";

const Resources = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleOpenVideo = (url) => {
    setVideoUrl(url);
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
    setVideoUrl("");
  };

  return (
    <div className="bg-[#f7f8fc] pb-16 pt-20 md:px-28 my-10" id="resources">
      <div className="container mx-auto">
        {/* Both videos side by side */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* -------- Video 1 -------- */}
          <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center my-2">
            <div className="w-4/5 relative mb-6">
              {!isVideoPlaying && (
                <>
                  <img
                    src={thumbmnailImg1}
                    alt=""
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <button
                    onClick={() =>
                      handleOpenVideo(
                        "https://www.youtube.com/embed/5JCLyjw8Wtk?si=dDEraPPKBI3he1bG" 
                      )
                    }
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer"
                  >
                    <IoPlay className="size-6 text-white" />
                  </button>
                </>
              )}
            </div>
            <h2 className="text-xl md:text-xl font-title font-bold mb-4 text-center">
              Defeat DEPRESSION and Live Your BEST LIFE
            </h2>
            <p className="text-sm md:text-base mb-6 text-center">
              I'm Arghya Chakraborty, an assistant professor with a passion for knowledge and a thirst for discovery.
            </p>
            <button className="bg-primary text-white py-2 px-4 font-medium rounded-md hover:bg-primary/90">
              <a
                href="https://www.youtube.com/@NavigatingLifeWithArghya"
                className="flex gap-2 items-center justify-center"
              >
                <span>Visit Channel</span>
                <FaCircleArrowRight />
              </a>
            </button>
          </div>

          {/* -------- Video 2 -------- */}
          <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center my-2">
            <div className="w-4/5 relative mb-6">
              {!isVideoPlaying && (
                <>
                  <img
                    src={thumbmnailImg2}
                    alt=""
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <button
                    onClick={() =>
                      handleOpenVideo("https://www.youtube.com/embed/aSWLkMU7Ml4")
                    }
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer"
                  >
                    <IoPlay className="size-6 text-white" />
                  </button>
                </>
              )}
            </div>
            <h3 className="text-xl md:text-xl font-title font-bold mb-4 text-center">
              How to stay focused in studies
            </h3>
            <p className="text-sm md:text-base mb-6 text-center">
              Mahamevnawa Bodhignana Monastery,
Hewagama, Kaduwela, Sri Lanka.
            </p>
            <button className="bg-primary text-white py-2 px-4 font-medium rounded-md hover:bg-primary/90">
              <a
                href="https://www.youtube.com/@BuddhismInEnglish"
                className="flex gap-2 items-center justify-center"
              >
                <span>Visit Channel</span>
                <FaCircleArrowRight />
              </a>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* -------- Video 3 -------- */}
          <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center my-2">
            <div className="w-4/5 relative mb-6">
              {!isVideoPlaying && (
                <>
                  <img
                    src={thumbmnailImg3}
                    alt=""
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <button
                    onClick={() =>
                      handleOpenVideo(
                        "https://www.youtube.com/embed/DulNz2CkoHI?si=PZ5rQj-OAxb0PtSK" 
                      )
                    }
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer"
                  >
                    <IoPlay className="size-6 text-white" />
                  </button>
                </>
              )}
            </div>
            <h2 className="text-xl md:text-xl font-title font-bold mb-4 text-center">
              Short Guided Meditation For Relaxation
            </h2>
            <p className="text-sm md:text-base mb-6 text-center">
              Gurudev Sri Sri Ravi Shankar
 is a humanitarian and spiritual leader, an ambassador of peace and human values.
            </p>
            <button className="bg-primary text-white py-2 px-4 font-medium rounded-md hover:bg-primary/90">
              <a
                href="https://www.youtube.com/@gurudev"
                className="flex gap-2 items-center justify-center"
              >
                <span>Visit Channel</span>
                <FaCircleArrowRight />
              </a>
            </button>
          </div>

          {/* -------- Video 4 -------- */}
          <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center my-2">
            <div className="w-4/5 relative mb-6">
              {!isVideoPlaying && (
                <>
                  <img
                    src={thumbmnailImg4}
                    alt=""
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <button
                    onClick={() =>
                      handleOpenVideo("https://www.youtube.com/embed/sfSDQRdIvTc?si=w1AZOaG3-PQ-3OI7")
                    }
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer"
                  >
                    <IoPlay className="size-6 text-white" />
                  </button>
                </>
              )}
            </div>
            <h3 className="text-xl md:text-xl font-title font-bold mb-4 text-center">
              10 Min Meditation to Quiet Your Thoughts & Relax
            </h3>
            <p className="text-sm md:text-base mb-6 text-center">
             practice this every day, early in the morning and right before going to sleep, for the best experience.
            </p>
            <button className="bg-primary text-white py-2 px-4 font-medium rounded-md hover:bg-primary/90">
              <a
                href="https://www.youtube.com/@satvicyoga"
                className="flex gap-2 items-center justify-center"
              >
                <span>Visit Channel</span>
                <FaCircleArrowRight />
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full h-full flex items-center justify-center p-6">
            <iframe
              className="w-4/5 md:w-2/5 aspect-video rounded-lg"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <button
              onClick={handleCloseVideo}
              className="absolute top-6 right-6 text-white text-2xl cursor-pointer"
            >
              <ImCross />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;
