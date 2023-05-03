import { handleRequest } from "../../FrontController/handleRequest"


const FRONT_CONTROLLER_ACTIONS = {
    ADD: 'ADD_TO_HANDLER',
    DELETE: 'DELETE_FROM_CATEGORY',
}

const addRequestToFrontController = (request: string, handleRequest: handleRequest) => {
    // console.log(category)
    return {
        type: FRONT_CONTROLLER_ACTIONS.ADD,
        request: request,
        handleRequest: handleRequest
    }
}




export { addRequestToFrontController, FRONT_CONTROLLER_ACTIONS }