import React, { useContext } from 'react';

// DATA
import PortfolioContext from '../../context/context';

export default function Projects() {
    const { projects } = useContext(PortfolioContext);
    
    return (
        <section className='projects'>

            {projects.map(project => {
                const { id, img, title, info, deployedURL, repoURL, technologies } = project;
                
                return (
                    <>
                    <div key={id} className='projects__container'>
                        {/* TEXT CONTAINER */}
                        <div className='projects__text'>
                            <h3>{title}</h3>
                            <p><h4>{info}</h4></p>
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
