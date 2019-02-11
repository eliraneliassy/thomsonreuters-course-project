import { AppState } from './app.reducer';
import { State } from './../reducers/index';
import { createSelector } from '@ngrx/store';
export const selectAppState = (state: State) => state.app;

export const getUserName = createSelector(selectAppState,
    (appSate: AppState) => appSate.userName);

export const getFeed = createSelector(selectAppState,
    (appState: AppState) => appState.feedItems);
