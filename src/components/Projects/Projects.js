import React, { useContext } from 'react';

// DATA
import PortfolioContext from '../../context/context';

export default function Projects() {
    const { projects } = useContext(PortfolioContext);
    
    return (
        <section className='projects'>
            <h1>here are some of my projects:</h1>

            {projects.map(project => {
                const { id, img, title, info, deployedURL, repoURL, technologies } = project;
                
                return (
                    <>
                    <div key={id} className='projects__container'>
                        {/* TEXT CONTAINER */}
                        <div className='projects__text'>
                            <h2>{title}</h2>
                            <p><h3>{info}</h3></p>
                        </div>

                        {/* SKILLZ CONTAINER */}
                        <ul className='project__skillz'>
                            Key Skills:
                            {technologies.map( element => {
                                return (
                                <li key={element}>{element}</li>
                                )
                            })}
                        </ul>

                        {/* Btn CONTAINER */}
                        <div className='projects__btns'>
                            {deployedURL && (
                                <a
                                className='btn'
                                target='_blank'
                                rel='noreferrer'
                                href={deployedURL}>
                                    See Live
                                </a>
                            )}

                            {repoURL && (
                                <a
                                className='btn'
                                target='_blank'
                                rel='noreferrer'
                                href={repoURL}>
                                    Source Code
                                </a>
                            )}
                        </div>
                    </div>
                    </>
                )
            })}


        </section>

    )
}
