import React  from "react";
import { Link } from "react-router-dom";
        
function Nav({active}) {
    const leaveActive = () => {
        document.querySelector('nav').classList.remove('active');
    }
        return(
            <div className='nav-bar__wrapper'>                                  
                <nav className={`nav-bar ${active}`}>
                    <Link to='/' onClick={()=>{leaveActive()}}>Home</Link>
                    <Link to='/price'>Price</Link>
                    <Link to='/portfolio' onClick={()=>{leaveActive()}}>Portfolio</Link>
                    <Link to='/contact' onClick={()=>{leaveActive()}}>Contact</Link>
                    <Link to='/aboutMe'>AboutMe</Link>
                </nav>  
            </div>
        )
    }
export default Nav;
