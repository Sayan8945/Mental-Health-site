import React, { useState } from "react";
import thumbmnailImg1 from "../assets/video-thumbnail1.jpg";
import thumbmnailImg2 from "../assets/video-thumbnail2.jpg";
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
    <div className="bg-[#f7f8fc] pb-16 pt-20 md:px-28" id="resources">
      <div className="container mx-auto">
        <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* left side */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {!isVideoPlaying ? (
              <div className="relative">
                <img
                  src={thumbmnailImg1}
                  alt=""
                  className="w-full md:h[446px] h-auto rounded-lg object-cover"
                />
                <button
                  onClick={() =>
                    handleOpenVideo(
                      "https://www.youtube.com/embed/qzibcjz1iT0?si=uzwRyuTcM79UsUaw"
                    )
                  }
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary  p-3 rounded-full shadow-lg cursor-pointer"
                >
                  <IoPlay className="size-8 text-white" />
                </button>
              </div>
            ) : null}
          </div>
          {/* right side */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl md:text-3xl font-secondary font-bold mb-4 leading-snug">
              Individual consult and therapy
            </h2>
            <p className="text-base md:text-lg mb-8">
              sfaewhbfjfaew era kerl bheral sfjiog jerj gaerh er ghera fhewlfhh
              rwh fr 34hq2rtbhlerkj berkl bterk btlekr...
            </p>
            <button className="bg-primary text-white py-3 px-6 font-medium rounded-md hover:bg-primary/90">
              <a
                href="https://www.youtube.com/@NavigatingLifeWithArghya"
                className="flex gap-2 items-center justify-center"
              >
                <span>Visit Channel</span>
                <FaCircleArrowRight />
              </a>
            </button>
          </div>
        </div>

        {isVideoPlaying && (
          <div className="fixed inset-0 bg-black bg-opacity-75 items-center justify-center z-50">
            <div className="relative w-full h-full flex items-center justify-center">
              <iframe
                width="560"
                height="315"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              >
                <ImCross />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="container mx-auto">
        <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* left side */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {!isVideoPlaying ? (
              <div className="relative">
                <img
                  src={thumbmnailImg2}
                  alt=""
                  className="w-full md:h[446px] h-auto rounded-lg object-cover"
                />
                <button
                  onClick={() =>
                    handleOpenVideo("https://www.youtube.com/embed/aSWLkMU7Ml4")
                  }
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary  p-3 rounded-full shadow-lg cursor-pointer"
                >
                  <IoPlay className="size-8 text-white" />
                </button>
              </div>
            ) : null}
          </div>
          {/* right side */}
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl md:text-3xl font-secondary font-bold mb-4 leading-snug">
              Individual consult and therapy
            </h3>
            <p className="text-base md:text-lg mb-8">
              sfaewhbfjfaew era kerl bheral sfjiog jerj gaerh er ghera fhewlfhh
              rwh fr 34hq2rtbhlerkj berkl bterk btlekr...
            </p>
            <button className="bg-primary text-white py-3 px-6 font-medium rounded-md hover:bg-primary/90">
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

        {isVideoPlaying && (
          <div className="fixed inset-0 bg-black bg-opacity-75 items-center justify-center z-50">
            <div className="relative w-full h-full flex items-center justify-center">
              <iframe
                width="560"
                height="315"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              >
                <ImCross />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
