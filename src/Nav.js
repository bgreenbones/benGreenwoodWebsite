import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fed',
      main: '#fed',
      dark: '#fed',
      contrastText: '#000',
    },
  },
});

const getNavMenuScrollPosition = (navBarHeight) => {
    return (window.innerHeight - navBarHeight) * 0.5;
}

const getNavMenuSizePosition = () => (window.innerWidth - window.innerHeight) * 0.35;
const getNavMenuBackgroundPositionY = (navBarHeight) => -(getNavMenuSizePosition() + getNavMenuScrollPosition(navBarHeight));
export { getNavMenuSizePosition, getNavMenuScrollPosition, getNavMenuBackgroundPositionY };



function Nav({ height=200, bgImage=false }) {
    const [isOpen, setOpen] = useState(false);

    const navigationButtons = [
        { label: "music", href: "content/music", key:3 },
        { label: "tech", href: "content/projects", key:2 },
        { label: "bio", href: "content/bio", key:1 },
        // { label: "Contact", href: "content/contact", key:4 },
        // { label: "DONATE", href: "content/donate", key:5 },
      ];
    
    const handleClick = (button) => {
        if (button.hasOwnProperty("href")) {
            let href = window.location.protocol + "//" + window.location.host + "/" + button.href;
            window.location.assign(href);
        }
        if (button.hasOwnProperty("externalLink")) {
            window.open(button.externalLink, "_blank");
        }
    };

    const getButtonClasses = (button) => {
        const visiting = window.location.pathname === "/" + button.href ? " visiting" : "";
        return "navigationButton" + visiting;
    }
 
    const menuStyles ={
        height:`${height}px`,
        backgroundImage: bgImage ? "linear-gradient(to bottom right, #001347, #003730)" : "",
        // backgroundPositionX: 0,
        // backgroundPositionY: getNavMenuBackgroundPositionY(height),
    }
    
    return <div className="navigation-menu" id="navigation-menu" style={menuStyles}>
        <div id="navigation-menu-row" style={{height:`${height}px`}}>
            <div className="headerContent mobile-only">
                <a href="/"><img src="/assets/selfie.jpg" id="face" alt="Ben's Face"/></a>
                {isOpen ? <div className="headerContent navButtons mobile">{navigationButtons.map((button) => 
                            <button className={getButtonClasses(button)} key={button.key} onClick={() => handleClick(button)}>{button.label}</button>)}</div>
                        : <>Ben Greenwood</> }
                <IconButton className="hamburger" onClick={() => setOpen(!isOpen)} theme={theme} color="secondary">{isOpen ? <CloseIcon fontSize="large"/> : <MenuIcon fontSize="large"/> }</IconButton>
            </div>
            <div className="headerContent navButtons desktop-only">
                <a href="/"><img src="/assets/selfie.jpg" id="face" alt="Ben's Face"/></a>
                {navigationButtons.map((button) =>
                <button className={getButtonClasses(button)} key={button.key} onClick={() => handleClick(button)}>{button.label}</button>)}
            </div>
        </div>
    </div>
}

export default Nav;
    