import { item } from "./item"

class Order {
    userId: string
    items: item[]
    orderId: string
    constructor(name: string, item: item[], orderId: string) {
        this.userId = name
        this.items = item
        this.orderId = orderId
    }
    static async placeOrder(items: item[], userId: string): Promise<string> {
        const response = await fetch(process.env.REACT_APP_API_URL + `order/${userId}`, {
            method: 'POST',
            body: JSON.stringify(items),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if (response.status === 200)
            return 'sucess'
        return ''
    }

    static async getOrders(userId: string): Promise<any> {
        const response = await fetch(process.env.REACT_APP_API_URL + `order/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const body = await response.json()
        // console.log(body.order)
        return body
    }
}

export { Order }