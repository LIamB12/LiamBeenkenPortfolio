import React from 'react'
import './skills2.css'
const Skills2 = () => {
  return (
    <div className="skills_outer">
        <div className="header">
            <h1> SKILLS </h1>
        </div>
        
        <div className="skills_card">
            <ul>
                <li className = "py"><i class = "fa-brands fa-python"></i><p>3 years of experience coding in Python, with intermediate knowledge of algorithms and data structures</p></li>
                <li className = "jav"><i class = "fa-brands fa-java"></i><p>2 years of experince coding in java, with a solid understanding of the principles of Object Oriented Programming</p></li>
                <li><i class = "fa-brands fa-react"></i><p>6 months of experience using the react framework. I am currently involved in a club using the framework for professional development, and have completed a Codecademy course on the framework, as well as standard HTML, CSS, and JavaScript.</p></li>

            </ul>
        </div>
    </div>
  )
}

export default Skills2