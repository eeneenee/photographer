import React from "react";
import { useParams, Link } from "react-router-dom";
import {gallery} from "../content/scripts/gallery.js";
import Logo from "./logo";

function Gallery () {
    const {id} = useParams();
    const galeryPage = gallery[id];

    const focus = (el) => {
        el.classList.toggle('focus');
    }
    return(
        
        <>
        <Link to='/portfolio' >
            <div className="button-back__wrapper">
                <div className="button-back">
                   <p>Back</p>
                </div>
            </div>
        </Link>
        <div className="gallery container">
        <Logo />
                    {galeryPage.map((item, i) => (
                        item.type==='img'
                        ?
                        <div className="img__wrapper" style={{flex: `${item.orientation === 'vertical' ? '1 1 45%' : '1 1 100%' }`}} onClick={(e)=>{focus(e.currentTarget)}} >
                            <img className="gallery__img"  key={item.id} src={item.link} alt={item.id} ></img>  
                        </div>
                        :
                        <div className="gallery__description">
                        <h3 className="gallery__title">{galeryPage[0].title}</h3>
                        <p className="gallery__comment">{galeryPage[0].comment}</p>
                        <p className="gallery__model">{galeryPage[0].model}</p>
                        </div>
                    ))}
                </div>
        </>
    )
}

export default Gallery;