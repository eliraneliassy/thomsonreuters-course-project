import { CartService } from './../../services/cart.service';
import { FeedService } from './../../services/feed.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../../store';
import { getFeed } from 'src/app/store/app.selectors';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  items$: Observable<Item[]>;
  // items: Item[];
  constructor(private store: Store<State>, private cartService: CartService) { }

  ngOnInit() {
    // this.items$ = this.feedService.getItems(0);
    // this.feedService.getItems(0).subscribe((items: Item[]) => this.items = items);
    this.store.dispatch(new fromApp.GetFeed());

    // this.store.subscribe((store) => this.items = store.app.feedItems);
    this.items$ = this.store.pipe(select(getFeed));


  }
  addToCart(item: Item) {
    this.cartService.addToCart(item);
  }

}
