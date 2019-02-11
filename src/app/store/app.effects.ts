import { FeedService } from './../services/feed.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import * as fromApp from '../store';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private feedService: FeedService) { }

  @Effect()
  getFeed$ = this.actions$
    .pipe(ofType(fromApp.AppActionTypes.GET_FEED),
      switchMap(() => this.feedService.getItems(0)
        .pipe(map((items: Item[]) => new fromApp.GetFeedSuccess(items)))
      ));
}
