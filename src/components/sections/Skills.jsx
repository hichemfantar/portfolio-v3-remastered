import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function skills() {
  const data = useStaticQuery(graphql`
    query {
      skills: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/skills/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              name
              used
            }
            html
          }
        }
      }
    }
  `);

  const skillsData = data.skills.edges;

  return (
    <section className="section skills">
      <div className="section__title">Skills</div>
      <div className="section__content">
        <div className="skillz">
          {skillsData &&
            skillsData.map(({ node }, i) => {
              const { name, used } = node.frontmatter;
              return (
                <div className="skillz__category" key={i}>
                  <div className="skillz__category__label">{name}</div>
                  <ul>
                    {used &&
                      used.map((node, i) => (
                        <li className="skillz__category__item" key={i}>
                          {node}
                        </li>
                      ))}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
