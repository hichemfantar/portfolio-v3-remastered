import { socialMedia } from '@config';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <div className="top">
          <span>Designed &amp; Developed by</span>
        </div>
        <div className="bottom">
          <span>Brittany Chiang</span>
          <StaticImage
            className="emoji"
            src="../images/img/emojis/rockon.png"
            width={500}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="emoji"
          />

          <span>2018</span>
        </div>
        <br />
        <div className="top">
          <span>Remastered by</span>
        </div>
        <div className="bottom">
          <span>Hichem Fantar</span>
          <StaticImage
            className="emoji"
            src="../images/img/emojis/rocket.png"
            width={500}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="emoji"
          />

          <span>2022</span>
        </div>
      </div>
      <div className="footer__links">
        {socialMedia &&
          socialMedia.map(({ url, name }, i) => (
            <a href={url} target="_blank" title={name} key={i} rel="noreferrer">
              <span className="text">{name}</span>
              {/* <img src="/img/social/{{link.title}}.svg" alt={name} /> */}
            </a>
          ))}
      </div>
    </footer>
  );
}
