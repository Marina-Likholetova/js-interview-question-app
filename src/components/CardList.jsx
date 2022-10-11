import React from "react"
import Card from "./Card"
import CardHeader from "./CardHeader"



export default function CardList({ cards, onchangeCards}) {

    return (
        <div className="card-flex">
            <CardHeader cards={cards} />
            {cards.map((card, i) => (
                <Card
                    card={card}
                    count={i + 1}
                    key={i}
                    cards={cards}
                    onchangeCards={onchangeCards}
                />
            ))}
        </div>
    );
}
