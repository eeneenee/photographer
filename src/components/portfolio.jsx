
import Logo from "./logo";
import '../style/stylesComponents/portfolio.css';
import PortfolioItem from "./portfolioItem";

function Portfolio({imgOrientation}) {
    let classRight = "right";
    let classLeft = "";

    if(imgOrientation === 1){
        classRight += " vertical";
        classLeft += " vertical";
    }

    return(
        <div className="portfolio">

            <Logo />
            <PortfolioItem count={0} classPos={classLeft}/>
            <PortfolioItem count={1} classPos={classRight} />
            <PortfolioItem count={2} classPos={classLeft}/>
            <PortfolioItem count={3} classPos={classRight} />
            <PortfolioItem count={4} classPos={classLeft}/>
            <PortfolioItem count={5} classPos={classRight}    />
        </div>
    )

}

export default Portfolio;