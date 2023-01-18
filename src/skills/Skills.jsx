import React, {useState} from 'react';
import './skills.css';

import Skill from './Skill';
const Skills = () => {
  return (
    <>

    <h2>SKILLS</h2>
    <div className="main">
        
        <div className="skills_container">
            <div className="skill_flex">
            <Skill iClass = "fa-brands fa-python" skillText = "3 years of experience coding in Python, with intermediate knowledge of algorithms and data structures" name = "python"/>

            </div>
        
            <div className="skill_flex">
            
            <Skill iClass="fa-brands fa-java" skillText = "2 years of experince coding in java, with a solid understanding of Object Oriented Programming" name ="java"/>
                
            </div>
            <div className="skill_flex">
            <Skill iClass = "fa-brands fa-react" skillText = "6 months of experience using the react framework, and am currently involved in a club using the framework for professional development" name = "react"/>
                
            </div>
        
        </div> 
    </div>
    </>
  )
}



export default Skills