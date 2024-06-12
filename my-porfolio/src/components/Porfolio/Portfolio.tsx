import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";
// import PortfolioDataType from "../types/PortfolioDataType";
// import axios from "axios";
import { getError } from "../../utils";
import { ApiError } from "../../types/ApiError";
import LoadingBox from "../LoadingBox";
import MessageErrorBox from "../MessageErrorBox";
import { useGetProjectsQuery } from "../../hooks/projectHook";
import CloseIcon from '../../svg/close-icon.svg'


// type State = {
//   portfiliodata: PortfolioDataType[],
//   loading: boolean,
//   error: string
// }

// type Action = 
//   | {type: 'FETCH_REQUEST'}
//   | {type: 'FETCH_SUCCES', payload: PortfolioDataType[]}
//   | {type: 'FETCH_FAILED', payload: string}

//   const initailState: State = {
//     portfiliodata: [],
//     loading: true,
//     error: ''
//   }


//   const reducer = (state:State, action: Action) => {
//     switch(action.type) {
//       case 'FETCH_REQUEST':
//       return {...state, loading: true}
//       case 'FETCH_SUCCES':
//         return {...state, portfiliodata: action.payload, loading: false}
//       case 'FETCH_FAILED':
//         return {...state, loading: false, error: action.payload}
//       default:
//         return state
//     }
//   }



