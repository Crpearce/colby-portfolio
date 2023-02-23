import Image1 from "../../assets/project1.jpg";
import Image2 from "../../assets/project2.jpg";
import Image3 from "../../assets/project3.jpg";
import Image4 from "../../assets/project4.jpg";
import Image5 from "../../assets/project5.jpg";
import Image6 from "../../assets/project6.jpg";



const data = [
  {
    id: 1,
    category: "frontend",
    image: Image1,
    title: "First Chair Colorado (frontend)",
    desc: "A React frontend with custom scraped data compiled and access through Express.js.  Continued practice with React Router and Async JavaScript specifically challenges that differed from my experience with vanilla JS. Implemented Get/Post/Delete functionality to improve UI",
    demo: "https://first-chair.vercel.app/",
    github: "https://github.com/Crpearce/first-chair",
  },
  {
    id: 2,
    category: "frontend",
    image: Image6,
    title: "Play Dead(frontend)",
    desc: "Solo timed challenge with E2E Cypress test suite.  Learn and implement Spotify OAuth and Spotify embedded player for randomized Albums. **NOTE- Due to Spotify developer terms of service, the deployed application will not be fully functionial unless your spotify account email has been added to the dashboard**",
    demo: "https://play-dead.vercel.app/#",
    github: "https://github.com/Crpearce/Play-Dead"
  },
  {
    id: 3,
    category: "frontend",
    image: Image2,
    title: "Rancid Tomatillos(frontend)",
    desc: "My first paired project in React.  This was a 1 week challenge to complete with an assigned partner.  ",
    demo: "https://rancid-tomatillos-ffsors7w3-crpearce.vercel.app/",
    github: "https://github.com/Crpearce/Rancid-Tomatillos/blob/main/README.md",
  },
  {
    id: 4,
    category: "frontend / backend",
    image: Image3,
    title: "Paw Paths (frontend/backend)",
    desc: "Learned and implemented Knex.js, Express.js, and PostgreSQL to store our scraped data in a database.  This was a project with 4 frontend students designed to challenge the group to pick and implement a new technology of choice.",
    demo: "http://egatortutorials.com",
    github: "https://github.com/Crpearce/Paw-Paths",
  },
  {
    id: 5,
    category: "frontend",
    image: Image4,
    title: "News Reader Challenge (frontend/backend)",
    desc: "8 hour timed challenge designed to access the skills of students before completion of the Frontend Development program.  The design of this project was to create a clean UI without any bugs, as well as implement an E2E test suite with Cypress",
    demo: "https://ny-times-challenge.vercel.app/",
    github: "https://github.com/Crpearce/ny-times-challenge"
  },
  {
    id: 6,
    category: "frontend / backend",
    image: Image5,
    title: "Squeaker (frontend/backend)",
    desc: "Turing School of Software and Design capstone project.  Full stack team of 7 people, tasked with learning and implementing GraphQL with a React.js Frontend over a 2 week stretch.",
    demo: "https://squeaker-fe.vercel.app/",
    github: "https://github.com/Squeaker-2207/squeaker-fe"
  }
];

export default data;
