import {useState} from "react";

export default function useComment( initialValue = '') {

    const [state, setState] = useState(initialValue);

    const changeComment = (event) => {
        setState(event.target.value)
    }

    return {comment: state, changeComment}
}