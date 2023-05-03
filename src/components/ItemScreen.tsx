import React, { useContext, useEffect, useState } from 'react'
import NavBar from './NavBar'
import appState from '../context/mainContext'
// import { FaSearch } from 'react-icons/fa'
import Item from './item'

import DropdownComponent from './dropdown'
import { Category } from '../models/Category'
import CategoryList from './CategoryList'
import { item } from '../models/item'
import { getItems, sortItems } from '../redux/Actions/itemAction'

import { useDispatch, useSelector } from 'react-redux'
import { addItemToCategory, deleteFromCategory } from '../redux/Actions/CategoryAction'
export default function ItemScreen() {
    const dispatch = useDispatch()
    const selector: any = useSelector(state => state)
    const arr = useContext(appState)
    const [category, setCategory] = useState<Category[]>([])
    useEffect(() => {
        selector.FrontControllerReducer.frontController.handleRequest('Category').then((res: Category[]) => { 
            // console.log(res)
            !res ? setCategory([]) : setCategory(res) })
        selector.FrontControllerReducer.frontController.handleRequest('Item').then((res: item[]) => {
            if (res)
                dispatch(getItems(res))
        })
    }, [])

    return (
        <>
            <NavBar dispatch = {dispatch} />
            <div className='bg-gray-50 min-h-[80px] '>
                <div className=' w-10/12 pt-6 m-auto flex flex-col justify-center '>
                    <h1 className='text-2xl'>Category Product</h1>


                </div>
            </div>
            <div className='w-10/12 m-auto flex  mt-2 p-1'>
                {/* LEFT SIDE LIST OF Categories */}
                <CategoryList category={category} dispatch={dispatch} categoryList={selector} />

                <div className='ml-3 w-full   '>
                    {/* Upper*/}
                    <div className='flex  justify-between w-full  '>
                        <p className='text-2xl font-serif font-bold m-0'>Shopping Products</p>
                        <div className='flex justify-center items-center'>
                            <DropdownComponent dispatch = {dispatch} />
                        </div>
                    </div>
                    <div className='w-full mt-1'>
                        <div className='grid grid-cols-2 gap-1   sm:grid-cols-3 m-auto  '>
                            {selector.ItemReducer.item.map((e: item) => <Item selector={selector} items={e} dispatch={dispatch} favourite={e.favourite} toggleFavourite={arr.toggleFavourite} />)}
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
