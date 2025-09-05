import { useState, useRef, useEffect } from "react";
import "./ChatAi.css";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import { div } from "motion/react-client";

const ChatAi = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef(); 

  const generateBotResponse = async (history) => {
    //helper function to update chat history
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };
    try {
      // make the api call to get bot's response
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something went wrong");
      // console.log(data);
      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();
      // console.log(apiResponseText);
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);

    }
  };
  useEffect(() => {
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: "smooth"});
  }, [chatHistory]);



  return (
    <div>
    <button id="chatbot-toggler" onClick={() => setShowChatbot(!showChatbot)}>
        <span className="material-symbols-rounded">mode_comment</span>
        {/* <span className="material-symbols-rounded">close</span> */}
      </button>
    <div className={`${showChatbot ? "block" : "hidden"} fixed bottom-24 right-9  w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto overflow-hidden bg-white rounded-xl md:rounded-2xl shadow-2xl`}>
      
      {/* header */}
      <div className="chatbot-popup bg-primary flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center gap-2 md:gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            className="h-8 w-8 md:h-9 md:w-9 p-1 flex-shrink-0 bg-white rounded-full"
          >
            <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"></path>
          </svg>
          <h2 className="text-white text-base md:text-lg font-semibold">
            Chatbot
          </h2>
        </div>
        <button onClick={() => setShowChatbot(!showChatbot)} className="material-symbols-rounded h-9 w-9 md:h-10 md:w-10 text-white cursor-pointer text-xl md:text-2xl pt-0.5 mr-2 rounded-full transition bg-[#036f3b] hover:bg-primary">
          keyboard_arrow_down
        </button>
      </div>

      {/* chat body */}
      <div ref={chatBodyRef} className="overflow-y-scroll scroll-thin flex flex-col gap-4 md:gap-5 h-[25rem] max-h-[60vh] px-4 md:px-6 py-4 md:py-6">
        {/* bot message */}
        <div className="message bot-message flex gap-2 md:gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 1024 1024"
            className="h-8 w-8 md:h-9 md:w-9 p-1 flex-shrink-0 fill-white self-end mb-0.5 bg-primary rounded-full"
          >
            <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
          </svg>
          <p className="message-text px-3 py-2 md:px-4 md:py-3 max-w-[75%] break-words whitespace-pre-line text-sm bg-[#f6f2ff] rounded-t-xl rounded-bl-md">
            Hey there 👋 <br /> How can I help you today?
          </p>
        </div>

        {/* user message */}
        {
          // render chat history dynamicly
          chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))
        }
      </div>

      {/* chat footer */}
      <div className="sticky bottom-0 w-full bg-white px-4 md:px-6 py-3 md:py-5">
        <ChatForm
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          generateBotResponse={generateBotResponse}
        />
      </div>
    </div>
    </div>
  );
};

export default ChatAi;
