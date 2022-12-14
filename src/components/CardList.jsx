import React from "react"
import Card from "./Card"
import CardHeader from "./CardHeader"
import { useState, useEffect } from "react"



export default function CardList({ cards: data }) {
    const [cards, setCards] = useState(data);

    const onchangeCards = (fn) => {
        setCards(fn);
    };

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(cards));
    }, [cards]);
        
    
    
    
    return (
        <div className="card-flex">
            <CardHeader cards={cards} onchangeCards={onchangeCards}/>
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
