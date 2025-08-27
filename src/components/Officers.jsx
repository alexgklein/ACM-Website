import * as React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { FaLinkedin } from "react-icons/fa";
import "swiper/css/pagination";

function Officers() {
  const officers = [
    {
      name: "Alexander Klein",
      position: "President",
      linkedin: "https://www.linkedin.com/in/alexanderkleincs/",
      imgSrc: require("../assets/headshots/Alexander+Headshot.png"),
      bio: "Former Solutions Engineer @ Deloitte, Former Software Engineer Intern @ Akima",
    },
    {
      name: "Alexander Fisher", // Same picture
      position: "Internal Vice President",
      linkedin: "https://www.linkedin.com/in/fisheralexander03/",
      imgSrc: require("../assets/headshots/Fisher+Headshot.jpg"),
      bio: "Former SWE @ BNY",
    },
    {
      name: "Jason Tenczar", // Keep
      position: "External Vice President",
      linkedin: "https://www.linkedin.com/in/jasontenczar/",
      imgSrc: require("../assets/headshots/Jason+Headshot.jpg"),
      bio: "Former SRE @ Disney, Former Software Engineer Intern @ Integris Group",
    },
    {
      name: "Kevin Newbold",
      position: "Secretary",
      linkedin: "https://www.linkedin.com/in/newbold-kevin/",
      imgSrc: require("../assets/headshots/Kevin+Headshot.jpg"),
      bio: "Former Software Engineer Intern @ DS2",
    },
    {
      name: "Anteneh Zewdie",
      position: "Treasurer",
      linkedin: "https://www.linkedin.com/in/antenehzewdie/",
      imgSrc: require("../assets/headshots/Anteneh+Headshot.jpg"),
      bio: "Former Software Engineer Intern @ Datadog",
    },
    {
      name: "Alvin Cabe",
      position: "Marketing Lead",
      linkedin: "https://www.linkedin.com/in/alvin-cabe/",
      imgSrc: require("../assets/headshots/Alvin+Headshot.png"),
      bio: "",
    },
    {
      name: "Evan Warnock",
      position: "Marketing Lead",
      imgSrc: require("../assets/headshots/Evan+Headshot.png"),
      linkedin: "https://www.linkedin.com/in/evan-warnock/",
      bio: "",
    },
    {
      name: "Jaedon Taylor",
      position: "VP of Professional Affairs",
      imgSrc: require("../assets/headshots/Jaedon+Headshot.jpeg"),
      linkedin: "https://www.linkedin.com/in/jaedon-taylor/",
      bio: "Prev SWE @ Datadog",
    },
    {
      name: "Sanjeev Kamath",
      position: "Workshop Lead",
      linkedin: "https://www.linkedin.com/in/sanjeev-kamath/",
      imgSrc: require("../assets/headshots/Sanjeev+Headshot.jpg"),
      bio: "Prev SWE Intern @ ABB; Study Abroad @ ZHAW 🇨🇭",
    },
    {
      name: "Jacob Frankel",
      position: "Workshop Lead",
      linkedin: "https://www.linkedin.com/in/frankelj/",
      imgSrc: require("../assets/headshots/Jacob+Headshot.png"),
      bio: "Prev @ Siemens Energy",
    },
    {
      name: "Anilov Villanueva",
      position: "Social Lead",
      linkedin: "https://www.linkedin.com/in/anilovvillanueva/",
      imgSrc: require("../assets/headshots/Anilov+Headshot.png"),
      bio: "",
    },
    {
      name: "Harshil Rathod",
      position: "Social Lead",
      linkedin: "https://www.linkedin.com/in/rathodharshil/",
      imgSrc: require("../assets/headshots/Harshil+Headshot.png"),
      bio: "",
    },
  ];

  const [activeOfficer, setActiveOfficer] = useState(officers[0]);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 640 || window.innerHeight < 632
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640 || window.innerHeight < 632);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerClass = isMobile ? "flexMobile" : "flexDefault";
  const officerClass = isMobile ? "officerMobile" : "officerCard";

  const mobileInfoStyle = isMobile ? { height: "50vh", overflowY: "auto" } : {};

  return (
    <div className="officerCardBg">
      <div className={containerClass}>
        <div
          style={mobileInfoStyle}
          className="bg-[#0000008e] sm:w-1/2 flex-col items-center justify-center"
        >
          <h1 className="text-center text-white text-4xl py-8">
            Meet The Officers
          </h1>
          <div className="text-center">
            <h2 className="text-5xl gradient-text2 p-3">
              {activeOfficer.name}
            </h2>
            <p className="text-3xl gradient-text1 p-3">
              {activeOfficer.position}
            </p>
            <div className="flex justify-center">
              <p className="dm-mono text-sm p-3 sm:text-md md:text-lg outline-gray-500 w-5/6 text-center sm:w-1/2">
                {activeOfficer.bio}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#0000008e] pt-10 pb-10 sm:w-1/2 ">
          <Swiper
            pagination={true}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            spaceBetween={30}
            onSlideChange={(swiper) =>
              setActiveOfficer(officers[swiper.activeIndex])
            }
          >
            {officers.map((officer, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center p-4">
                  <div className={officerClass}>
                    <div className="flex flex-col items-center">
                      <img
                        src={officer.imgSrc}
                        alt={officer.name}
                        className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover mb-4"
                      />
                      <h2 className="text-md sm:text-2xl text-white text-center">
                        {officer.name}
                      </h2>
                      <a
                        href={officer.linkedin}
                        target="_blank"
                        className="text-4x hover:scale-110 linked-in duration-300 mt-2 p-2"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Officers;
