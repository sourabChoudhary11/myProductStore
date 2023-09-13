import { allState } from "./state";

export const reducer = (state = allState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const eleExist = state.cartItems.find(ele => ele.id === action.payload.id)
            const eleIndex = state.cartItems.findIndex(ele => ele.id === action.payload.id)
            if (eleExist) {
                const newUpdatedArray = [...state.cartItems];
                newUpdatedArray[eleIndex].quantity++; 
                return { ...state, cartItems: newUpdatedArray };
            }
            else {
                const newArray = state.cartItems.map(ele=>{
                    if(true){
                        return ele
                    }
                })
                newArray.push({...action.payload, quantity: 1})
                return {...state, cartItems: newArray};
            }
        case 'DECREMENT_QUANTITY':
            const existOrNot = state.cartItems.find(ele => ele.id === action.payload)
            const existIndex = state.cartItems.findIndex(ele => ele.id === action.payload)
            if (existOrNot.quantity <= 1) {
                return state
            }
            else if (existOrNot) {
                const decQuantityArray = [...state.cartItems];
                decQuantityArray[existIndex].quantity--;
                return { ...state, cartItems: decQuantityArray }
            }
        case 'INCREMENT_QUANTITY':
            const isExist = state.cartItems.find(ele => ele.id === action.payload)
            const isExistIndex = state.cartItems.findIndex(ele => ele.id === action.payload)
            if (isExist) {
                const incQuantityArray = [...state.cartItems];
                incQuantityArray[isExistIndex].quantity++;
                return { ...state, cartItems: incQuantityArray }
            }
        case 'DELETE_FROM_CART':
            const updatedCartItems = state.cartItems.filter(ele => ele.id !== action.payload)
            return { ...state, cartItems: updatedCartItems };
        default:
            return state;
    }
}