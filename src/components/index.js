import { applyMiddleware, combineReducers, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

// Import everything from each container (component, action, reducer)
import * as Example from './Example'
const containers = {
  Example
}

// Grab the reducer and component from each container
let reducers = {}
const components = {}
for (let key in containers) {
  components[key] = containers[key].component
  if (containers[key].reducer) reducers[key] = containers[key].reducer
}

// Combine reducers
reducers = combineReducers(reducers)

// Start history
const history = createBrowserHistory()

// Merge middlewares
let middlewares = [routerMiddleware(history), thunkMiddleware]

// Development adds logging, must be last
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(
    createLogger({
      duration: true,
      collapsed: true
    })
  )
}

// Generate store
const store = createStore(
  connectRouter(history)(reducers),
  composeWithDevTools(applyMiddleware(...middlewares))
)

// Export all the separate modules
export { components, history, store }
