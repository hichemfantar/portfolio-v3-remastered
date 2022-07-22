import React from 'react';
import { email } from '@config';

export default function intro() {
  return (
    <header className="intro">
      <h1 className="intro__hello">
        Hello!
        <span className="emoji wave-hand animated" />
      </h1>
      <h2 className="intro__tagline">
        I'm
        <span className="name"> Hichem Fantar</span>, a design-minded full-stack software developer
        focused on building elegant interfaces &amp; robust backend APIs{' '}
        <span className="emoji technologist" />
      </h2>
      <h3 className="intro__contact">
        <span>Get in touch </span>
        <span className="emoji pointer" />
        <span>
          <a href={`mailto:${email}`} target="_blank" className="highlight-link" rel="noreferrer">
            {email}
          </a>
        </span>
      </h3>
    </header>
  );
}