const Portfolio: React.FC = () => {

  // const [{loading, error, portfiliodata}, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initailState)
  const [imageNumber, setImageNumber] = useState(0);
  const [openModal, setOpenModal] = useState(true);
  const [filter2, setFilter2] = useState<string[]>([]);
  const [openAboutSite, setAboutSite] = useState(false);
  

  const arraysTechArrays: string[][] = [];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch({type: 'FETCH_REQUEST'})
  //     try {
  //       setTimeout(() => {
  //         dispatch({type: 'FETCH_SUCCES', payload: result.data})
  //       }, 1000);
  //       const result = await axios.get('/api/projects')
  //       // dispatch({type: 'FETCH_SUCCES', payload: result.data})
        
        
  //     } catch (err) {
  //       dispatch({type: 'FETCH_FAILED', payload: getError(err as ApiError)})
  //     }
  //   }
  //   fetchData()
  // }, [])

  
  const { data: portfiliodata, isLoading, error } = useGetProjectsQuery()


  portfiliodata?.map((item) => arraysTechArrays.push(item.tech))
  const singleTechValuesArray = arraysTechArrays.flat();
  const originalTechValuesSet = new Set(singleTechValuesArray);
  const originalTechValuesArray = Array.from(originalTechValuesSet);
  
 
  

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setImageNumber((prevImageNumber) => randomInteger(0, 3));
    }, 10000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  

  return (
    isLoading ? <LoadingBox /> : error ? <MessageErrorBox
    >{getError(error as unknown as ApiError)}</MessageErrorBox> :
          (
    <div className="general px-4 w-[100%]">
      <div className="wrapper">
        <h2 className="text-5xl my-8 text-center greeting font-medium ">
          My Portfolio
        </h2>
        

        <div className="portfolio-container">
        
          {openModal && (
            <div className="modal-porfolio">
              <p className="modal-porfolio-text">
                Don't forget that this site is also part of my portfolio.
                
              </p>
              
              <button
                className="modal-porfolio-button"
                onClick={() => setOpenModal(false)}
              >
                Ok
              </button>
              
            </div>
          )}

          {!openAboutSite ? (
            <p className="my-2 text-center underline text-blue-700 hover:text-blue-500" onClick={() => setAboutSite(true)}>read about this site</p>
          ) : (
            <div className="wrapper wrapper-about mx-4 relative">
          <div className="card-down-container card-down-container-home my-4 ">
          <div className="w-8 close-icon absolute right-2 top-6 hover:bg-gray-900 " onClick={()=> setAboutSite(false)}>
                    <img src={CloseIcon} alt="CloseIcon"  />
                  </div>
                  <div className="card-titel-wrapper">
            <h2 className="card-title">My Portfolio</h2>
          </div>
          <p className="mt-10">
            <a target="_blank" rel="noopener noreferrer" className="github-links" href='https://github.com/Belan-Mihail/portfolio'><span className="text-white github">Github:</span> {''} https://github.com/Belan-Mihail/portfolio</a>
          </p>
          
          <p className="text-center p-2 my-4">An independent full stack project with react in the frontend and node.j in the backend as well as mongo db. The site is my current portfolio and contains not only links to my previous works, but is itself an illustration of my skills and knowledge</p>
          
            <div className="max-[400px]:hidden card-tech grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
              
                <p className="filter-porfolio-item">React</p>
                <p className="filter-porfolio-item">TypeScript</p>
                <p className="filter-porfolio-item">JavaScript</p>
                <p className="filter-porfolio-item">MongoDB</p>
                <p className="filter-porfolio-item">Framer Motion</p>
                <p className="filter-porfolio-item">Node.js</p>
                <p className="filter-porfolio-item">Express.js</p>
                <p className="filter-porfolio-item">ReactQuery</p>
                <p className="filter-porfolio-item">Email.js</p>
              
            </div>

            <div className="my-4 flex flex-col items-center">
                  <h3 className="features-title">Features:</h3>
                  <ul className="grid grid-cols-2 gap-3 my-4 ">
                    
                      <li className="features-item">
                        <i className="fa-solid fa-star features-icon"></i>
                        Fullstack project
                      </li>
                      <li className="features-item">
                        <i className="fa-solid fa-star features-icon"></i>
                        Authentication functionality
                      </li>
                      <li className="features-item">
                        <i className="fa-solid fa-star features-icon"></i>
                        Restrictions for unauthorized users
                      </li>
                      <li className="features-item">
                        <i className="fa-solid fa-star features-icon"></i>
                        CRUD (Comments)
                      </li>
                      <li className="features-item">
                        <i className="fa-solid fa-star features-icon"></i>
                        JWT Tokens
                      </li>
                      <li className="features-item">
                        <i className="fa-solid fa-star features-icon"></i>
                        React Router Dom
                      </li>
                      <li className="features-item">
                        <i className="fa-solid fa-star features-icon"></i>
                        Advanced react hooks
                      </li>
                      <li className="features-item">
                        <i className="fa-solid fa-star features-icon"></i>
                        Functioning contact form 
                      </li>
                  </ul>
                </div>
        </div>
        </div>
          )}
          

          

          

          <div className="max-[500px]:hidden portfolio_filter grid grid-cols-2 gap-2 mx-2 min-[600px]:grid-cols-3 sm:mx-8 sm:gap-4 md:grid-cols-4 md:mx-8 md:gap-4">
            {filter2.length < 1 ? (
              <p className="filter-porfolio-item filter-portfolio selected">
                All
              </p>
            ) : (
              <p className="filter-porfolio-item filter-portfolio" onClick={()=> setFilter2([])}>All</p>
            )}
            
            {originalTechValuesArray.map((item) =>
              filter2.includes(item) ? (
                <p
                  className="filter-porfolio-item filter-portfolio selected"
                  onClick={() =>
                    filter2.includes(item)
                      ? setFilter2(filter2.filter((a) => a !== item))
                      : setFilter2([...filter2, item])
                  }
                >
                  {item}
                </p>
              ) : (
                <p
                  className="filter-porfolio-item filter-portfolio"
                  onClick={() =>
                    filter2.includes(item)
                      ? setFilter2(filter2.filter((a) => a !== item))
                      : setFilter2([...filter2, item])
                  }
                >
                  {item}
                </p>
              )
            )}
          </div>
          
          <div className="portfolio-content-container grid grid-cols-1 xl:grid-cols-2 gap-8">
            {filter2.length < 1 ? (
              portfiliodata?.map((item) => (
                <PortfolioCard item={item} imageNumber={imageNumber} />
              ))
            ) : portfiliodata!.filter((item) =>
                filter2.every((r) => item.tech.includes(r))
              ).length > 0 ? (
                portfiliodata!.filter((item) =>
                filter2.every((r) => item.tech.includes(r))
              ).map((item) => (
                <PortfolioCard item={item} imageNumber={imageNumber} />
              ))
            ) : (
              <div className="mb-24 relative w-full not-app-container">
              <p className="text-[#dddd6d] text-center p-8 not-app">
                Yes.. An App with such a set of libraries and frameworks is not
                yet in this portfolio... But I can create it for you!
              </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Portfolio;

