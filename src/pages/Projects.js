import React from 'react';
import './Projects.css';

import holden from './holden.png';
import jamieson from './rees.jpg';
import cullen from './ferg.png';
import headshot from './ferg.jpg'


const Projects = () => {
  return (
    <div className="projects">
     <h1>About Me</h1>
   
   
          <div className="project-content">
            <div className="project-image">
              <img src={headshot} alt={"matt headshot"} />
            </div>
            <div className="project-text">
              <h2>{"Matt Duarte"}</h2>
             <p>Hi, I’m Matt Duarte. I was born in Hamilton, Ontario, and I’ve been passionate about building software since 2019.</p>
          <p>I’m currently studying Computer Science at Brock University,  studying in LABR 2Q95 and loving it. I have learned that animals need our help. It is our job to speak for the voiceless!</p>
 
        


            </div>
          </div>
    
     
     
    </div>
  );
};

export default Projects;



