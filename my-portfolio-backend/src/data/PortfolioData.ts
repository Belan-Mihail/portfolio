import {Project} from "../models/projectModel";

// const imageurl = "../../";

const PortfolioData: Project[] = [
  {
    name: "Paint Picture",
    slug: "paintpicture",
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
      "ElephantSQL",
    ],
    images: [
      "../images/portfolio/paint-picture/1.jpg",
      "../images/portfolio/paint-picture/2.jpg",
      "../images/portfolio/paint-picture/3.jpg",
      "../images/portfolio/paint-picture/4.jpg",
    ],
    isYoutubeproject: false,
    features: [
      "7 Models",
      "Permissions, filters, ordering",
      "Generics views",
      "Authentication functionality",
      "Redirect",
      "Restrictions for unauthorized users",
      "CRUD (Posts, Plans, WallItems, Comments)",
      "InfinityScroll",
      "Follow functionality",
      "Add/Delete Like functionality",
      "Various filters and sorting",
      "Animation Effects",
      "Agile Design",
      "Testing (automated)",
      "README (English)",
    ],
  },
  {
    name: "Cooking Blog",
    slug: "cookingblog",
    github: "https://github.com/Belan-Mihail/cooking-blog",
    livepage: "",
    description:
      "Fullstack Django project with ElephantSQL database. The the project is a content blog with crud functionality and authorization",
    tech: [
      "Python",
      "Django",
      "JavaScript",
      "JQuery",
      "Bootstrap",
      "Axios",
      "Unittest",
      "Jest",
      "ElephantSQL",
    ],
    images: [
      "../images/portfolio/cooking-blog/1.jpg",
      "../images/portfolio/cooking-blog/2.jpg",
      "../images/portfolio/cooking-blog/3.jpg",
      "../images/portfolio/cooking-blog/4.jpg",
    ],
    isYoutubeproject: false,
    features: [
      "Authentication functionality",
      "Restrictions for unauthorized users",
      "CRUD (Posts, Comments)",
      "6 Models",
      "Add/Delete Like functionality",
      "Admin approval of post and comments",
      "Fetching data from public API",
      "A lot of Forms and Views",
      "Agile Design",
      "Testing (automated)",
      "README (English)",
    ],
  },
  {
    name: "Tanks Battle",
    slug: "tanksbattle",
    github: "https://github.com/Belan-Mihail/tanks-battle",
    livepage: "https://tanks-battle.onrender.com/",
    description: "mini logic terminal game written in pure Python",
    tech: ["Python", "Google Sheet"],
    images: [
      "../images/portfolio/tanks-battle/1.jpg",
      "../images/portfolio/tanks-battle/2.jpg",
      "../images/portfolio/tanks-battle/3.jpg",
      "../images/portfolio/tanks-battle/4.jpg",
    ],
    isYoutubeproject: false,
    features: [
      "Authentication functionality (Google Sheets)",
      "Many Functions, Loops and If statements (Vanilla Python)",
      "Google Sheets",
    ],
  },
  {
    name: "React-Redux-Motion-ToDoApp",
    slug: "reactreduxmotiontodoapp",
    github: "https://github.com/Belan-Mihail/react-redux-motion-todoApp",
    livepage: "https://belan-mihail.github.io/react-redux-motion-todoApp/",
    description:
      "Study project from YouTube. Todo app with React, Redux and Framer Motion",
    tech: ["React", "Redux", "Framer Motion"],
    images: [
      "../images/portfolio/todoapp/1.jpg",
      "../images/portfolio/todoapp/2.jpg",
      "../images/portfolio/todoapp/3.jpg",
      "../images/portfolio/todoapp/4.jpg",
    ],
    isYoutubeproject: true,
    features: [
      "Full Redux functionality",
      "Full ToDo app (CRUD functionality)",
      "A lot of program logic, animation using framer motion",
      "Github pages deployment",
    ],
  },
  {
    name: "TSLikeAmazon",
    slug: "tslikeamazon",
    github: "https://github.com/Belan-Mihail/TSLikeAmazone",
    livepage: "https://tslikeamazone.onrender.com/",
    description:
      "Study project from YouTube. Fullstack React and Node/Express project with Mongo database. The project is an online store. The site has a variety of functionality typical for online stores (authorization, adding products to the cart, ordering goods). The site is deployed on the render platform",
    tech: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React-Bootstrap",
    ],
    images: [
      "../images/portfolio/tsamazona/1.jpg",
      "../images/portfolio/tsamazona/2.jpg",
      "../images/portfolio/tsamazona/3.jpg",
      "../images/portfolio/tsamazona/4.jpg",
    ],
    isYoutubeproject: true,
    features: [
      "3 Models",
      "Authentication functionality",
      "Redirect",
      "Restrictions for unauthorized users",
      "CRUD (CartItem)",
      "JWT Tokens",
      "React Router Dom",
      "Advanced react hooks",
    ],
  },
];

export default PortfolioData;
