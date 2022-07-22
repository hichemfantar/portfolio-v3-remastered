import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function OtherProjects() {
  const data = useStaticQuery(graphql`
    query {
      otherProjects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/projects/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              name
              url
              description
              used
            }
            html
          }
        }
      }
    }
  `);

  const otherProjectsData = data.otherProjects.edges;

  return (
    <section className="section other-projects">
      <div className="section__title">Other Projects</div>
      <div className="section__content">
        {otherProjectsData &&
          otherProjectsData.map(({ node }, i) => {
            const { name, url, description, used } = node.frontmatter;
            return (
              <div className="project" key={i}>
                <div className="project__name">
                  <a href={url} target="_blank" className="arrow-link" rel="noreferrer">
                    {name}
                  </a>
                </div>
                <p>{description}</p>
                <div className="project__used">
                  {used &&
                    used.map((node, i) => (
                      <span className="project__used__item" key={i}>
                        {node}
                      </span>
                    ))}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
