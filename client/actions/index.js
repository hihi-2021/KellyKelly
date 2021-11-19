import request from 'superagent'

export const ADD_NAME = 'ADD_NAME'
export const DRAW_CARD = 'DRAW_CARD'

export const enterName = (newName) => {
    return {
      type: 'ADD_NAME',
      name: newName
    }
  }

export const drawCard = (id) => {
  return {
    type: DRAW_CARD,
    id
  }
}