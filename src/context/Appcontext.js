import appState from './mainContext'
import { item } from '../models/item'
import React, { useState } from 'react'

export default function Appcontext(props) {

    const [arr, setarr] = useState([new item(1, 'boot', 1, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80', 200, 1, 'This is boot', true), new item(3, 'boot', 1, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80', 200, 1, 'This is boot', false), new item(2, 'boot', 1, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80', 200, 1, 'This is boot', false)])

    const toggleFavourite = (id) => {
        id = arr.findIndex(e => e.id === id)
        var arr2 = [...arr]
        arr2[id].favourite = !arr2[id].favourite
        setarr(arr2)
    }

    return (
        <appState.Provider value={{ arr, toggleFavourite }}>
            {props.children}
        </appState.Provider>
    )
}
