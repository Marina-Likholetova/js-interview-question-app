import { FiBell, FiCheckCircle } from "react-icons/fi";

const status_map = {
    0: {
        text: "Reset",
        style: "",
        icon: "",
    },
    1: {
        text: "Resolved",
        style: "resolved",
        icon: <FiCheckCircle />,
    },
    2: {
        text: "Unresolved",
        style: "unresolved",
        icon: <FiBell />,
    },
};

export default status_map;
