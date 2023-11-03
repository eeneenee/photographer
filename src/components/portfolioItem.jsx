import React from "react";
import { Link } from "react-router-dom";
import {gallery} from "../content/scripts/gallery.js";


function PortfolioItem({ classPos, count }) {
    
    return(
        <>
            <Link to={`/portfolio/${count}`} >
        <div className={`portfolio-item ${classPos}`}>
            <img className="portfolio-item__img" src={gallery[count][0].link} alt={gallery[0].id}></img>
            <h2 className="portfolio-item__title">{gallery[count][0].title}</h2>
        </div>
        </Link>
        
        </>
    )
}

export default PortfolioItem;