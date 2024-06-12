import React, { FC } from "react";
import "./Portfolio.css";
import "../SkillsCard/SkillsCard.css";

import PortfolioDataType from "../../types/PortfolioDataType";
import { Link } from "react-router-dom";

type PortfolioCardProps = {
  item: PortfolioDataType;
  imageNumber: number;
};

const PortfolioCard: FC<PortfolioCardProps> = ({ item, imageNumber }) => {
  return (
    <div className="card_container my-4" id="big" key={item.name}>
      <div className="wrapper p-4">
        <div className="card-up-container">
          <div className="card-titel-wrapper">
            <h2 className="card-title">{item.name}</h2>
          </div>
        <Link to={'/projects/' + item.slug} >

          <img
            className="card-img"
            src={item.images[imageNumber]}
            alt={item.name}
          />
        </Link>
          
        </div>
        <div className="card-down-container my-4">
          <p>
            <a target="_blank" rel="noopener noreferrer" className="github-links" href={item.github}>{item.github}</a>
          </p>
          {item.livepage.length > 1 ? (
            <p>
              <a target="_blank" rel="noopener noreferrer" className="live-links" href={item.livepage}>{item.livepage}</a>
            </p>
          ) : (
            <div className="destroyed">
              <p>
              livepage was deleted due to the termination of
              free access after graduation
            </p>
            </div>
            
          )}
          <p className=" my-4">{item.description}</p>
          {item.tech.length > 2 ? (
            <div className="max-[400px]:hidden card-tech grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
              {item.tech.map((tech_item) => (
                <p className="filter-porfolio-item">{tech_item}</p>
              ))}
            </div>
          ) : (
            <div className="max-[400px]:hidden card-tech grid grid-cols-2 gap-3 my-4">
              {item.tech.map((tech_item) => (
                <p className="filter-porfolio-item">{tech_item}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
