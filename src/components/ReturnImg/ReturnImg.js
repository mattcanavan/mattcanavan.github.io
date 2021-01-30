import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";

export default function ReturnImg({ filename, alt }) {

  // collect all images
  const data = useStaticQuery(graphql`
    {
      images: allFile(
        filter: { relativeDirectory: { eq: "projects" } }
      ) {
        edges {
          node {
            id
            name
            relativePath
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  // find node that matches argument filename
  const img = data.images.edges.find(element =>
    element.node.relativePath.includes(filename)
  );
  
  // if no node found
  if (!img) return null;

  // else:
  const imgFluid = img.node.childImageSharp.fluid;

  return <Img className="image" alt={alt} fluid={imgFluid} imgStyle={{objectFit: `contain`}} />;
  // had to define imgStyle here otherwise defaulting to cover. couldnt fix w/CSS ...
}

ReturnImg.prototypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};
