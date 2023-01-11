import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar/Navbar';
import Header from './header/Header';
import Skills from './skills/Skills';
import Projects from "./projects/Projects";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
    <div className="gradient_back">
      <Navbar id ="comp"/>
      <Header id="comp"/>
    
    </div>
    <div className="skill_main test">
      <Skills />
    </div>
      
      <Projects />

    <div id="contacts">
  
      <i class="fa-regular fa-envelope"></i>
      <i class="fa-brands fa-linkedin"></i>
      <i class="fa-brands fa-github"></i>
      <p></p>
    </div>
    

  </>

  
);

