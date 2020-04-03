import {useState} from "react";


export default function useCurrency(initialValue = 'KGS') {
    const [state, setState] = useState(initialValue);

    const chooseCurrency = event => {
        setState(event.target.value);
    };

    return { currency: state, chooseCurrency}
}


