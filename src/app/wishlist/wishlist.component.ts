import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistitems = [];
  constructor(
    private wishlistService: WishlistService
  ) {
    this.wishlistitems = this.wishlistService.getItems();
  }

  clearWishlist() {
    this.wishlistitems = this.wishlistService.clearWishlist();
    return this.wishlistitems;
  }

  removeItem(item) {
    this.wishlistService.removeItem(item);
    return this.wishlistitems;
  }

  ngOnInit() {
  }

}
