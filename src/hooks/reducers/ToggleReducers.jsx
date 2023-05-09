import { useReducer } from "react";

const Reducer = () => {
    const reducer = (state, action) => {
    switch (action.type) {
        case 'ONE':
            return [...state, action.payload];
        case 'TWO':
            return [...state, action.payload];
        case 'THREE':
            return [...state, action.payload];
        case 'FOUR':
            return [...state, action.payload];
        case 'FIVE':
            return [...state, action.payload];
        default:
            return state;
    }
}

    const [state, dispatch] = useReducer(reducer, []);
}

export default Reducer;