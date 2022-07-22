import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function experience() {
  const data = useStaticQuery(graphql`
    query {
      experience: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/experience/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              company
              url
              time
              position
            }
            html
          }
        }
      }
    }
  `);

  const jobsData = data.experience.edges;

  return (
    <section className="section experience">
      <div className="section__title">Experience</div>
      <div className="section__content">
        <div className="jobs">
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { company, url, time, position } = node.frontmatter;
              return (
                <div className="job" key={i}>
                  <div className="time-place">
                    <div className="job__company">
                      <a href={url} target="_blank" rel="noreferrer">
                        {company}
                      </a>
                    </div>
                    <div className="job__time">{time}</div>
                  </div>
                  <div className="job__position">{position}</div>
                </div>
              );
            })}
        </div>
        <a href="/resume.pdf" target="_blank" className="arrow-link">
          View My Resume
        </a>
      </div>
    </section>
  );
}
