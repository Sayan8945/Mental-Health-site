import { useMemo } from "react";
import { quotes } from "../data/quotes";
import { BsFillChatQuoteFill } from "react-icons/bs";

const Quotes = () => {
  const getRandomQuotes = (arr, count = 4) => {
    // shuffle and pick 'count' items
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  let selectedQuotes = getRandomQuotes(quotes);
  const generateQuotes = () => {
    selectedQuotes = getRandomQuotes(quotes);
  }
  // console.log(selectedQuotes);

  return (
    <div id="testimonial" className="bg-[#f7f8fc] py-12">
      <div className="container mx-auto pb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-title font- mb-3">
            Fuel your mind with gentle wisdom
          </h2>
          <p className="text-sm md:text-lg mb-12 md:w-1/2 mx-auto">
            In this space, we share timeless thoughts from great leaders and visionaries to bring you clarity, peace, and encouragement. Let these words be a quiet reminder that growth begins within, and every day holds the chance for renewal.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl px-4 md:px-8 py-10 md:mx-auto mx-5">
          {selectedQuotes.map((slecQuote, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 ">
                <BsFillChatQuoteFill className="size-8 md:size-12 text-primary md:mx-0 ml-2" />
              </div>

              <div className="flex flex-col space-y-3 mb-4">
                <p className="font-apple text-base md:text-lg leading-relaxed mb-2">
                  {slecQuote.Quote}
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={slecQuote.image}
                    alt={slecQuote.name}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-sm"
                  />
                  <div>
                    <p className="font-semibold text-sm md:text-base">
                      {slecQuote.name}
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {slecQuote.identity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quotes;
