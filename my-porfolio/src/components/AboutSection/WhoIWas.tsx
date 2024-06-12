import React from "react";
import "./AboutSection.css";

type SlideProps = {
  numberSlide: number;
  setNumberSlide: (number: number) => void;
};

const WhoIWasPage: React.FC<SlideProps> = ({ numberSlide, setNumberSlide }) => {
  return (
    <>
      <div className="slider-container general px-4 w-[100%]">
        <div className="wrapper">
          <h2 className="text-5xl my-8 text-center greeting font-medium " id="whoiwas">
            Who I Was
          </h2>
          <p className="text-center my-8 mx-8 text-description">
            I worked as a lawyer in Ukraine for 12 years. I went from a novice
            legal assistant to the chief legal consultant of an enterprise.{" "}
          </p>

          <div className="content-wrapper-group">
            <div className="content-row">
              <div className="content-col">
                <h3 className="subtitle border p-2 mb-2 mx-4">
                  Here are some of my legal statistics
                </h3>
                <div className="sub-content my-4">
                  <h3 className="statistic-title">
                    <span>&gt;</span>&nbsp;500
                  </h3>
                  <p className="text-description">court hearings</p>
                </div>
                <div className="sub-content my-4">
                  <h3 className="statistic-title">
                    <span>&gt;</span>&nbsp;2000
                  </h3>
                  <p className="text-description">developed agreements</p>
                </div>
                <div className="sub-content my-4">
                  <h3 className="statistic-title">
                    <span>&gt;</span>&nbsp;10000
                  </h3>
                  <p className="text-description">colleagues and clients</p>
                </div>
              </div>
              <div className="content-col">
                <h3 className="subtitle border p-2 mb-2 mx-4">What does this mean now</h3>
                <div className="sub-content">
                  <p className="mb-2">
                    ability to find a way out of difficult situations
                  </p>
                  <p className="mb-2">high level of responsibility</p>
                  <p className="mb-2">ability to multitask</p>
                </div>
                <div className="sub-content">
                  <p className="mb-2">no fear of monotonous work</p>
                  <p className="mb-2">attentiveness and forethought</p>
                  <p className="mb-2">ability to see pitfalls</p>
                </div>
                <div className="sub-content">
                  <p className="mb-2">ability find common language</p>
                  <p className="mb-2">friendliness and non-conflict</p>
                  <p className="mb-2">understanding of human psychology</p>
                </div>
              </div>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <a href="#myway"
                className="hero-button px-2 py-2 rounded skills-button"
                onClick={() => setNumberSlide(2)}
              >
                <i className="fa-solid fa-arrow-left"></i>&nbsp;My Way in Germany
              </a>
            </div>
            <div className="icon">
              <a href="#mysoftskils"
                className="hero-button px-2 py-2 rounded skills-button"
                onClick={() => setNumberSlide(4)}
              >
                 My SoftSkills &nbsp;<i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoIWasPage;
