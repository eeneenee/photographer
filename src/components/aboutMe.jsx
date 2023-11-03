import React from 'react';
import video from '../content/video/v-bg.MOV';
import '../style/stylesComponents/aboutMe.css';
import Logo from './logo';

function AboutMe() {

  return (
    <div className='aboutMe'>
      <Logo/>
      <div className='slider'>
        <div className="slider__item">
          <h3>Привет!</h3>
          <h3>Я – Вика ❤️</h3>
        </div>
        <div className="slider__item">
          <div className='item__table'>
          <p>Что я снимаю? </p>
          <p>Индивидуальные</p>
          <p>Love story</p>
          <p>Cвадебные истории</p>
          <p>Предметные</p>
          <p>Репортаж</p>
          </div>
        </div>
        <div className="slider__item">
          <div className="item__wrapper">
            <p>Съёмки это неотъемлемая часть моей жизни уже много лет✨</p>
            <p>В каждом кадре я вижу что-то глубокое, ценное и теплое. </p>
            <p>То, что будет согревать ваши сердца на протяжении долгих лет.</p>
            <p>В своих фотографиях я документирую ваши чувства с помощью фотокарточек, показываю вас с настоящей стороны, ваши живые эмоции, прикосновения и любовь к себе, друг другу и всему миру. </p>
            <p>И для меня важно быть на съёмке вашим близким другом, с которым вам комфортно и весело.</p>
          </div>
        </div>
        <div className="slider__item">
          <p>Давай дружить?</p></div>
      </div>
      <video className='video-bg' src={video} playsInline muted autoPlay loop></video>
          </div>
  );
}

export default AboutMe;