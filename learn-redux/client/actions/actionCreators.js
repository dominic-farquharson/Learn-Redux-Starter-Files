/*
    Things that can happen in our application.
    Action creators.
*/

// increment a like (fire off an action
/*
    index => Post being liked
*/
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// add comment
export function postComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        // passing payload
        postId,
        author,
        comment
    }
}

// remove comment
export function removeComment(postId, index) { // i: comment number
    return {
        type: 'REMOVE_COMMENT',
        index,
        postId
    }
}