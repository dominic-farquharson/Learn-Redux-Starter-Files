// a reducer takes in two things: 

// 1. the action (info about what happened)
// 2. copy of current state


// pure function - always returns same thing w/ same args
function posts(state = [], action) {
  console.log('action', action)
  switch(action.type) {
    case 'INCREMENT_LIKES': 
      const i = action.index;
      console.log('incrementing likes');
      return [
        ...state.slice(0, i), // before the one being updated
        {...state[i], likes: state[i].likes + 1}, // one being updated
        ...state.slice(i + 1), // after the one we're updating
      ]
    default: 
      return state;
  }
}

export default posts;