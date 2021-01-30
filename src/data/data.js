import { v4 as uuidv4 } from "uuid"

// HEAD DATA
export const headData = {
  title: "Matt",
  lang: "en", // e.g: en, es, fr, jp
  description: "Welcome to my website",
}

// ABOUT DATA
export const aboutData = {
  byline: "Hi, I'm Matt",
  aboutMe: "I'm passionate about JavaScript and life-long learning.",
  githubURL: "https://github.com/mattcanavan",
  email: "mailto:hello@mattpy.com",
}

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    title: "Vizualize Binary Tree from JSON",
    info: `JSON can represent a single binary tree node quiet well. 
    But as the number of nodes increase, the verboseness increases as well and the tree can become difficult to imagine or draw.
    Sounds like a problem for a computer to solve!`,
    deployedURL: "https://mattcanavan.dev/visualize-binary-tree-from-json/", //if blank, no btn will appear
    repoURL: "https://github.com/mattcanavan/visualize-binary-tree-from-json", //if blank, no btn will appear
    keySkills: ["Data Structures", "Deserialize a JSON String to a Binary Tree", "Measure depth of tree", "Calculate breadth-first traverse"],
    img: "visualize-binary-tree.png",
    alt: "binary tree with 15 nodes"
  },
  {
    id: uuidv4(),
    title: "RESTful API with Express.js, Node and Knex",
    info: 
    `Served as the backend of a React App. Users were authenticated with JWT. 
    SQLite3 was used in development and PostgreSQL in product for data persistence
    `,
    deployedURL: "", //if blank, no btn will appear
    repoURL: "https://github.com/BW-TruckTracker/BackEnd", //if blank, no btn will appear
    keySkills: ["Express.js", "Knex ORM", "Heroku", "Teamwork (group project)"],
    img: "backend-node-express.png",
    alt: "README from github repo"
  },
  {
    id: uuidv4(),
    title: "Portfolio with Gatsby and GitHub Pages",
    info: 
    `The Gatsby framework pairs lightning fast static websites with extremely helpful plugins
    and the results speak for themselves. Not to mention it's based on React! Seriously check
    out this framework for your next project.`,
    deployedURL: "https://mattcanavan.dev", //if blank, no btn will appear
    repoURL: "https://github.com/mattcanavan/mattcanavan.github.io", //if blank, no btn will appear
    keySkills: ["Gatsby", "React", "GraphQL", "Context API", "SCSS"],
    img: "gatsby-portfolio-one.png",
    alt: "homepage of this very website",
  },
  {
    id: uuidv4(),
    title: "Simple Twitter bot with Python",
    info:
    `A bot that tweets the highest rated Python questions asked on StackOverflow the previous week,
    via scraping the RSS feed of blogspot Python Weekly Report.`,
    deployedURL: "https://twitter.com/PopularPythonQs", //if blank, no btn will appear
    repoURL: "", //if blank, no btn will appear
    keySkills: ["Python", "Twitter API", "Heroku"],
    img: "twitter-bot.png",
    alt: "twitter bio picture",
  },
]

// template
// {
//   id: uuidv4(),
//   title: "",
//   info: "",
//   deployedURL: "", //if blank, no btn will appear
//   repoURL: "", //if blank, no btn will appear
//   keySkills: [""],
//   img: "",
//   alt: ""
// },