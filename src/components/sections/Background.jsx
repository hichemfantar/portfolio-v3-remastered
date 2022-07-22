import React from 'react';
import EmploymentStatus from './EmploymentStatus';

const Background = () => (
  <section className="section background">
    <div className="section__title">Background</div>
    <div className="section__content">
      <p>
        I'm currently a software engineer, freelancer, &amp; computer science student at the
        <a
          className="underline-link"
          href="http://www.isetso.rnu.tn/"
          target="_blank"
          rel="noreferrer">
          Higher Institute of Technological Studies of Sousse
        </a>{' '}
        learning new things and building projects with some awesome people. I'm currently embarking
        on a journey to obtain my masters in software engineering.
      </p>
      <p>
        I enjoy bridging the gap between programming and design combining my technical knowledge
        with my keen eye for design to create a beautiful product. My goal is to always build
        applications that are scalable and efficient under the hood while providing engaging,
        pixel-perfect user experiences.
      </p>
      <p>
        Fast-forward to today, and I’ve had the privilege of working at a{' '}
        <a
          className="underline-link"
          href="https://www.proxym-group.com/"
          target="_blank"
          rel="noreferrer">
          global IT player,
        </a>{' '}
        <a
          className="underline-link"
          href="https://github.com/hichemfantar"
          target="_blank"
          rel="noreferrer">
          OSS,
        </a>{' '}
        and a
        <a
          className="underline-link"
          href="https://essths.ieee.tn/"
          target="_blank"
          rel="noreferrer">
          student-led association
        </a>{' '}
        . My main focus these days is building accessible, inclusive products and digital
        experiences at an{' '}
        <a className="underline-link" href="https://digmaco.com/" target="_blank" rel="noreferrer">
          advertising agency
        </a>{' '}
        for a variety of clients.
      </p>
      <EmploymentStatus />
    </div>
  </section>
);

export default Background;
