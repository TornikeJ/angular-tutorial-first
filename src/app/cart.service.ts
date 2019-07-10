import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    items = [];

    constructor(
    ) { }

    addToCart(product) {
        this.items.push(product);
    }
    getItems() {
        return this.items;
    }
    clearCart() {
        this.items = [];

        return this.items;
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }
    checkCart(product) {
        if (this.items.includes(product)) {
            return true;
        } else {
            return false;
        }
    }
}
