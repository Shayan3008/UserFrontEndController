import { Category } from "../models/Category";
import { handleRequest } from "./handleRequest";

class CategoryRequestHandler implements handleRequest {
    constructor() { }
    async handleRequest(): Promise<any> {
        // console.log('Category')
        const category: Category[] = []
        // let i:number = 0
        const data = await fetch(process.env.REACT_APP_API_URL + 'category')
        const body = await data.json()
        for (let i: number = 0; i < body.length; i++) {
            var temp: Category = new Category(body[i].catId, body[i].name)
            category.push(temp)
        }

        return category
    }
}

export { CategoryRequestHandler }