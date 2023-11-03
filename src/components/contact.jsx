import React, {useRef} from "react";
import { Email } from "./email.js";
import Logo from "../components/logo.jsx";
import '../style/stylesComponents/contact.css';


function Contact () {
    const sendEmail = (e) => {
        console.log(form);
        e.preventDefault();
        Email({form});

        form.current.reset();
    }
    const form = useRef({});
    return(
        <>
        <Logo/>
        <div className="contact">
            <h2 className="contact__title">Выберите удобный способ для связи</h2>
            <div className="contact__menu">
                <form className="form" ref={form} onSubmit={sendEmail}> 
                    <h3 className="form__title">Заполните форму для отправки</h3>
                    <div className="form__place">
                        <div className="form__inputs">
                            <input type="text" name="name" placeholder="Имя" />
                            <input type="email" name="email" placeholder="Email" />
                            <input type="tel" name="tel" placeholder="Телефон"></input>
                            <label>Дату съемки:<input type="date" name="date"/></label>
                        </div>
                        <textarea className="desc" placeholder="Опишите важи желания" name="desc"></textarea>
                    </div>
                    <button>Отправить</button>
                </form>
                <p className="hr"> или </p>
                <div className="links">
                    <a href='mailto:vichka.usenko.99@mail.ru'>vichka.usenko.99@mail.ru</a>
                    <div className="social-links">
                        <a href="https://instagram.com/vikas_raskolbass?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr">inst.</a>
                        <a href="https://t.me/vikass_raskolbass">tg.</a>
                        <a href="https://vk.com/club207352274">vk.</a>
                    </div>
                </div>
            </div>
        </div>
        </> 
    );

}
export default Contact;