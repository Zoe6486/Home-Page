import React from "react";
import Typewriter from "typewriter-effect";
import SocialLinks from "../widgets/SocialLinks";

function Home() {
  return (
    <>
      <div className="flex w-full h-[100vh] flex-col items-center justify-center  gap-12">
        {/* center type animation */}
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="flex items-center justify-center gap-3 text-2xl font-bold xs:text-3xl sm:text-4xl md:text-5xl">
            <span>Hi, I am</span>
            <span className="text-white ">
              <Typewriter
                options={{
                  strings: [
                    "Ziying Zhu",
                    "a Web Designer",
                    "a Front-end Developer",
                  ],
                  autoStart: true,
                  delay: 150,
                  loop: true,
                }}
              />
            </span>
          </div>

          <p className="text-xs text-center text-transparent xs:text-sm sm:text-base md:text-xl bg-clip-text bg-gradient-to-r from-textColor to-mainColor ">
            I am a frontend web developer. <br />
            I can provide clean code and pixel perfect design. <br />I also make
            website more & more interactive with web animations.
          </p>
        </div>

        {/* bottom links */}
        <SocialLinks />
      </div>
    </>
  );
}

export default Home;
