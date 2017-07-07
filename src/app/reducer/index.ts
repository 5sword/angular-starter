import {combineReducers, compose} from 'redux';
import {routerReducer} from '@angular-redux/router';

export interface IAppState {
  router: any;
}

const reducer = combineReducers<IAppState>({
  router: routerReducer
});

export const rootReducer = compose(
)(reducer);

