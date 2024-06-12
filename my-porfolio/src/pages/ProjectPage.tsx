import React, { useContext, useState } from "react";
// import PortfolioDataType from "../types/PortfolioDataType";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import LoadingBox from "../components/LoadingBox";
import MessageErrorBox from "../components/MessageErrorBox";
import "./ProjectPage.css";

import Arrow from "../svg/left-arrow-direction-svgrepo-com.svg";
import CloseIcon from '../svg/close-icon.svg'
import { Navbar } from "../components/Navbar/Navbar";
import { useGetProjectDetailsBySlugQuery } from "../hooks/projectHook";
import {
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useGetCommentsQuery,
  useUpdateCommentMutation,
} from "../hooks/commentHook";
import { toast } from "react-toastify";
import { Store } from "../Store";



const ProjectPage = () => {
  const { slug } = useParams();
  const [slideNumber, setSlideNumber] = useState([0, 1, 2, 3]);
  const [showSlider, setShowSlider] = useState(false)
  const [selectedImageNumber, setSelectedImageNumber] = useState(0)
  const [content, setContent] = useState("");
  const [commentId, setCommentId] = useState("");
  const [willEdit, setWillEdit] = useState(false);




  const nextSlide = () => {
    setSlideNumber(
      slideNumber.map((number) => (number < 3 ? number + 1 : number - 3))
    );
  };

  const prevSlide = () => {
    setSlideNumber(
      slideNumber.map((number) => (number > 0 ? number - 1 : number + 3))
    );
  };



  const { data: comments } = useGetCommentsQuery(slug!);


  const { mutateAsync: createComment } = useCreateCommentMutation(
    slug!
  );

  const { mutateAsync: updateComment } = useUpdateCommentMutation(
    slug!,
    commentId!
  );

  const { mutateAsync: deleteComment } = useDeleteCommentMutation(
    slug!,
    commentId!
  );

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (content.length < 5) {
      toast.error('Comment must contain at least 5 characters')
      return
    }
    try {
      await createComment({
        content,
      });

      toast.success("Wow!! It was easy...");
      setContent("");
    } catch (err) {
      toast.error(getError(err as ApiError));
    }
  };

  const handleDelete = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      await deleteComment();
      toast.success("Wow!! It was easy...");
    } catch (err) {
      toast.error(getError(err as ApiError));
    }
  };

  const handleEdit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (content.length < 5) {
      toast.error('Comment must contain at least 5 characters')
      return
    }
    try {
      await updateComment({
        content,
      });
      setContent("");
      setWillEdit(false)
      toast.success("Wow!! It was easy...");
    } catch (err) {
      toast.error(getError(err as ApiError));
    }
  };


  const {
    data: portfoliodata,
    isLoading,
    error,
  } = useGetProjectDetailsBySlugQuery(slug!);

  const {
    state: { userInfo }
    
  } = useContext(Store);

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageErrorBox>{getError(error as unknown as ApiError)}</MessageErrorBox>
  ) : (
    <>
      <Navbar />
      <div className="slider-container general px-4 w-[100%] pt-[110px]">
        <div className="wrapper">
          <div className="project-title-container my-2">
            <h2 className="text-center card-title">{portfoliodata!.name}</h2>
          </div>

          <div className="project-page-container flex gap-8 px-4 my-8">
            <div className="project-page-image-container w-[50%] py-5">
              <div className="div-grid">
                <img
                  className="grid-img hover:cursor-zoom-in"
                  src={portfoliodata!.images[0]}
                  alt=""
                  onClick={() => {setShowSlider(true); setSelectedImageNumber(0)}}
                />
              </div>
              <div className="div-grid">
                <img
                  className="grid-img hover:cursor-zoom-in"
                  src={portfoliodata!.images[1]}
                  alt=""
                  onClick={() => {setShowSlider(true); setSelectedImageNumber(1)}}
                />
              </div>
              <div className="div-grid">
                <img
                  className="grid-img hover:cursor-zoom-in"
                  src={portfoliodata!.images[2]}
                  alt=""
                  onClick={() => {setShowSlider(true); setSelectedImageNumber(2)}}
                />
              </div>
              <div className="div-grid">
                <img
                  className="grid-img hover:cursor-zoom-in"
                  src={portfoliodata!.images[3]}
                  alt=""
                  onClick={() => {setShowSlider(true); setSelectedImageNumber(3)}}
                />
              </div>
              {showSlider && (
                <div className="slider-image-container">
                  <div className="w-8 close-icon absolute right-8 top-4 hover:bg-gray-700 ">
                    <img src={CloseIcon} alt="CloseIcon" onClick={() => setShowSlider(false)}  />
                  </div>
                  <div className="image-container">
                    <img src={selectedImageNumber === 0 ? portfoliodata!.images[slideNumber[0]] : selectedImageNumber === 1 ? portfoliodata!.images[slideNumber[1]] : selectedImageNumber === 2 ? portfoliodata!.images[slideNumber[2]] : portfoliodata!.images[slideNumber[3]]} alt="" />
                  </div>
                  <div
                className="w-12 absolute top-[50vh] right-12 bg-gray-800 rounded-full hover:bg-gray-900 arrow-icons-right"
                onClick={prevSlide}
              >
                <img src={Arrow} alt="ArrowLeft" className="rotate-180 arrow"/>
              </div>
              <div
                onClick={nextSlide}
                className="w-12 absolute top-[50vh] left-12 bg-gray-800 rounded-full hover:bg-gray-900 arrow-icons-left"
              >
                <img src={Arrow} alt="ArrowRight" />
              </div>
                </div>
              )}

  
            </div>
            <div className="project-page-content-container w-[50%]">
              <div className="my-2 min-[1400px]:my-8 project-page-links">
                <p>
                  {" "}
                  Github:{"   "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-links"
                    href={portfoliodata!.github}
                  >
                    {portfoliodata!.github}
                  </a>
                </p>
                {portfoliodata!.livepage.length > 1 ? (
                  <p>
                    {" "}
                    Livepage:{"   "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-links"
                      href={portfoliodata!.livepage}
                    >
                      {portfoliodata!.livepage}
                    </a>
                  </p>
                ) : (
                  <div className="destroyed">
                    <p>
                      <span className="text-white">Livepage:</span>
                      {"   "}livepage was deleted due to the termination of free
                      access after graduation
                    </p>
                  </div>
                )}
              </div>
              <div className="my-2 min-[1400px]:my-8">
                {portfoliodata!.tech.length > 2 ? (
                  <div className="card-tech grid grid-cols-3 gap-3 my-4">
                    {portfoliodata!.tech.map((tech_item) => (
                      <p className="filter-porfolio-item text-center">
                        {tech_item}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className="card-tech grid grid-cols-2 gap-3 my-4">
                    {portfoliodata!.tech.map((tech_item) => (
                      <p className="filter-porfolio-item text-center">
                        {tech_item}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <div className="my-2 min-[1400px]:my-8 features">
                <div className="my-4">{portfoliodata!.description}</div>

                <div className="my-4">
                  <h3 className="features-title">Features:</h3>
                  <ul className="grid grid-cols-2 gap-3 my-4 ">
                    {portfoliodata!.features.map((item) => (
                      <li className="features-item">
                        <i className="fa-solid fa-star features-icon"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-beetwen px-4 gap-4 comments-container">
            {willEdit ? (
              <div className="comment-wrapper">
                <div className="form-comment-wrapper">
                  <form onSubmit={handleEdit} className="comments-form">
                    <textarea
                      
                      id="comment"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      required
                      onChange={(e) => setContent(e.target.value)}
                      value={content}
                    />
                    <button
                      type="submit"
                      className="hero-button spin-icons mt-4 px-2 py-2 rounded contact-button front  disabled:bg-slate-500 disabled:shadow-none"
                      disabled={content.length === 0}
                    >
                      
                      <span className="mx-2">Edit Comment</span>
                      
                    </button>
                    <button
                      onClick={() => {setWillEdit(false); setContent('')}}
                      className="hero-button hero-button-cancel spin-icons my-4 px-2 py-2 rounded contact-button front"
                      type="button"
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            ) : userInfo ? (
              <div className="comment-wrapper">
                <div className="form-comment-wrapper">
                  <form onSubmit={submitHandler} className="comments-form">
                    <textarea
                      
                      id="comment"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      required
                      onChange={(e) => setContent(e.target.value)}
                      value={content}
                    />
                    <button
                      type="submit"
                      className="hero-button spin-icons my-4 px-2 py-2 rounded contact-button front disabled:bg-slate-500 disabled:shadow-none"
                      disabled={content.length === 0}
                      
                    >
                      
                      <span className="mx-2">Create Comment</span>
                      
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="comment-wrapper">
                <div className="form-comment-wrapper">
                  <div className="disable-wrapper flex flex-col gap-4">
                    <p className=" text-orange-700 font-semibold hover:underline">
                      Sign In or Sign Up to add comment
                    </p>
                    <form onClick={submitHandler} className="comments-form ">
                      <textarea
                        
                        id="comment"
                        className="disabled:bg-slate-500 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                        disabled
                      />
                      <button
                        type="submit"
                        className="disabled:bg-slate-500 disabled:shadow-none hero-button spin-icons my-4 px-2 py-2 rounded contact-button front"
                        disabled
                      >
                        <span className="mx-2">Create Comment</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
            <div className="comment-wrapper comments">
              {comments?.map((comment) => (
                <div className="flex flex-col">
                  <div key={comment._id} className="comment">
                    <p className="comment_author">
                      {comment.user}:{" "}
                      <span className="comment_body mx-4">
                        {comment.content}
                      </span>
                    </p>
                  </div>
                  {userInfo?.isAdmin || userInfo?.name === comment.user ? (
                    <div className="flex justify-end items-end gap-4 my-2 mr-2">
                      <form onClick={handleDelete}>
                        <button
                          type="submit"
                          onClick={() => setCommentId(comment._id)}
                          className="p-1 w-[6rem] bg-green-700 rounded hover:bg-green-500"
                        >
                          Delete
                        </button>
                      </form>
                      <button
                        type="button"
                        className="p-1 w-[6rem] bg-orange-600 rounded hover:bg-orange-500"
                        onClick={() => {
                          setCommentId(comment._id);
                          setWillEdit(true);
                          setContent(comment.content);
                          
                        }}
                      >
                        Edit 
                      </button>
                    </div>
                  ) : (
                    <br />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
