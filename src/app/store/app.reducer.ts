import { Action } from '@ngrx/store';
import * as fromApp from '../store';


export interface AppState {
  userName: string;
  feedItems: Item[];
}

export const initialState: AppState = {
  userName: null,
  feedItems: []
};

export function reducer(state = initialState, action: fromApp.AppActions): AppState {
  switch (action.type) {
    case (fromApp.AppActionTypes.USER_LOGIN): {
      return { ...state, userName: action.payload };
    }
    case (fromApp.AppActionTypes.USER_LOGOUT): {
      return { ...state, userName: null };
    }
    case (fromApp.AppActionTypes.GET_FEED_SUCCESS): {
      return { ...state, feedItems: action.payload };
    }

    default:
      return state;
  }
}
