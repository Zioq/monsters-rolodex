import React from "react";
import './cardList.style.css';
import {Card} from "../Card/Card";
export const CardList = (props) => {

    return (
        <div className="cardList">
            {props.monsters.map((monster => (
                <Card key={monster.id} monster={monster}/>
            )))}
        </div>
    )
};
