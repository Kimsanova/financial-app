import {useState} from "react";


export default function useCategory( initialValue = '') {

    const [state, setState] = useState(initialValue);

    const chooseCategory = (event) => {
        setState(event.target.value)
    }

    return { category: state, chooseCategory}
}

