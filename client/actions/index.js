import request from 'superagent'

export const ADD_NAME = 'ADD_NAME'

export const enterName = (newName) => {
    return {
      type: 'ADD_NAME',
      name: newName
    }
  }


 