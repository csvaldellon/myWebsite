import React from 'react';
import yaml from 'js-yaml';
import experienceData from './data.yaml';

function renderExperienceDetails(experiences) {
  return experiences.map((experience, index) => (
    <li key={index}>
      <span className="subheading">{experience.title}</span> - {experience.company}, {experience.years}
      <ul>
        {experience.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </li>
  ));
}

function Portfolio() {
  const experiences = yaml.load(experienceData);

  return (
    <div>
      <h1>My Portfolio</h1>

      <div className="section">
        <h2>About Me</h2>
        <p>
          Insert a brief description of yourself here.
        </p>
      </div>

      <div className="section">
        <h2>Education</h2>
        <ul>
          <li>
            <span className="subheading">Degree Name</span> - University Name, Year
          </li>
          {/* Add more education details if needed */}
        </ul>
      </div>

      <div className="section">
        <h2>Experience</h2>
        <ul>
          {renderExperienceDetails(experiences)}
        </ul>
      </div>

      <div className="section">
        <h2>Skills</h2>
        <ul>
          <li>
            <span className="subheading">Skill 1</span>
          </li>
          <li>
            <span className="subheading">Skill 2</span>
          </li>
          {/* Add more skills if needed */}
        </ul>
      </div>

      <div className="section">
        <h2>Contact</h2>
        <ul>
          <li>
            <span className="subheading">Email:</span> your.email@example.com
          </li>
          <li>
            <span className="subheading">Phone:</span> +1 123 456 7890
          </li>
          <li>
            <span className="subheading">Website:</span> www.example.com
          </li>
          {/* Add more contact details if needed */}
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
