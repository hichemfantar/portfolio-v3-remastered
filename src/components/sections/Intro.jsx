import React, { useEffect, useRef } from 'react';
import { email } from '@config';

export default function intro() {
  const emojiWaveHand = useRef(null);

  useEffect(() => {
    function waveOnLoad() {
      emojiWaveHand.current.classList.add('wave');
      setTimeout(function () {
        emojiWaveHand.current.classList.remove('wave');
      }, 2000);
    }

    setTimeout(function () {
      waveOnLoad();
    }, 1000);

    emojiWaveHand.current.addEventListener('mouseover', function () {
      emojiWaveHand.current.classList.add('wave');
    });

    emojiWaveHand.current.addEventListener('mouseout', function () {
      emojiWaveHand.current.classList.remove('wave');
    });
  }, []);

  return (
    <header className="intro">
      <h1 className="intro__hello">
        Hello!
        <span className="emoji wave-hand animated" ref={emojiWaveHand} />
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
