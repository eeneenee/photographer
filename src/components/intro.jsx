import React, { useEffect } from "react";
import '../style/stylesComponents/intro.css';
import {slider} from '../content/scripts/favorite.js';
import Logo from "./logo";


function Intro({resetTimeuot}) {
    const [i, setI] =React.useState(0);
    const [count1, setCount1] = React.useState(0);
    const [count2, setCount2] = React.useState(1);
    const [change, setChange] = React.useState(false);
    let screenOrientation = window.innerWidth > window.innerHeight, 
        iScreen;
    if (screenOrientation){
        iScreen = 0;
    } else {
        iScreen = 1;
    }
    
    useEffect(() => {
        setTimeout(() => {
            setChange(!change);
            setTimeout(() => {
                const f = (c, setC) => {
                    if(c + 2 < slider[iScreen].length){
                        setC(c + 2);
                    } else if (c + 1 === slider[iScreen].length - 1){
                        setC(c * 0);
                    } else {
                        setC(c * 0 + 1);
                    }   
                }

                if (i === 0){
                    f(count1, setCount1);
                    setI(i + 1);
                } else if (i === 1){
                    f(count2, setCount2);
                    setI(i - 1);
                }
            }, 1500);
        }, 1500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i]);
    return (
        <div className="intro">
            <Logo/>
            <div className="bg-slider" onMouseMove={resetTimeuot}>
                <img className={`img-slider ${change?'opacity':''}`} src={slider[iScreen][count1].link} alt={slider[iScreen][count1].id}></img>
                <img className={`img-slider ${!change?'opacity':''}`} src={slider[iScreen][count2].link} alt={slider[iScreen][count2].id}></img>
            </div>
        </div>
    );
  }

export default Intro;