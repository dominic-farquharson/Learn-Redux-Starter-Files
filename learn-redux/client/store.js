import { createStore, compose} from 'redux';
// connect Redux with React
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// importing data
import comments from './data/comments';
import posts from './data/posts';

// creating object for the default state
const defaultState = {
    // key and value are the same (ES6)
    posts,
    comments
};

// creating store
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

