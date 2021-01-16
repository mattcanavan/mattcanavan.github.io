import { v4 as uuidv4 } from 'uuid';

// ABOUT DATA
export const aboutData = {
    byline: "Hi, I'm Matt",
    img: '',
    paragraphOne: "I'm passionate about JavaScript and life-long learning.",
    githubURL: 'https://github.com/mattcanavan',
    email: 'email@email.ads',
  };
  
  
  // PROJECTS DATA
  export const projectsData = [
    {
      id: uuidv4(),
      img: 'project.jpg',
      title: 'Project #1',
      info: 'fsad fdsaofslkj sadflijfdsa fsdlkjfdsa',
      deployedURL: 'www.com',  //if blank, no btn will appear
      repoURL: 'www.com',     //if blank, no btn will appear
      technologies: ['React', 'sdaf', 'asdf', 'fdsa']
    },
    {
      id: uuidv4(),
      img: 'project.jpg',
      title: 'Project #3',
      info: 'fsad fdsaofslkj sadflijfdsa fsdlkjfdsa',
      deployedURL: 'www.com',  //if blank, no btn will appear
      repoURL: 'www.com',     //if blank, no btn will appear
      technologies: ['React', 'sdaf', 'asdf', 'fdsa']
    },
    {
      id: uuidv4(),
      img: 'project.jpg',
      title: 'Project #3',
      info: 'fsad fdsaofslkj sadflijfdsa fsdlkjfdsa',
      deployedURL: 'www.com',  //if blank, no btn will appear
      repoURL: 'www.com',     //if blank, no btn will appear
      technologies: ['React', 'sdaf', 'asdf', 'fdsa']
    },
  ];