import React from "react";
import "./AboutSection.css";

type SlideProps = {
  numberSlide: number;
  setNumberSlide: (number: number) => void;
};

const MyWayPage: React.FC<SlideProps> = ({ numberSlide, setNumberSlide }) => {
  return (
    <>
      <div className="slider-container general px-4 w-[100%]">
        <div className="wrapper">
          <h2 className="text-5xl my-8 text-center greeting font-medium" id="myway">
            My Way
          </h2>
          <p className="text-center my-8 mx-8 text-description">
            Since arriving in Germany
            <span className="text-red-500"> (08/10/2022)</span> I have taken the
            following steps to return to work
          </p>
          <div className="table-row my-4 col-2 text-lg">
            <div className="table-wrapper">
              <div className="left-col font-medium">12/2022 — 01/2023</div>
              <div className="right-col">
                Completed German course (First steps in Germany) (A1.1)
              </div>
            </div>
            <div className="table-wrapper">
              <div className="left-col font-medium">12/2022</div>
              <div className="right-col">
                I have submitted an application to the job center for training
                in the course (Full Stack Software Development (Advanced Front
                End) Code Institute)
              </div>
            </div>
            <div className="table-wrapper">
              <div className="left-col font-medium">01/2023</div>
              <div className="right-col">Approval to participate received</div>
            </div>
            <div className="table-wrapper">
              <div className="left-col font-medium">02/2023 — 03/2023</div>
              <div className="right-col">
                Completed German course (First steps in Germany 2) (A1.2)
              </div>
            </div>
            <div className="table-wrapper">
              <div className="left-col font-medium">
                14/02/2023 — 13/02/2024
              </div>
              <div className="right-col">
                Completed course (Full Stack Software Development (Advanced
                Front End))
              </div>
            </div>
            <div className="table-wrapper">
              <div className="left-col font-medium">
                16/04/2023 - 01/03/2024
              </div>
              <div className="right-col">
                Completed integration course (B1). I receive B1 level
              </div>
            </div>
            <div className="table-wrapper">
              <div className="left-col font-medium">
                11/03/2024 - 28/06/2024
              </div>
              <div className="right-col">
                ReDI School Hamburg - Javascript 2(in progress..)
              </div>
            </div>
            <div className="table-wrapper">
              <div className="left-col font-medium">
                01/04/2024 - 03/08/2024
              </div>
              <div className="right-col">
                Professional language courses (B2)(in progress..)
              </div>
            </div>
          </div>
          <p className="text-center my-2 mx-2 text-lg italic">
            I hope my steps are enough to prove my motivation and hard work to
            achieve my goal
          </p>
          <div className="icons">
            <div className="icon">
              <a href="#whatiknow"
                className="hero-button px-2 py-2 rounded skills-button"
                onClick={() => setNumberSlide(1)}
              >
                <i className="fa-solid fa-arrow-left"></i>&nbsp;What I Know
              </a>
            </div>
            <div className="icon">
              <a href="#whoiwas"
                className="hero-button px-2 py-2 rounded skills-button"
                onClick={() => setNumberSlide(3)}
              >
                Who I Was &nbsp;<i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWayPage;
