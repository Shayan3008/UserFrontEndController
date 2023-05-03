import React, { useState } from 'react'
import NavBar from './NavBar'
import { useSelector, useDispatch } from 'react-redux'
import { item } from '../models/item'
import { increaseCountInCart, emptyCart } from '../redux/Actions/CartActions'
import Loader from './Loader'
import { Order } from '../models/orders'
export default function Cart() {
    const dispatch: any = useDispatch()
    const selector: any = useSelector(state => state)
    const cart = selector.CartReducer
    const [Loading, setLoading] = useState<boolean>(false)
    return (
        <div className='w-screen h-screen'>

            <NavBar />
            <div className='mt-16'>
                <div className='w-9/12  mt-[140px]  m-auto '>
                    <div className='w-full bg-red-400 flex justify-between p-1'>
                        <p className='text-xl w-3/12 m-0 text-white'>Shopping Center</p >
                        <p className='text-xl m-0 text-white'>Quantity</p >
                        <p className='text-xl m-0 text-white'>SubTotal</p >
                    </div>
                    {cart.item.map((e: item) => <div className='w-full flex justify-between items-center mt-1'>
                        <div className='flex flex-col  w-3/12'>
                            <h2>{e.name} </h2>
                        </div>
                        <input type={'number'} className='border text-center max-w-[80px] ' value={e.count} onChange={(event: any) => {
                            dispatch(increaseCountInCart(e.id, parseInt(event.target.value)))
                            // console.log(cart)
                        }} />
                        <p className='text-xl m-0 '>${e.price}</p >
                    </div>)}


                    <div className='w-full flex flex-col'>
                        <div className='w-full flex justify-end'>
                            <div className='max-w-[100%] w-[400px] mt-4'>
                                <div className='bg-red-400 w-full h-1 '></div>
                            </div>
                        </div>

                        <div className='w-full flex justify-end'>
                            <div className=' max-w-[100%] w-[400px] mt-4 flex justify-between'>
                                <p>Subtotal:</p>
                                <p>${selector.CartReducer.total}</p>
                            </div>

                        </div>
                        {selector.CartReducer.item.length > 0 ? <div className='w-full flex justify-end'>
                            <div className=' max-w-[100%] w-[300px] mt-4 flex justify-end'>
                                <button onClick={async (e) => {
                                    setLoading(true)
                                    await Order.placeOrder(cart.item, localStorage.getItem("userId")!)
                                    setLoading(false)
                                    alert('Order Placed')
                                    dispatch(emptyCart())

                                }} className='bg-blue-400  w-full text-white font-bold text-base rounded mt-2 p-2'>{Loading ? <Loader /> : 'Place Order'}</button>
                            </div>

                        </div> : null}
                    </div>


                </div>
            </div>


        </div>
    )
}
