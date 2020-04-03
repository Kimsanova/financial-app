import {INCOME_LOADED} from "../constants";

const incomeLoaded = (income) => {
    return {
        type: INCOME_LOADED,
        payload: income
    }
}

export {
    incomeLoaded,
}