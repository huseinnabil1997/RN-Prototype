import {combineReducers} from 'redux';

const initialState = {
  visitor: 'Guest',
};

const reducer = (state = initialState, action) => {
  if (action.type == 'SET_VISITOR') {
    return {
      ...state,
      visitor: action.text,
    };
  } else return state;
};

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;
