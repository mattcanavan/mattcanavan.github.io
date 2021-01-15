import React, { useContext } from 'react';

// DATA
import PortfolioContext from '../../context/context';

export default function About() {
    const { about } = useContext(PortfolioContext);
    const { byline, img, paragraphOne } = about;

    return (
        <section className="about">
            
            <div className="about__container">
                <h1>{byline}</h1>
                <img src={img} alt='mineral thin section'/>
                <h2>{paragraphOne}</h2>
            </div>

        </section>
    )
}
