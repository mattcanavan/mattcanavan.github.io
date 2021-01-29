import React, { useContext } from "react"

// COMPONENTS
import ReturnImg from "../ReturnImg/ReturnImg.js"

// DATA
import PortfolioContext from "../../context/context"

export default function Projects() {
  const { projects } = useContext(PortfolioContext)

  return (
    <section>
      <hr />
      <h1 className="title">here are some of my projects:</h1>

      {/* MAP OVER PROJECTS HERE */}
      {projects.map(project => {
        const {
          id,
          title,
          info,
          deployedURL,
          repoURL,
          keySkills,
          img,
          alt,
        } = project

        return (
          <>
            {/* CONTAINER */}
            <div key={id} className="project">
              {/* IMG CONTAINER */}
              <div className="project__imgContainer">
                <p>
                <ReturnImg filename={img} alt={alt} />
                </p>
              </div>

              {/* TEXT CONTAINER */}
              <div className="project__text">
                <h2>{title}</h2>
                <h3>{info}</h3>

                {/* SKILLZ DIV */}
                <ul className="project__text__skillz">
                  <h3>Key Skills:</h3>
                  {keySkills.map((element, index) => {
                    return <li key={index}>{element}</li>
                  })}
                </ul>

                {/* BUTTONS DIV */}
                <div className="project__text__btns">
                  {/* DEPLOYED  */}
                  {deployedURL && (
                    <a
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                      href={deployedURL}
                    >
                      View Project
                    </a>
                  )}
                  {/* REPO */}
                  {repoURL && (
                    <a
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                      href={repoURL}
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </>
        )
      })}
    </section>
  )
}
