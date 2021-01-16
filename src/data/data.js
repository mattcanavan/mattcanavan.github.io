import { v4 as uuidv4 } from 'uuid';

// ABOUT DATA
export const aboutData = {
    byline: "Hi, I'm Matt",
    img: '',
    paragraphOne: "I'm passionate about JavaScript and life-long learning.",
    githubURL: 'https://github.com/mattcanavan',
    email: 'hello@mattpy.com',
  };
  
  
  // PROJECTS DATA
  export const projectsData = [
    {
      id: uuidv4(),
      img: '',
      title: 'Simple Twitter bot with Python',
      info: 'Python Weekly Report is a great blogspot that collects the ten most popular Python questions asked on StackOverflow the week previous and publishes them all in a single post. I scrape the blog’s RSS feed and tweet each question separately.',
      deployedURL: 'www.com',  //if blank, no btn will appear
      repoURL: '',     //if blank, no btn will appear
      technologies: ['Python', 'Twitter API', 'Heroku']
    },
    {
      id: uuidv4(),
      img: '',
      title: 'Portfolio with Gatsby and GitHub Pages',
      info: "Gatsby is a great resource for generating static websites that can be hosted on GitHub pags for free (and Gatsby utilizes React to creat templates/components!)",
      deployedURL: 'mattcanavan.dev',  //if blank, no btn will appear
      repoURL: 'UPDATE THIS',     //if blank, no btn will appear
      technologies: ['Gatsby', 'React', 'SCSS']
    },
  ];