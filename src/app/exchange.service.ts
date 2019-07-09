import { Injectable } from '@angular/core';

import { data } from './currencies';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  currencies;
  Observer;
  updatedValue;

  constructor(private httpClient: HttpClient) {
    this.currencies = data;

    // this.Observer = new Observable(this.subscribe());
  }

  subscribe(currency1, currency2) {
    if (currency1 && currency2) {
      const url = `https://api.exchangeratesapi.io/latest?base=${currency1}&symbols=${currency2}`;

      this.httpClient
        .get(url).subscribe(value => {
          this.updatedValue = value['rates'][currency2];
        });
    }

  }

  getUpdatedValue() {
    return this.updatedValue;
  }
}
