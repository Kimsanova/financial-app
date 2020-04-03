import {useState} from "react";

export default function useAmount( initialValue = '') {

    const [state, setState] = useState(initialValue);

    const enterAmount = (event) => {
        setState(event.target.value)
    }

    return { amount: state, enterAmount}
}