import React from "react"
import { useState } from "react"
import status_map from "./config/status_map"
import ShowFullCard from "./ShowFullCard"



export default function Card({ card, cards, count, onchangeCards}) {
    const [status, setStatus] = useState(card.status);
    const [FullCard, setFullCard] = useState(false);


    const onChangeStatus = (status) => {
        setStatus(status);
        onchangeCards(() => {
            return cards.map((item) => (item.id === card.id) ? { ...item, status } : item);
        });
    }


    const onShowFullCard = (e) => {
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
