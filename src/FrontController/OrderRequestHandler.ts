
import { handleRequest } from "./handleRequest";

class OrderRequestHandler implements handleRequest {
    constructor() { }
    async handleRequest(): Promise<any> {
        let userId: string = localStorage.getItem('userId')!
        const response = await fetch(process.env.REACT_APP_API_URL + `order/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const body = await response.json()
        console.log("ORDER:"+body)
        return body
    }
}

export { OrderRequestHandler }