// comments reducer
/*
  Takes in current state + action
  returns new state
*/

function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      return [
        // from start to one being deleted
        ...state.slice(0, action.index),
        // after deleted item until the end
        ...state.slice(action.index + 1) 
      ]
    default:
      return state;
  }
  // console.log(state, action);
  return state;
};

function comments(state = [], action) {
  if(typeof action.postId !== undefined) {
    return {
      // take current state
      ...state,
      // overwrite this post w/ a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  // console.log(state, action);
  return state;
};

export default comments;