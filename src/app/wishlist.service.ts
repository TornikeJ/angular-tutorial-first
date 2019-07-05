import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class WishlistService {
    wishlistitems = [];

    constructor(
        private http: HttpClient
    ) { }

    addToWishlist(product) {
        this.wishlistitems.push(product);
    }
    getItems() {
        return this.wishlistitems;
    }
    clearWishlist() {
        this.wishlistitems = [];

        return this.wishlistitems;
    }
    removeItem(item){
        const index = this.wishlistitems.indexOf(item);
        this.wishlistitems.splice(index, 1);
    }

    checkWishlist(product) {
        if (this.wishlistitems.includes(product)) {
            return true;
        } else {
            return false;
        }
    }
}
