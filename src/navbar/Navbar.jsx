import React, {useState, useEffect} from 'react';
import './navbar.css';
import Hamburger from 'hamburger-react';

function Bar(props) {

    return (
        <>
            <div className="nav_container">
                <p onClick = {() => {window.scrollTo(0, 60)}}>ABOUT ME</p>
                <p onClick = {() => {window.scrollTo(0, 765)}} href = {document.getElementById("idSkill")}>SKILLS</p>
                <div onClick = {() => {window.scrollTo(0, 1300)}}><p>PROJECTS</p></div>
            </div>
        </>
    )
}
  
function Burger(props) {
    return <Hamburger color="black" size = {27} onClick = {() => alertBox}/>
}

function ShowMenu(props) {
    if (window.innerWidth < 845) {
      return <Burger />;
    }
    return <Bar />;
  }


const Navbar = () => {
  
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
    }
    useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
        window.removeEventListener('resize', setWindowDimensions)
    }
    }, [])
    return (
        <div className="container">
            <div className="name">
                <p>LIAM BEENKEN</p>
            </div>


            <ShowMenu className = "menu1"/>
            
        </div>
  )
}

function alertBox() {
    alert("Mobile menu coming soon");
}
export default Navbar