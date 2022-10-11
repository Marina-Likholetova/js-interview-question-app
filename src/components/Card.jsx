import React from "react"
import { useState } from "react"
import status_map from "./config/status_map"
import ShowFullCard from "./ShowFullCard"



export default function Card({ card, count, cards, onchangeCards}) {
    const [status, setStatus] = useState(card.status);
    const [FullCard, setFullCard] = useState(false);


    function onChangeStatus(status) {
        setStatus(status);
    
        const updateCard = cards.find((item) => item.id === card.id);
        if (updateCard) updateCard.status = status;
        
        onchangeCards(cards);
    }


    function onShowFullCard(e) {
        if (e.target.closest(".clickable")) {
            setFullCard(!FullCard);
        }
    }

    return (
        <div className={"card " + status_map[status]["style"]} onClick={onShowFullCard}>
            <span className="card-item clickable">{count}</span>
            <span className="card-item clickable">{card.question}</span>
            <span className="card-item clickable">{status_map[status]["icon"]}</span>
            {FullCard && (
                <ShowFullCard
                    card={card}
                    count={count}
                    style={status_map[status]["style"]}
                    icon={status_map[status]["icon"]}
                    onChangeStatus={onChangeStatus}
                    onShowCard={onShowFullCard}
                />
            )}
        </div>
    );
}
