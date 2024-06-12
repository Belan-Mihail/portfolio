/* eslint-disable jsx-a11y/img-redundant-alt */


import "../Button.css";
import './Header.css'


const Header = () => {



  return (
    
    <div className="py-4 px-4 w-[100%] general">
      <div className="wrapper w-full flex justify-between gap-4 bg-transparent max-[520px]:flex-col-reverse max-[520px]:items-center max-[520px]:gap-2">
        <div className="content w-1/2 bg-transparent">
          <div className="content-wrapper flex flex-col items-center content-center h-[100%] justify-center relative max-[520px]:mb-8">
            <div className=" mx-8 gap-4 z-2 flex-column max-[520px]:h-[100%] max-[520px]:text-center">
              <h1 className="font-medium text-5xl mb-4 greeting">
                <span className="first-gretting">H</span>ello People
              </h1>
              <p className=" text-sm min-[420px]:text-base sm:text-xl md:text-2xl lg:text-3xl mb-4">I am Fronted Developper</p>
              <div className="files-container flex flex-col gap-4 mb-4">
              <a target="_blank" href="./files/CV.pdf" className="bg-green-700 hover:bg-green-500 spin-icons px-2 py-2 rounded lg:text-2xl">
                <i className="fa-solid fa-gear"></i><span className="mx-2">Take my CV</span>
                <i className="fa-solid fa-gear"></i>
              </a>
              <a target="_blank" href="./files/diplom.pdf" className="hero-button spin-icons px-2 py-2 rounded lg:text-2xl">
                <i className="fa-solid fa-gear"></i><span className="mx-2">My Diploma</span>
                <i className="fa-solid fa-gear"></i>
              </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero w-1/2 bg-transparent flex items-center justify-center">
          <div className="flex justify-center py-8 bg-transparent max-[520px]:py-4">
            <img src="./images/my-photo.jpg" alt="photo" className="main-image border-shadow rounded-full object-cover" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
