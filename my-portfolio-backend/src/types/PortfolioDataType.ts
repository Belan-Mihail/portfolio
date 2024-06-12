

type PortfolioDataType = {
    name:string,
    slug: string,
    github: string,
    livepage: string,
    description:string,
    tech: string[],
    images: string[],
    isYoutubeproject: boolean,
    features: string[],
}

export default PortfolioDataType

// {
//     name: "Paint Picture",
//     github: "https://github.com/Belan-Mihail/paint_picture",
//     livepage: "",
//     description:
//       "Fullstack React and Django Rest project with ElephantSQL database. The project combines the functionality of a social network and a blog",
//     tech: [
//       "JavaScript",
//       "Python",
//       "React",
//       "Django",
//       "Django Rest Framework",
//       "React-Bootstrap",
//       "Axios",
//       "Unittest",
//       "Jest",
//       'ElephantSQL'
//     ],
//     images: [
//       "./images/portfolio/paint-picture/1.jpg",
//       "./images/portfolio/paint-picture/2.jpg",
//       "./images/portfolio/paint-picture/3.jpg",
//       "./images/portfolio/paint-picture/4.jpg",
//     ],
//     isYoutubeproject: false,
//   },