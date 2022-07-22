import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export default function FeaturedProjects() {
  const data = useStaticQuery(graphql`
    query {
      featuredProjects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/projects/" }
          frontmatter: { featured: { eq: true } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              name
              url
              description
              cover {
                childImageSharp {
                  gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
            }
            html
          }
        }
      }
    }
  `);

  const featuredProjectsData = data.featuredProjects.edges;

  return (
    <section className="section featured-projects">
      <div className="section__title">Featured Projects</div>
      <div className="section__content">
        {featuredProjectsData &&
          featuredProjectsData.map(({ node }, i) => {
            const { name, url, description, cover } = node.frontmatter;
            const image = getImage(cover);
            return (
              <div className="project blistabloc" key={i}>
                <figure className="project__pic">
                  <a href={url} target="_blank" rel="noreferrer">
                    <GatsbyImage image={image} alt={name} className="img" />
                  </a>
                </figure>
                <figcaption className="project__caption">
                  <div className="project__name">
                    <a href={url} target="_blank" rel="noreferrer">
                      {name}
                    </a>
                  </div>
                  <p>{description}</p>
                </figcaption>
              </div>
            );
          })}
      </div>
    </section>
  );
}
