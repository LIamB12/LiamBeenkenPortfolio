import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar/Navbar';
import Header from './header/Header';
import Skills2 from './skills2/Skills2';
import Projects from "./projects/Projects";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    
    <div className="gradient_back">
      <Navbar id ="comp"/>
      <Header id="comp"/>
    
    </div>
    <div className="skill_main test">
      <Skills2 id = "idSkill"/>
      <Projects />
    </div>
      
    
    

    <div className="footer">
      <p>Contact me at liam.beenken@gmail.com</p>
    </div>

    <div id="contacts">
      <a href = "https://www.linkedin.com/in/liam-beenken/" target="_blank" rel="noreferrer">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href = "https://github.com/LIamB12" target="_blank" rel="noreferrer">
        <i class="fa-brands fa-github"></i>
      </a>
      <p></p>
      </div>
    

  </>

  
);


