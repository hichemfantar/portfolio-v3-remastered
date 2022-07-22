import React from 'react';

export default function Switch() {
  return (
    <div className="switch-wrapper">
      <div className="sun" />
      <div className="toggle-wrapper">
        <input id="switch" type="checkbox" />
        <label htmlFor="switch" id="toggle">
          Toggle
        </label>
      </div>
      <div className="moon" />
    </div>
  );
}
