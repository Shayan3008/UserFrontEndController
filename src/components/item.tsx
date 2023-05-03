import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { addItemToCart } from '../redux/Actions/CartActions'
import { item } from '../models/item'
import { getItems } from '../redux/Actions/itemAction'
// import { item } from '../models/item'
export default function items(props: any) {
    const ChangeFavouriteStatus = () => {
        let temp: item[] = [...props.selector.ItemReducer.item]
        for (let i: number = 0; i < temp.length; i++) {
            if (temp[i].id === props.items.id) {
                temp[i].favourite = !temp[i].favourite;
                break;
            }
        }
        props.dispatch(getItems(temp))
    }
    console.log(props)
    return (
        <div key={props.items.id} className='p-1 border'>
            <div className='relative'>
                <img className='min-h-[150px]' src={props.items.image} crossOrigin='anonymous' alt='' />
                {/* <p className='w-full absolute bottom-0 m-0 text-white font-extrabold bg-black text-center  hover:block'>Click for details</p> */}
            </div>
            <p className='p-0 m-0 text-xl font-semibold'>{props.items.name}</p>
            <p className='p-0 m-0 text-xl'>{props.items.desc}</p>
            <div className="flex justify-between mt-1">
                <p className='text-sm font-bold'>${props.items.price}</p>
                {props.favourite ? <FaHeart onClick={() => {
                    ChangeFavouriteStatus()
                }} className='mt-1' /> : <FaRegHeart onClick={() => { 
                    ChangeFavouriteStatus()
                 }} className='mt-1' />}
            </div>
            <button onClick={(e) => {
                props.dispatch(addItemToCart(props.items))
                // console.log(props.selector)
            }} className='btn btn-primary w-full'>Add to Cart</button>
        </div>
    )
}