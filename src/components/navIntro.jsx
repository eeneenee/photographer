import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import subtract from  "../content/img/Icon/Subtract.png";
import iconW from "../content/img/Icon/iconWhite.png";
        
function NavIntro() {
    const [view, setView] = React.useState(false);
    let timer;
    const timerStart = () => {
        if(view === false){
            timer = setTimeout(() => {
                setView(true);
            },10000) 
        }
    }
    useEffect(()=>{
        timerStart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [view]);
    
    const resetTimer = () => {
        clearTimeout(timer);
        timerStart();
    }
        return(
            <>
            <div className={`nav-bar__wrapper ${view?'anim':''}`} onClick={() => {resetTimer()}} onMouseMove={() => {resetTimer()}}>                    
                <div className="subtract" style={{background: `url(${subtract})`, backgroundPosition: 'center', backgroundSize: '100% 100%'}}></div>
              
                <nav className="nav-bar">
                    <Link to='/'>Home</Link>
                    <Link to='/price'>Price</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/aboutMe'>AboutMe</Link>
                </nav>  
            </div>

            <div className={`icon__wrapper ${view?'anim':''}`} onClick={() => {setView(false)}} >
            <img src={iconW} alt="icon" className="icon"/>
            </div>
            </>
        )
    }
export default NavIntro;