
import { FrontController } from '../../FrontController/frontController'
import { FRONT_CONTROLLER_ACTIONS } from '../Actions/FrontControllerActions'

interface initialState {
    frontController: FrontController
}

const initState: initialState = {
    frontController: new FrontController()
}
const FrontControllerReducer = (state = initState, action: any) => {
    // console.log('State ', state)
    switch (action.type) {
        case FRONT_CONTROLLER_ACTIONS.ADD:
            // console.log('Actions',action.category)
            state.frontController.registerHandler(action.request, action.handleRequest)
            return state

        default:
            return state
    }
}

export default FrontControllerReducer