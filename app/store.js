import {createStore, combineReducers} from 'redux';
import rootReducer from './reducers/reducer';

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
