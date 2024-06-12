import React from "react";

import "./AboutSection.css";

type SlideProps = {
  numberSlide: number;
  setNumberSlide: (number: number) => void;
};

const MySoftSkills: React.FC<SlideProps> = ({
  numberSlide,
  setNumberSlide,
}) => {
  return (
    <>
      <div className="slider-container general px-4 w-[100%]">
        <div className="wrapper">
          <h2 className="text-5xl my-8 text-center greeting font-medium " id="mysoftskils">
            My Soft Skills
          </h2>
        
        <p className="text-center my-4 mx-4 md:my-8 md:mx-8 text-description">
          I will try, without unnecessary boasting, to describe the qualities
          that I believe I am endowed with
        </p>
        <div className="table-row my-4 col-2 text-lg">
          <div className="table-wrapper">
            <div className="left-col font-medium">
              <div className="softskills-wrapper">communication skills</div>
            </div>
            <div className="right-col">
              the ability to communicate with people of various types, and most
              importantly the ability to listen and understand
            </div>
          </div>
          <div className="table-wrapper">
            <div className="left-col font-medium">
              <div className="softskills-wrapper">multitasking skill</div>
            </div>
            <div className="right-col">
              ability to keep several tasks in mind at once; ability to easily
              switch from one task to another
            </div>
          </div>
          <div className="table-wrapper">
            <div className="left-col font-medium">
              <div className="softskills-wrapper">moderate independence</div>
            </div>
            <div className="right-col">
              ability to work independently, but a good understanding of when to
              ask for help so as not to make the problem more complicated
            </div>
          </div>
          <div className="table-wrapper">
            <div className="left-col font-medium">
              <div className="softskills-wrapper">
                keep problem small
              </div>
            </div>
            <div className="right-col">
              the ability to avoid turning small problems into huge ones
            </div>
          </div>
          <div className="table-wrapper">
            <div className="left-col font-medium">
              <div className="softskills-wrapper">respect deadlines</div>
            </div>
            <div className="right-col">
            understanding the importance of working within established deadlines
            </div>
          </div>
        </div>

        <div className="icons">
          <div className="icon">
            <a href="#whoiwas"
              className="hero-button px-2 py-2 rounded skills-button"
              onClick={() => setNumberSlide(3)}
            >
              <i className="fa-solid fa-arrow-left"></i>&nbsp;Who I Was
            </a>
          </div>
          <div className="icon">
            <a href="#whatiknow"
              className="hero-button px-2 py-2 rounded skills-button"
              onClick={() => setNumberSlide(1)}
            >
              What I Know &nbsp;<i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default MySoftSkills;
