import { Paperclip, Search, BookOpen, Mic } from "lucide-react";

export default function Home() {
  return (
    <div className=" flex flex-col mt-90 items-center justify-center bg-white dark:bg-[#111111] text-black dark:text-white px-4 transition-colors ">
      
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl  mb-10">
        Chat with your x-mate
      </h1>

      {/* Input Container */}
      <div className="
        w-full max-w-3xl 
        rounded-3xl px-6 py-4 
        flex items-center gap-4 
        shadow border
        bg-white text-black border-gray-300
        dark:bg-[#242424] dark:text-white dark:border-white/10
        transition-colors
      ">
        
        {/* Input */}
        <input
          type="text"
          placeholder="Ask anything"
          className="
            flex-1 bg-transparent border-none outline-none 
            text-black placeholder-gray-500 
            dark:text-white dark:placeholder-gray-400 
            transition-colors
          "
        />

        {/* Left Action Buttons */}
        <div className="flex items-center gap-2 hidden md:flex">
          <button className="flex items-center gap-1 px-3 py-1.5 
              bg-black/10 hover:bg-black/20 text-black
              dark:bg-white/10 dark:hover:bg-white/20 dark:text-white
              rounded-full text-xs transition-colors">
            <Paperclip size={14} />
            Attach
          </button>

          <button className="flex items-center gap-1 px-3 py-1.5 
              bg-black/10 hover:bg-black/20 text-black
              dark:bg-white/10 dark:hover:bg-white/20 dark:text-white
              rounded-full text-xs transition-colors">
            <Search size={14} />
            Search
          </button>

          <button className="flex items-center gap-1 px-3 py-1.5 
              bg-black/10 hover:bg-black/20 text-black
              dark:bg-white/10 dark:hover:bg-white/20 dark:text-white
              rounded-full text-xs transition-colors">
            <BookOpen size={14} />
            Study
          </button>
        </div>

        {/* Voice Button */}
        <button className="
            px-4 py-1.5 
            bg-black/10 hover:bg-black/20 text-black
            dark:bg-white/10 dark:hover:bg-white/20 dark:text-white
            rounded-full text-xs flex items-center gap-1 transition-colors
        ">
          <Mic size={16} />
          Voice
        </button>

      </div>
    </div>
  );
}
