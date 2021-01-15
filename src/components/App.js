import React , { useState, useEffect } from 'react';

// COMPONENTS
import About from './About/About.js';

// DATA
import { PortfolioProvider } from '../context/context.js';
import { aboutData, projectsData } from '../data/data,js';


export default function App() {
    // INITIAL State
    const [about, setAboutData] = useState();
    const [projects, setProjectdata] = useState();

    useEffect(() => {
        setAboutData(aboutData);
        setProjectdata(projectsData);
    })

    return (
        <PortfolioProvider value={{ about, projects }}>
        <About />
        </PortfolioProvider>
    )
}
