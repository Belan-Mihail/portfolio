import PortfolioDataType from "../types/PortfolioDataType";

// const imageurl = "../../";

const PortfolioData: PortfolioDataType[] = [
  {
    name: "Paint Picture",
    slug: 'paintpicture',
    github: "https://github.com/Belan-Mihail/paint_picture",
    livepage: "",
    description:
      "Fullstack React and Django Rest project with ElephantSQL database. The project combines the functionality of a social network and a blog",
    tech: [
      "JavaScript",
      "Python",
      "React",
      "Django",
      "DjangoRest",
      "React-Bootstrap",
      "Axios",
      "Unittest",
      "Jest",
      'ElephantSQL'
    ],
    images: [
      "./images/portfolio/paint-picture/1.jpg",
      "./images/portfolio/paint-picture/2.jpg",
      "./images/portfolio/paint-picture/3.jpg",
      "./images/portfolio/paint-picture/4.jpg",
    ],
    isYoutubeproject: false,
    features: []
  },
  {
    name: "Cooking Blog",
    slug: 'cookingblog',
    github: "https://github.com/Belan-Mihail/cooking-blog",
    livepage: "",
    description:
      "Fullstack Django project with ElephantSQL database. The the project is a content blog with crud functionality and authorization",
    tech: [
      "Python",
      "Django",
      "Django",
      "Django",
      "JavaScript",
      'JQuery',
      "Bootstrap",
      "Axios",
      "Unittest",
      "Jest",
      'ElephantSQL',
    ],
    images: [
      "./images/portfolio/cooking-blog/1.jpg",
      "./images/portfolio/cooking-blog/2.jpg",
      "./images/portfolio/cooking-blog/3.jpg",
      "./images/portfolio/cooking-blog/4.jpg",
    ],
    isYoutubeproject: false,
    features: []
  },
  {
    name: "Tanks Battle",
    slug: 'tanksbattle',
    github: "https://github.com/Belan-Mihail/tanks-battle",
    livepage: "https://tanks-battle.onrender.com/",
    description: "mini logic terminal game written in pure Python",
    tech: ["Python", "Google Sheet"],
    images: [
      "./images/portfolio/tanks-battle/1.jpg",
      "./images/portfolio/tanks-battle/2.jpg",
      "./images/portfolio/tanks-battle/3.jpg",
      "./images/portfolio/tanks-battle/4.jpg",
    ],
    isYoutubeproject: false,
    features: []
  },
  {
    name: "React-Redux-Motion-ToDoApp",
    slug: 'reactreduxmotiontodoapp',
    github: "https://github.com/Belan-Mihail/react-redux-motion-todoApp",
    livepage: "https://belan-mihail.github.io/react-redux-motion-todoApp/",
    description: "Study project from YouTube. Todo app with React, Redux and Framer Motion",
    tech: ["React", "Redux", 'Framer Motion'],
    images: [
      "./images/portfolio/todoapp/1.jpg",
      "./images/portfolio/todoapp/2.jpg",
      "./images/portfolio/todoapp/3.jpg",
      "./images/portfolio/todoapp/4.jpg",
    ],
    isYoutubeproject: true,
    features: []
  },
];

export default PortfolioData;
