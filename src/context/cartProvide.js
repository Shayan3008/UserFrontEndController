
import React from 'react'
import cartContext from './cartContext'

export default function CartProvide(props) {

    
    return (
        <cartContext.Provider value={'name'}>
            {props.children}
        </cartContext.Provider>
    )
}
