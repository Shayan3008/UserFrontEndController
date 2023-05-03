import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Category } from '../models/Category'
import { addItemToCategory, deleteFromCategory } from '../redux/Actions/CategoryAction'
import { getItemsByCategory } from '../redux/Actions/itemAction'
export default function CategoryList(props: any) {
    const category = props.category
    // console.log(props)
    return (
        <div className=' w-7/12 '>
            <div className='p-4 border'>
                <h1 className='text-blue-400 text-xl mt-1' >Related type</h1>
                <div className='flex  mt-1'>
                    <input className='border w-full p-2' placeholder='Search...' />
                    <button className=' bg-blue-400  min-w-[30px]'><FaSearch color='white' size={10} className=' m-auto ' /></button>
                </div>
                <div className='mt-1 pt-2'>
                    {category.map((categoryParam: Category) => <div key={categoryParam.catId} className='flex justify-between items-center '>
                        <p>{categoryParam.name}</p>
                        <input type={'checkbox'} onChange={(e) => {
                            let temp: Category[] = [...props.categoryList.CategoryReducer]
                            console.log(e.target.checked)
                            if (e.target.checked === true) {
                                props.dispatch(addItemToCategory(categoryParam))
                                temp.push(categoryParam)
                            }
                            else {
                                props.dispatch(deleteFromCategory(categoryParam.catId))
                                temp = temp.filter((e: Category) => e.catId !== categoryParam.catId)
                            }
                            console.log(temp);
                            props.dispatch(getItemsByCategory(temp))
                            // console.log(props.categoryList)
                        }} />
                    </div>)}

                </div>

            </div>
        </div>
    )
}
