import React from "react"
import { TiChevronLeft } from "react-icons/ti"
import Button from "./Button"



export default function ShowFullCard({ card, count, style, icon, onChangeStatus, onShowFullCard }) {
    return (
        <div className="full-card ">
            <div className="card-item">
                <button className="btn clickable" onClick={onShowFullCard}>
                    <TiChevronLeft />
                </button>
                Question № {count}
            </div>
            <div className="card-item">
                {card.question}
                <span className={style}>{icon}</span>
            </div>
            <div className="card-item ">
                <Button status={0} changeStatus={onChangeStatus} />
                <Button status={1} changeStatus={onChangeStatus} />
                <Button status={2} changeStatus={onChangeStatus} />
            </div>
        </div>
    );
}
