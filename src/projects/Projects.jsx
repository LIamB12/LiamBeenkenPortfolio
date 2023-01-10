import React, {useState} from 'react';
import "./projects.css";

const images = [
    "https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
]

const Projects = () => {

    const [index, setIndex] = useState(0);
    const handleClickLeft = () => {
        if (index > 0) {
            setIndex(index-1)
        }
    }

    const handleClickRight = () => {
        if (index < 1) {
            setIndex(index+1)
        }
    }
    
    return (
        <div className="project_main">
            <h2>PROJECTS</h2>
            <div className="carousel">
                <h1 onClick={handleClickLeft}>&lt;</h1>
                <img src = {images[index]} />
                <h1 onClick={handleClickRight}>&gt;</h1>
            </div>
        </div>
    )
}

export default Projects