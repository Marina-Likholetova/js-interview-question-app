import React from "react";
import Form from "./Form";
import Card from "./Card";



export default function CardList({ cards }) {

    return (
        <div className="card-flex">
            <Form cards={cards} />
            {cards.map((card, i) => (
                <Card card={card} count={i + 1} key={i} cards={cards} />
            ))}
        </div>
    );
}
