import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const reportingMedia = [
  {
    img: "/shake.svg",
    title: "Shake & Report bugs directly from your device",
    desc: "Quash SDK gets integrated with your build app to enable on-the-go reporting",
  },
  {
    img: "/logs.svg",
    title: "Get Auto-captured logs & session recordings",
    desc: "Eliminate the process of recording and adding attachments manually in a ticket",
  },
  {
    img: "/notes.svg",
    title: "Attach voice notes and comments",
    desc: "Provide extensive details about the issue by simply recording your voice",
  },
];

const Reporting = () => {
  return (
    <div className="flex px-4 pb-16 md:pb-12  flex-col justify-center items-center">
      <div className="relative w-full flex justify-center items-center flex-col overflow-hidden">
        {/* <Image
          src="/reporting-gradient.svg"
          alt="reporting-gradient"
          width={192}
          height={192}
          className=""
        /> */}
        <div className="grad-report h-[192px] w-[192px] md:h-[400px] md:w-[400px] opacity-[34%] md:opacity-[20%]"></div>
        <div className="w-full h-[48px] md:h-[200px] absolute top-0 bg-black"></div>
        <div className="absolute top-[48px] md:top-[200px] flex flex-col justify-center items-center gap-12 md:gap-[116px]">
          <div className="report-gradient-line h-[2px] w-[208px] md:h-[4px] md:w-[400px]" />
          <span className="report-gradient-text text-[32px] md:text-[60px] md:font-[600] leadind-normal">
            Reporting
          </span>
        </div>
      </div>
      <span className="text-[#ECECEE] text-[16px] font-[300] md:text-[24px] md:mt-5 md:font-[400] w-[236px] text-center leading-normal pb-20 md:pb-[170px] md:w-full">
        Raise comprehensive tickets with minimal effort
      </span>
      <div className="hidden justify-center items-center gap-10 px-[116px]   md:flex">
        {reportingMedia.map((media, index) => (
          <div className="card flex flex-col items-center justify-between md:gap-[70px] md:px-[17px] md:pt-[38px] bg-[rgba(217, 217, 217, 0.06)]  md:w-[400px]">
            <div className="md:w-[336px] md:px-4 text-start flex flex-col gap-4">
              <span className="md:text-[24px] md:text-[#ECECEE] md:font-[600]">
                {media.title}
              </span>
              <span className="md:text-[16px] md:text-[#878787] md:font-[400]">
                {media.desc}
              </span>
            </div>
            <Image
              key={index}
              src={media.img}
              alt={media.img}
              width={366}
              height={330}
              layout="fixed"
              className=""
            />
          </div>
        ))}
      </div>
      <Carousel
        // autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}
        centerMode={true}
        className="flex md:hidden"
      >
        {reportingMedia.map((media, index) => (
          <Image
            key={index}
            src={media.img}
            alt={media.img}
            width={272}
            height={374}
            className=""
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Reporting;
