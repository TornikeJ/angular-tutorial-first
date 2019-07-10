import { Component, OnInit } from '@angular/core';
import { data } from '../currencies';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  currencies;
  Observer;
  currencyBase = [];
  exchangeForm;
  baseCurrency;
  targetCurrency;
  exchangeRate;
  updatedValue;
  updatedBaseValue;
  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder) {
    this.exchangeForm = this.formBuilder.group({
      base: [],
      target: [],
    });
    this.currencyBase = data;
  }

  get base() {
    return this.exchangeForm.get('base') as FormControl;
  }
  get target() {
    return this.exchangeForm.get('target') as FormControl;
  }
  ngOnInit() {

  }

  setBaseCurrency(event) {
    this.baseCurrency = event.target.value;
    if (this.targetCurrency !== undefined) {
      this.Observer = new Observable(this.subscribe(this.baseCurrency, this.targetCurrency));
      const action = (value) => {
        this.exchangeRate = value['rates'][this.targetCurrency];
        this.getBaseResult();
      };
      const Observer = this.Observer;
      const observable = Observer
        .subscribe({ next: action });
    }

  }
  setTargetCurrency(event) {
    this.targetCurrency = event.target.value;
    if (this.baseCurrency !== undefined) {
      this.Observer = new Observable(this.subscribe(this.baseCurrency, this.targetCurrency));
      const action = (value) => {
        this.exchangeRate = value['rates'][this.targetCurrency];
        this.getResult();
      };
      const Observer = this.Observer;
      const observable = Observer
        .subscribe({ next: action });
    }
  }

  getResult() {
    if (this.base.value !== null) {
      this.updatedValue = this.exchangeRate * this.base.value;
      return this.updatedValue;
    }
  }
  getBaseResult() {
    if (this.target.value !== null) {
      this.updatedBaseValue = (1 / this.exchangeRate) * this.target.value;
      return this.updatedBaseValue;
    }
  }

  subscribe(currency1, currency2) {
    return (subscriber) => {
      const url = `https://api.exchangeratesapi.io/latest?base=${currency1}&symbols=${currency2}`;

      this.httpClient
        .get(url).subscribe(value => {
          subscriber.next(value);
        });
    }
  }
}
