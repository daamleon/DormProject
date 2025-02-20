import React from "react";
import Info from "./info";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="w-full">
 
      <div
        className="w-full t-0 bg-center absolute"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1593642634315-48f5414c3ad9")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Hero />
      </div>

      <div className="relative z-10 bg-white text-black py-10">
        <Info />
      </div>
    </div>
  );
}
