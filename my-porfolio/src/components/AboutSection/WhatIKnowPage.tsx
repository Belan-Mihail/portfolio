import React from "react";
import SkillsData from "../../data/SkillsData";
import SkillsCard from "../SkillsCard/SkillsCard";
import "./AboutSection.css";

type SlideProps = {
  numberSlide: number;
  setNumberSlide: (number: number) => void;
};

const WhatIKnowPage: React.FC<SlideProps> = ({
  numberSlide,
  setNumberSlide,
}) => {
  

  return (
    <>
      <div className="slider-container general px-4 w-[100%]">
        <div className="wrapper">
          <h2 className="text-5xl my-8 text-center greeting font-medium " id="whatiknow">
            What I Know
          </h2>
          <div className="skills-group_wrapper">
            <h3 className="text-center text-xl sm:text-start sm:text-2xl md:text-3xl lg:text-4xl my-4 mx-4 sd:my-8 sm:mx-8 ">Languages</h3>
            <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-4 lg:mx-8">
              {SkillsData.filter((item) => item.group === "language")
                .sort(function (a, b) {
                  if (a.rating > b.rating) {
                    return -1;
                  }

                  return 0;
                })
                .map((item) => (
                  <SkillsCard item={item} />
                ))}
            </div>
          </div>
          <div className="skills-group_wrapper">
            <h3 className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-4 lg:mx-8">
              Frameworks & Libraries
            </h3>
            <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-4 lg:mx-8">
              {SkillsData.filter(
                (item) =>
                  item.group === "frameworks" || item.group === "libraries"
              )

                .sort(function (a, b) {
                  if (a.rating > b.rating) {
                    return -1;
                  }

                  return 0;
                })

                .map((item) => (
                  <SkillsCard item={item} />
                ))}
            </div>
          </div>
          <div className="skills-group_wrapper">
            <h3 className="text-center text-xl sm:text-start sm:text-2xl md:text-3xl lg:text-4xl my-4 mx-4 sd:my-8 sm:mx-8 ">
            Version Control & Coding
            </h3>
            <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-4 lg:mx-8">
              {SkillsData.filter(
                (item) =>
                  item.group === "version-control" || item.group === "coding"
              )

                .sort(function (a, b) {
                  if (a.rating > b.rating) {
                    return -1;
                  }

                  return 0;
                })

                .map((item) => (
                  <SkillsCard item={item} />
                ))}
            </div>
          </div>
          <div className="skills-group_wrapper">
            <h3 className="text-center text-xl sm:text-start sm:text-2xl md:text-3xl lg:text-4xl my-4 mx-4 sd:my-8 sm:mx-8 ">
            Hosting & Database
            </h3>
            <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-4 lg:mx-8">
              {SkillsData.filter(
                (item) =>
                  item.group === "hosting" || item.group === "database"
              )

                .sort(function (a, b) {
                  if (a.rating > b.rating) {
                    return -1;
                  }

                  return 0;
                })

                .map((item) => (
                  <SkillsCard item={item} />
                ))}
            </div>
          </div>
          <div className="skills-group_wrapper">
            <h3 className="text-center text-xl sm:text-start sm:text-2xl md:text-3xl lg:text-4xl my-4 mx-4 sd:my-8 sm:mx-8 ">
            Testing
            </h3>
            <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-4 lg:mx-8">
              {SkillsData.filter(
                (item) =>
                  item.group === "testing"
              )

                .sort(function (a, b) {
                  if (a.rating > b.rating) {
                    return -1;
                  }

                  return 0;
                })

                .map((item) => (
                  <SkillsCard item={item} />
                ))}
            </div>
          </div>
          <div className="skills-group_wrapper">
            <h3 className="text-center text-xl sm:text-start sm:text-2xl md:text-3xl lg:text-4xl my-4 mx-4 sd:my-8 sm:mx-8">
            Other
            </h3>
            <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-4 lg:mx-8">
              {SkillsData.filter(
                (item) =>
                  item.group === "other"
              )

                .sort(function (a, b) {
                  if (a.rating > b.rating) {
                    return -1;
                  }

                  return 0;
                })

                .map((item) => (
                  <SkillsCard item={item} />
                ))}
            </div>
          </div>

          <div className="icons">
            <div className="icon">
              <a href="#mysoftskils"
                className="hero-button px-2 py-2 rounded skills-button"
                onClick={() => setNumberSlide(4)}
              >
                <i className="fa-solid fa-arrow-left"></i>&nbsp;My SoftSkills
              </a>
            </div>
            <div className="icon">
              <a href="#myway"
                className="hero-button px-2 py-2 rounded skills-button"
                onClick={() => setNumberSlide(2)}
              >
                My Way in Germany &nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIKnowPage;
