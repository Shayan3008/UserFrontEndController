import { Category } from "../../models/Category"

const CATEGORY_ACTIONS = {
    ADD: 'ADD_TO_CATEGORY',
    DELETE: 'DELETE_FROM_CATEGORY',
}

const addItemToCategory = (category: Category) => {
    console.log(category)
    return {
        type: CATEGORY_ACTIONS.ADD,
        category: category,
    }
}

const deleteFromCategory = (categoryId: number) => {
    return {
        type: CATEGORY_ACTIONS.DELETE,
        categoryId: categoryId
    }
}


export { addItemToCategory, deleteFromCategory, CATEGORY_ACTIONS }