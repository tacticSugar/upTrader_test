import { createStore } from 'redux'
import { ACTION_1, ACTION_2 } from './actions'
import { data } from './data/data'

const projectTest1 = {
  title: 'Title1',
  id: 123,
  taskList: data,
}

const initialState = {
  projectList: [projectTest1],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_1:
      return { value: action.value_1 }
    case ACTION_2:
      return { value: action.value_2 }

    default:
      return state
  }
}

const store = createStore(reducer, initialState)

export default store
