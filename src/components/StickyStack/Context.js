import React, { createContext, useReducer } from 'react'

const Context = createContext({});

const Contants = {
    SET_STYLES: 'SET_STYLES',
    SET_ITEM: 'SET_ITEM',
}

const Actions = {
    setStyles: ( styles ) => ({ type: Contants.SET_STYLES, styles  }),
    setItem: ( index, item ) => ({ type: Contants.SET_ITEM, index, item  }),
}

const initialState = {
    items: [],
    styles: []
}

const Reducer = ( state, action ) => {
    switch(action.type) {
        case Contants.SET_ITEM:
            let items = state.items;
            items[action.index] = action.item;
            return {
                ...state,
                items
            }
        case Contants.SET_STYLES:
            return {
                ...state,
                styles: action.styles
            }
        default: 
            new Error();
    }
}

const Provider = (props) => {
    
    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <Context.Provider value={{ state, dispatch }}>
            {props.children}
        </Context.Provider>
    );
}

export { Provider, Context, Actions }