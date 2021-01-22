import { v4 as uuidv4 } from 'uuid';

// ABOUT DATA
export const aboutData = {
    byline: "Hi, I'm Matt",
    img: '',
    paragraphOne: "I'm passionate about JavaScript and life-long learning.",
    githubURL: 'https://github.com/mattcanavan',
    email: 'mailto:hello@mattpy.com',
  };
  
  
  // PROJECTS DATA
  export const projectsData = [
    {
      id: uuidv4(),
      img: '',
      title: 'Simple Twitter bot with Python',
      info: 'Python Weekly Report is a great blogspot that collects the ten most popular Python questions asked on StackOverflow the week previous and publishes them all in a single post. I scrape the blog’s RSS feed and tweet each question separately.',
      deployedURL: 'https://twitter.com/PopularPythonQs',  //if blank, no btn will appear
      repoURL: '',     //if blank, no btn will appear
      technologies: ['Python', 'Twitter API', 'Heroku']
    },
    {
      id: uuidv4(),
      img: '',
      title: 'Portfolio with Gatsby and GitHub Pages',
      info: "Gatsby is a great resource for generating static websites that can be hosted on GitHub pages for free (and Gatsby utilizes React to create templates/components!)",
      deployedURL: 'https://mattcanavan.dev',  //if blank, no btn will appear
      repoURL: 'https://github.com/mattcanavan/mattcanavan.github.io',     //if blank, no btn will appear
      technologies: ['Gatsby', 'React', 'Contect API', 'SCSS']
    },
  ];