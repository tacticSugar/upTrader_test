import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { projectsReducer } from './projectsReducer.js'
import { selectedProjReducer } from './selectedProjReducer.js'
import { tasksReducer } from './tasksReducer'
import { selectedTaskReducer } from './selectedTaskReducer.js'

const rootReducer = combineReducers({
  projects: projectsReducer,
  tasks: tasksReducer,
  selectedProject: selectedProjReducer,
  selectedTask: selectedTaskReducer,
})

const RESET = 'RESET'

const wrapRootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }

  return rootReducer(state, action)
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, wrapRootReducer)

export const resetApp = () => ({ type: RESET })
export const store = createStore(persistedReducer, composeWithDevTools())
export const persistor = persistStore(store)
