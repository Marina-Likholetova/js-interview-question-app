import React from "react"
import status_map from "./config/status_map"


export default function Button({ status, changeStatus }) {

    const handleClick = () => {
        changeStatus(status);
    };

    return (
        <button className={"btn " + status_map[status]["style"]} onClick={handleClick}>
            {status_map[status]["text"]}
        </button>
    );
}
