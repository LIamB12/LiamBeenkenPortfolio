import React, {useState} from 'react';
import './skill.css';

const Skill = (props) => {
    const [expanded, setExpanded] = useState(false);


    if (expanded) {
        return (
            <div className="skill_box">
                <div className={"skill_box_img" + " " + props.name}>
                    <i class={props.iClass}></i>
                </div>
                <div className="skill_box_text">
                    <p>{props.skillText}</p>
                </div>
                <div className="skill_box_arrow" onClick = {() => setExpanded(!expanded)}>
                <i class="fa-solid fa-caret-right"></i>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="skill_box">
                <div className={"skill_box_img" + " " + props.name}>
                    <i class={props.iClass}></i>
                </div>
                <div className="skill_box_arrow" onClick = {() => setExpanded(!expanded)}>
                <i class="fa-solid fa-caret-right"></i>
                </div>
            </div>
        )
    }
    
}


export default Skill