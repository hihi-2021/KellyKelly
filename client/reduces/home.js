import { ADD_NAME } from '../actions'

function home(state = [], action) {
  switch (action.type) {
    case ADD_NAME:
      return action.name
      
    default:
      return state
  }
}

export default home