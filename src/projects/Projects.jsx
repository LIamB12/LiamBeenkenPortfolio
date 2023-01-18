import React, {useState} from 'react';
import "./projects.css";
import { motion, useAnimationControls } from 'framer-motion'

const images = [
    "https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
]

const Projects = () => {
    const controls = useAnimationControls()
    const [index, setIndex] = useState(0);
    const handleClickLeft = () => {
        if (index > 0) {
            setIndex(index-1)
        }
        controls.start({scale: [1,1.1,1], transition: {duration: 0.5}})
    }

    const handleClickRight = () => {
        if (index < 1) {
            setIndex(index+1)
        }
        controls.start({scale: [1,1.1,1], transition: {duration: 0.5}})
    }
    
    return (
        <div className="project_main">
            <h1>PROJECTS</h1>
            <div className="projects">
    
                    <a rel = "noreferrer" target = "_blank" href = "https://liamb12.github.io/InitialResponse2/"><p>Initial Response Web App (React, HTML, CSS, JS)</p></a>
                    <a href = "https://github.com/LIamB12/Find-Instagram-Users-Not-Following-You-Back" rel = "noreferrer" target= "_blank"><p>Instagram Follower Comparison Bot (Python, Instaloader.py)</p></a>
                    <a rel = "noreferrer" target="_blank" href = "https://liamb12.github.io/LiamBeenkenPortfolio/"><p>Portfolio Site (React, HTML, CSS, JS)</p></a>
                
            </div>
        </div>
    )
}

export default Projects