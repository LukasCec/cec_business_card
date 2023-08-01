import React from "react";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";  

import AvatarImage from './avatar.jpg';

export default function Main() {
    return (
        <div className="main--container ">
           <img className="avatar--img" src={AvatarImage} alt="Example" />
                <CardBody />
                <CardFooter />
        </div>  
    );
}