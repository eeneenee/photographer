import React from "react";
import { Link } from "react-router-dom";
import '../style/stylesComponents/price.css';
import Logo from "./logo";

import {price} from "../content/scripts/price.js";

function Price({imgOrientation}) {
    const [active, setActive] = React.useState(false);
    const [iOpen, setIOpen] = React.useState(-1);

    const activeToggle = (i) => {
        if(i === iOpen){
            setActive(false);
            setIOpen(-1);
            document.querySelector('nav').classList.remove('active');
        } else {
            setActive(true);
            setIOpen(i);
            document.querySelector('nav').classList.add('active');
        }
    }
    const PriceDesc = () => {
        return(
            <div className="info__wrapper">
                <img className="info__img" src={price[iOpen].src[imgOrientation]} alt="" />
            <div className="info">
                <p className="info__cost">Цена: <span>{price[iOpen].price}</span></p>
                <p className="info__text time">Время съемки: <span>{price[iOpen].time}</span></p>
                <p className="info__text photo">Фото в обработке: <span>{price[iOpen].photo}</span></p>
                <p className="info__desc"><h3>Описание:</h3> <ul>{price[iOpen].all.map((item) => (<li>{item}</li>))}</ul></p>
                <p className="complete">Готовность фото:  <span>{price[iOpen].complete}</span></p>
            </div>
                <button className="info__button">
            <Link to='/contact' onClick={()=>{document.querySelector('nav').classList.remove('active');}}>
                    Забронировать дату
            </Link>
                </button>
            </div>
        )
    }
    const PriceCalc = () => {
        return(
            <div className="personal-calc__wrapper">
                <div className="personal-calc">
                    <h2 className="calc__header">Индивидуальный рассчет</h2>
                    <p className="calc__text">Если вы не нашли подходящий вид съёмки, то в этом разделе напишите вид съёмки, который хочется: контент-съёмка, предметная, репортаж. Я с вами свяжусь</p>
                    <p className="calc__text">Вы можете выбрать индивудальные опции, дополнительные услуги, выбрать часы или ускорить отдачу фотографий</p>
                </div>
                <button className="calc__button" >
                    <Link to='/contact'>Рассчитать стоимость</Link>
                </button>
           </div>
        )
    }
    return(
        <>
        <Logo active={active}/>
        <div className={`price ${active?"active":""}`} on={()=>{activeToggle()}}>
            
            <div className="price__category">
                {price.map((item, i) => (
                    <div key={i} className={`categoty__item ${iOpen === i?'active':''}`} onClick={()=>{activeToggle(i)}}><h3>{item.title}</h3></div>
                ))}
            </div>
            { active? PriceDesc(): PriceCalc()}
            
        </div>
        </>
    )












    // const[open, setOpen] = React.useState(-1);
    // const[itemIndex, setItemIndex] = React.useState();
    // const[active, setActive] = React.useState(false);

    // const activeToggle = () => {
    //     if(itemIndex===open){
    //         active?setActive(false):setActive(true);
    //     } else {
    //         setActive(true)
    //     }

    // }
    // const priceMain = () => {
    //     return(
    //         <div className="price__info">
    //         {/* <img className="price__img" src={item[itemIndex].src} alt={item.title}></img> */}
    //         <p className="price__cost">Цена: <span>{item[itemIndex].price}</span></p>
    //         <p className="price__text">Время съемки: <span>{item[itemIndex].time}</span></p>
    //         <p className="price__text">Фото в обработке: <span>{item[itemIndex].photo}</span></p>
    //         <p className="price__text">Доп. услуги: <span>{item[itemIndex].all}</span></p>
    //         <button className="price__button">Забронировать дату</button>
    //         </div>
    //     )
    // }

    // const PriceCalc = () => {
    //     return(
    //             <div className="price__calc">
    //                 <h2 className="calc__header">Индивидуальный рассчет</h2>
    //                 <p className="calc__text">Пройдите быстрый опрос для точной настройки фотосессии</p>
    //                 <p className="calc__text">Вы можете выбрать индивудальные опции, дополнительные услуги, выбрать часы или ускорить отдачу фотографий</p>
    //                 <Link to='/price/price-calc'>
    //                     <button className="calc__button">
    //                         Пройти тест
    //                     </button>
    //                 </Link>
    //             </div>
    //     );
    // }
    // return (
    //     <>
    //     <Logo active={active}/>
    //     <div className={`price ${active?"active":""}`}>
    //         {active &&
    //             <img className="price__img" src={item[itemIndex].src} alt={item.title} ></img>}
    //         <div className={`price__category ${active?"active":""}`}>
    //             <ul className="category__wrapper">
    //                 {price.map((item, index) => (
    //                     <div key={index} className={`category__item-wrapper ${active&&itemIndex===index?"active":""} `}  onClick={() => {setItemIndex(index); activeToggle()}} onMouseEnter={() => {setOpen(index)}} onMouseLeave={() => {active?setOpen(index):setOpen(-1)}}>
    //                         <li className={`category__item ${active&&itemIndex===index?"active":""} ${open===index?"hover":""}`} ><h3 className="category__title">{item.title}</h3></li>
    //                     </div>
    //                 ))}
    //             </ul>
    //         </div>

    //         <div className="price__main">
    //             {
    //                 active?priceMain():PriceCalc()
    //             }
    //         </div>

    //     </div>
    //     </>
    // )
}

export default Price;
