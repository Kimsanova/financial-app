import {useState} from "react";

export default function useSelectDate (initialValue = new Date()) {
    const [ state, setState] = useState(initialValue);

    const chooseDate = (date) => {
        setState(date);
    };

    return { date: state, chooseDate }
}

