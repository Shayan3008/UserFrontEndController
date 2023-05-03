class Category {
    catId: number
    name: string
    constructor(catId: number, name: string) {
        this.catId = catId
        this.name = name
    }
    static async getData(): Promise<Category[]> {
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

    // static toJson(list1: Category[]): Category[] {
    //     const categoryList: Category[] = []
    //     for (let i: number = 0; i < list1.length; i++) {
    //         categoryList.push(JSON.stringify(list1[i]))
    //     }
    //     return categoryList
    // }
}

export { Category }