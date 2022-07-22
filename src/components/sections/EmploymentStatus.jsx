import React from 'react';

export default function EmploymentStatus() {
  return (
    <a className="status" href="/resume.pdf" target="_blank">
      <div className="status__light">
        <div className="status__light__ring" />
        <div className="status__light__led" />
      </div>
      <div className="status__message">Currently seeking new and exciting opportunities!</div>
    </a>
  );
}
