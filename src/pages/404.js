import React from "react"
import { Helmet } from "react-helmet"

// STYLE
import "../styles/main.scss"

// DATA
import { headData } from "../data/data.js"

export default function FourOhFour() {

    const { lang } = headData
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={lang} />
      </Helmet>
    </>
  )
}
