import React,{useState} from 'react'

export const AppContext = React.createContext();
const initialState = {
    productsInCart:[],
    discountApplied:false
}
export const AppProvider = props => {
    const [cartState, setCartState] = useState(initialState);
    return (
        <AppContext.Provider value={[cartState, setCartState]}>
            {props.children}
        </AppContext.Provider>
    )
}


