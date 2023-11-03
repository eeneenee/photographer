import React from "react";
import { Routes,  Route, useLocation } from "react-router-dom";

import "./style/App.css";
import "./style/stylesComponents/nav.css";

import Intro from "./components/intro";
import Price from "./components/price";
import Portfolio from "./components/portfolio";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Nav from "./components/nav";
import NavIntro from "./components/navIntro";
import Gallery from "./components/gallery";





function App() {
    const [imgOrientation, setImgOrientation] = React.useState(window.innerWidth > window.innerHeight? 0 : 1);
    let location = useLocation().pathname;
    window.addEventListener('resize', () => {setImgOrientation(window.innerWidth > window.innerHeight? 0 : 1)});
  return (
    <div className="App" >
      {location === '/'? <NavIntro/> :location === '/aboutMe' ?<Nav active='active' />:<Nav/>}
      <Routes>
          <Route exact path='/' element={ <Intro /> } />
          <Route  path='/price' element={<Price imgOrientation={imgOrientation} />   } />
          <Route  path='/portfolio' element={<Portfolio imgOrientation={imgOrientation}/> } />
          <Route  path='/portfolio/:id' element={<Gallery /> } />
          <Route  path='/contact' element={<Contact /> } />
          <Route  path='/aboutMe' element={<AboutMe /> } />
      </Routes>
    </div>
  );
}

export default App;
