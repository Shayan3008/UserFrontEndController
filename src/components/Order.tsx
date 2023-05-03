import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { item } from '../models/item'
import { Order } from '../models/orders'
import NavBar from './NavBar'
export default function OrderScreen() {
    const [OrderItemList, setOrderItemList] = useState([])
    const [OrderItem, setOrderItem] = useState([])
    const selector: any = useSelector(state => state)
    useEffect(() => {
        // console.log(selector)
        selector.FrontControllerReducer.frontController.handleRequest('Order').then((e: any) => {
            console.log(e)
            setOrderItemList(e)
            setOrderItem(e.order)
            // console.log(e.order)
        })
    }, [])

    return (
        <div >
            <NavBar />
            <h1 className='text-center'>Order Screen</h1>
            <div className='w-8/12 m-auto'>
                <div className='bg-red-400 w-full flex justify-between items-center'>
                    <h2>Name</h2>
                    <h2>count</h2>
                    <h2>price</h2>
                </div>

                {OrderItem.map((e: any) => <div className='mt-2' >
                    <h1>Order ID: {e.id}</h1>
                    {e.order.map((e2
                        : item) => <div className='border'>

                            <div className='flex justify-between'>
                                <h1>{e2.name}</h1>
                                <h1>{e2.count}</h1>
                                <h1>{e2.price}</h1>
                            </div>
                        </div>
                    )}

                </div>
                )}
            </div>
        </div>
    )
}
