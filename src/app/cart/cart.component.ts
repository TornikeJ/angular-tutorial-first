import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private wishlistService: WishlistService) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: this.formBuilder.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      })
    });
  }
  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
  setDefault() {
    this.checkoutForm.patchValue({
      name: 'John Doe'
    });
  }
  ngOnInit() {

  }

  removeItem(item) {
    return this.cartService.removeItem(item);
  }

  clearAll() {
    this.cartService.clearCart();

    return this.items = [];
  }
  addToWishList(product) {
    window.alert('Added To wishlist');
    return this.wishlistService.addToWishlist(product);
  }
  checkWishList(product) {
    return this.wishlistService.checkWishlist(product);
  }
}
