import React from "react";
import Mail from './Mail.png';


export default function CardBody() {
    return (
        <div className="card--body">
            <h1 className="card--body__title">Lukáš Čeč</h1>
            <p className="card--body__undertitle">Frontend Developer</p>
            <a className="card--body__link" href="http://pizzeriafantazia.sk/">lukascec.website</a>
            <div className="btn-box">
                <button className="card--body__email"> <img src={Mail} alt=""/> Email</button>
            </div>

             

            <div className="card--body__about">
                <h2 className="card--body__about__title">About</h2>
                <p className="card--body__about__text">I am a frontend developer with a particular interest in making things simple and functional. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h2 className="card--body__about__title">Interests</h2>
                <p className="card--body__about__text">Food lover. Music enjoyer. Gamer boy. Internet fanatic. Travel. Airsoft player. Coffee fanatic. </p>
            </div>
        </div>
    );
}