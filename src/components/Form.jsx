import React from "react"
import { FiPlusSquare } from "react-icons/fi"
import { useState } from "react"



export default function Form({ cards, onchangeCards }) {
    const [newQuestion, setNewQuestion] = useState("");

    const onChangeInput = (e) => {
        setNewQuestion(e.target.value.trim());
    };

    const addQuestion = () => {
        if (newQuestion) {
            onchangeCards(() => {
                return [...cards, {
                    id: cards.length + 1,
                    question: newQuestion,
                    url: "",
                    status: 0,
                }]
            });
        }
    };

    return (
        <form action="" className="form">
            <input type="text" placeholder="Add question" onChange={onChangeInput} />
            <button className="btn added-btn" onClick={addQuestion}>
                <FiPlusSquare />
            </button>
        </form>
    );
}
