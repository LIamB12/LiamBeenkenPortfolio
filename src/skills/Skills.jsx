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
            <Skill iClass = "fa-brands fa-python" skillText = "HFIUH WEFHWEF HIUWE HFIUWE FIUWUFHWUEH FIUHFI UWHFHFIUWH FIUWHF IUHIUFH WEFHIU WEHU I" name = "python"/>

            </div>
            <div className="skill_flex">
            <Skill iClass="fa-brands fa-java" skillText = "HFIUH WEFHWEF HIUWE HFIUWE FIUWUFHWUEH FIUHFI UWHFHFIUWH FIUWHF IUHIUFH WEFHIU WEHU I" name ="java"/>
                
            </div>
            <div className="skill_flex">
            <Skill iClass = "fa-brands fa-react" skillText = "HFIUH WEFHWEF HIUWE HFIUWE FIUWUFHWUEH FIUHFI UWHFHFIUWH FIUWHF IUHIUFH WEFHIU WEHU I" name = "react"/>
                
            </div>
        
        </div> 
    </div>
    </>
  )
}



export default Skills