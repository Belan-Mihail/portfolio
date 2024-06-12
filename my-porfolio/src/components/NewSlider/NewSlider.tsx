import React, { useState } from "react";
import WhoIWasPage from "../AboutSection/WhoIWas";
import MyWayPage from "../AboutSection/MyWayPage";
import WhatIKnowPage from "../AboutSection/WhatIKnowPage";
import MySoftSkills from "../AboutSection/MySoftSkills";

const NewSlider: React.FC = () => {
  const [numberSlide, setNumberSlide] = useState<number>(1);

  return (
    <div>
      {numberSlide === 1 ? (
        <WhatIKnowPage
          numberSlide={numberSlide}
          setNumberSlide={setNumberSlide}
        />
      ) : numberSlide === 2 ? (
        <MyWayPage
          numberSlide={numberSlide}
          setNumberSlide={setNumberSlide}
        />
      ) : numberSlide === 3 ? (
        <WhoIWasPage numberSlide={numberSlide} setNumberSlide={setNumberSlide} />
      ) : (
        <MySoftSkills
          numberSlide={numberSlide}
          setNumberSlide={setNumberSlide}
        />
      )}
    </div>
  );
};

export default NewSlider;
