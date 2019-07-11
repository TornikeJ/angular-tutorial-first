import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list-component';
import { ProductAlertsComponent } from './producet-alerts/producet-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HttpClientModule } from '@angular/common/http';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { CurrencyComponent } from './currency/currency.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    WishlistComponent,
    RegisterComponent,
    UsersComponent,
    CurrencyComponent,
    ExchangeComponent,
    DashboardComponent,
    NewsComponent,
    ArticleComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', data: { name: 'Home' }, component: ProductListComponent },
      { path: 'products/:productId', data: { name: 'Product' }, component: ProductDetailsComponent },
      { path: 'cart', data: { name: 'Cart' }, component: CartComponent },
      { path: 'shipping', data: { name: 'Shipping' }, component: ShippingComponent },
      { path: 'wishlist', data: { name: 'Wishlist' }, component: WishlistComponent },
      { path: 'register', data: { name: 'Register' }, component: RegisterComponent },
      { path: 'users', component: UsersComponent },
      { path: 'currency', component: CurrencyComponent },
      { path: 'exchange', component: ExchangeComponent },
      { path: 'dashboard', data: { name: 'Dashboard' }, component: DashboardComponent },
      { path: 'dashboard/news', data: { name: 'News' }, component: NewsComponent },
      { path: 'dashboard/news/:articleId', data: { name: 'Article' }, component: ArticleComponent },
      { path: 'error', data: { name: 'Error' }, component: ErrorPageComponent }
    ]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
