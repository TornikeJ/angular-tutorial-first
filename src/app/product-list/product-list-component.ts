import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { WishlistService } from '../wishlist.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list-component.html',
    styleUrls: ['./product-list-component.scss']
})

export class ProductListComponent {
    products = products;
    constructor(private wishlistService: WishlistService) { }
    share() {
        window.alert('The product has been shared');
    }
    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }
    addToWishList(product) {
        window.alert('Added To wishlist');
        return this.wishlistService.addToWishlist(product);
    }
    checkWishList(product){
        return this.wishlistService.checkWishlist(product);
    }
}