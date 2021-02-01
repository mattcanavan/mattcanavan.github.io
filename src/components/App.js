import React , { useState, useEffect } from 'react';

// COMPONENTS
import Loading from './Loading.js';
import About from './About/About.js';
import Projects from './Projects/Projects.js';

import Footer from './Footer/Footer.js';

// DATA
import { PortfolioProvider } from '../context/context.js';
import { aboutData, projectsData } from '../data/data.js';


export default function App() {
    // INITIAL State
    const [about, setAboutData] = useState();
    const [projects, setProjectdata] = useState();
    const [isLoading, setIsLoading] = useState(true);

    // SET State at mount
    useEffect(() => {
        setAboutData(aboutData);
        setProjectdata(projectsData);
        setIsLoading(false)
    }, []);

    // DISPLAY loading if data loading
    if (isLoading) {
        return <Loading />
    }

    return (
        <PortfolioProvider value={{ about, projects }}>
        <About />
        <Projects />
        <Footer />
        </PortfolioProvider>
    )
}
