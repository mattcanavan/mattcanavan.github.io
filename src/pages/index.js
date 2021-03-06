import React from "react"
import { Helmet } from "react-helmet"

// STYLE
import "../styles/main.scss"

// DATA
import { headData } from "../data/data.js"

// COMPONENTS
import App from "../components/App.js"

export default function Home() {
  const { title, lang, description } = headData

  return (
    <>
    
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta
          name="description"
          content={description}
        />
      </Helmet>

      <App />

    </>
  )
}
