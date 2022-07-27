import React, { useEffect, useRef } from 'react';
import pointingUp from '@images/img/emojis/pointing-up.png';
import jQuery from 'jquery';

export default function TopButton() {
  const topButton = useRef(null);

  useEffect(() => {
    const introHeight = document.querySelector('.intro').offsetHeight;

    window.addEventListener(
      'scroll',
      function () {
        if (window.scrollY > introHeight) {
          topButton.current.style.display = 'inline-block';
        } else {
          topButton.current.style.display = 'none';
        }
      },
      { passive: true },
    );

    topButton.current.addEventListener('click', function () {
      jQuery('html, body').animate({ scrollTop: 0 }, 500);
    });
  }, []);

  return (
    <button id="top-button" ref={topButton}>
      <img src={pointingUp} alt="" />
    </button>
  );
}
