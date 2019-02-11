import { Action } from '@ngrx/store';

export enum AppActionTypes {
  USER_LOGIN = '[Auth] User Login',
  USER_LOGOUT = '[Auth] User Logout',
  GET_FEED = '[Feed] Get Feed',
  GET_FEED_SUCCESS = '[Feed] Get Feed Success'

}

export class UserLogin implements Action {
  readonly type = AppActionTypes.USER_LOGIN;
  constructor(public payload: string) { }
}

export class UserLogout implements Action {
  readonly type = AppActionTypes.USER_LOGOUT;
}

export class GetFeed implements Action {
  readonly type = AppActionTypes.GET_FEED;
}

export class GetFeedSuccess implements Action {
  readonly type = AppActionTypes.GET_FEED_SUCCESS;
  constructor(public payload: Item[]) { }
}


export type AppActions = UserLogin | UserLogout | GetFeed | GetFeedSuccess;
