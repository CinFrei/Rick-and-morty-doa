import Button from './Button'
import styled from 'styled-components'
import PortalPage from './assets/portal.gif'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default function Start() {
return (
    <ButtonStart>
    <img src={PortalPage} alt="Jump in!" />
    <Link to="/quiz"><Button
        className="Button__next"
        bgColor="#22a1b5"
        glowColor="#00ff1e"
        fontColor="#fff"
        >
        Start
        </Button></Link>
    </ButtonStart>
    )
        
}

const ButtonStart = styled.div`

button {
    width: 100%;
    grid-column: 1/-1;
    border-right: none;
    border-left: none;
}

a {
text-decoration: none;}
`