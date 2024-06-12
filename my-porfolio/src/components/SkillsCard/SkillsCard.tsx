import React, { FC } from "react";
import SkillsType from "../../types/SkillsType";
import "./SkillsCard.css";

type SkillCardProps = {
  item: SkillsType;
};

const SkillsCard: FC<SkillCardProps> = ({ item }) => {
  return (
      <div className="card_container my-4" key={item.name}>
        <div className="card_wrapper">
          <i className={`${item.icon} skills-icon`}></i>

          <div className="card-content_wrapper">
            <p className="item_name">{item.name}</p>
            <p>
              {item.level === "advanced" ? (
                <span className="text-green-700 green-line">Advanced</span>
              ) : item.level === "middle" ? (
                <span className="text-orange-600 orange-line">Middle</span>
              ) : (
                <span className="text-red-600 red-line">Beginner</span>
              )}
            </p>
          </div>
        </div>
      </div>
  );
};

export default SkillsCard;
