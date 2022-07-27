import React, { useEffect, useRef } from 'react';

export default function Switch() {
  const toggle = useRef(null);
  const switcher = useRef(null);

  useEffect(() => {
    toggle.current.addEventListener('click', function () {
      const isChecked = switcher.current.checked;
      if (isChecked) {
        document.querySelector('body').classList.remove('night');
        document.querySelector('html').style.colorScheme = 'light';
      } else {
        document.querySelector('body').classList.add('night');
        document.querySelector('html').style.colorScheme = 'dark';
      }
    });
  }, []);

  return (
    <div className="switch-wrapper">
      <div className="sun" />
      <div className="toggle-wrapper">
        <input id="switch" type="checkbox" ref={switcher} />
        <label htmlFor="switch" id="toggle" ref={toggle}>
          Toggle
        </label>
      </div>
      <div className="moon" />
    </div>
  );
}
