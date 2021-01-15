import { v4 as uuidv4 } from 'uuid';

// ABOUT DATA
export const aboutData = {
    byline: "Hello, I'm Matt",
    img: 'profile.jpg',
    paragraphOne: 'This is the first paragraph',
  };
  
  
  // PROJECTS DATA
  export const projectsData = [
    {
      id: uuidv4(),
      img: 'project.jpg',
      title: '',
      info: '',
      info2: '',
      url: '',
      repo: '', // if no repo, the button will not show up
    },
    {
      id: uuidv4(),
      img: 'project.jpg',
      title: '',
      info: '',
      info2: '',
      url: '',
      repo: '', // if no repo, the button will not show up
    },
    {
      id: uuidv4(),
      img: 'project.jpg',
      title: '',
      info: '',
      info2: '',
      url: '',
      repo: '', // if no repo, the button will not show up
    },
  ];
  
  // CONTACT DATA
  export const contactData = {
    github: 'github/username',
    email: 'email@email.ads',
  };