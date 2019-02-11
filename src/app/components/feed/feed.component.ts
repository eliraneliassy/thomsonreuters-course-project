import { CartService } from './../../services/cart.service';
import { FeedService } from './../../services/feed.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  items$: Observable<Item[]>;
  constructor(private feedService: FeedService, private cartService: CartService) { }

  ngOnInit() {
    this.items$ = this.feedService.getItems(0);
    // this.feedService.getItems(0).subscribe((items: Item[]) => this.items = items);

  }
  addToCart(item: Item) {
    this.cartService.addToCart(item);
  }

}
