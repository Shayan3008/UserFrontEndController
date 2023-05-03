import { Category } from "../models/Category";
import { handleRequest } from "./handleRequest";

class ItemRequestHandler implements handleRequest {
    constructor() { }
    async handleRequest(): Promise<any> {
        const response = await fetch(process.env.REACT_APP_API_URL + "item")
        const data = response.json()
        return data
    }
}

export { ItemRequestHandler }