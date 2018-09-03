function createStore (reducer) {
  let state = null
  const listeners = []
  const subscriber = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  dispatch({})
  return {getState, dispatch, subscriber}
}

const themeReducer = (state, action) => {
  if(!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {...state, themeColor: action.themeColor}
    default: 
      return state  
  }
  console.log(state)
}
const store = createStore(themeReducer)
export default store