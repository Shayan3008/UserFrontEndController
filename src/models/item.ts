class item {
    id: number
    name: string
    catId: number
    image: string
    price: number
    count: number
    description: string
    favourite: boolean
    constructor(id: number, catId: number, name: string, image: string, price: number, count: number,
        description: string, favourite: boolean) {
        this.id = id
        this.name = name
        this.catId = catId
        this.image = image
        this.price = price
        this.count = count
        this.description = description
        this.favourite = favourite
    }
    static async getItems(): Promise<any> {
        const response = await fetch(process.env.REACT_APP_API_URL+"item")
        const data = response.json()
        return data
    }
}

export { item }
