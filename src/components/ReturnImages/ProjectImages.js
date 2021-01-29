import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default function ProjectImages({ filename, alt }) {
    const data = useStaticQuery(graphql `
    {
        images: allFile(filter: {relativeDirectory: {eq: "images/projects"}}) {
          edges {
            node {
              id
              name
              relativePath
              childImageSharp {
                fluid(maxWidth: 650) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)
    
    const img = data.images.edges.find(element => element.node.relativePath.includes(filename));

    if (!img) return null;
    
    // else:
    const imgFluid = img.node.childImageSharp.fluid;
    
    return (
        <Img alt={alt} fluid={imgFluid} />
    )
}


ProjectImages.prototypes = {
    filename: PropTypes.string,
    alt: PropTypes.string,
};