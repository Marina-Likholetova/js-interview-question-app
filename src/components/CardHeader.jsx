import React from "react";
import Form from "./Form";



export default function CardHeader({ cards, onchangeCards }) {
    const totalResolved = cards.filter((card) => card.status === 1).length;
    const totalUnresolved = cards.filter((card) => card.status === 2).length;
    

    return (
        <div className="top">
            <Form cards={cards} onchangeCards={onchangeCards}/>
            <div className="points">
                <span className={totalResolved ? "resolved" : ""}>{totalResolved}</span>/
                <span className={totalUnresolved  ? "unresolved" : ""}>{totalUnresolved }</span>
            </div>
        </div>
    );
}
