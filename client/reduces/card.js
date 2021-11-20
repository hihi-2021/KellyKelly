import { DRAW_CARD } from '../actions'

function card(state = [], action) {
  switch (action.type) {
    case DRAW_CARD:
      return action.id
      
    default:
      return state
  }
}

export default card