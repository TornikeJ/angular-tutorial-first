import { Component, OnInit } from '@angular/core';
import { data } from '../currencies';
import { FormBuilder } from '@angular/forms';
import { ExchangeService } from '../exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  currencyBase = [];
  exchangeForm;
  baseCurrency;
  targetCurrency;
  updatedCurrency;
  constructor(
    private formBuilder: FormBuilder,
    private exchangeService: ExchangeService) {
    this.exchangeForm = this.formBuilder.group({
      baseCurrency: [],
      targetCurrency: [],
    });
    this.currencyBase = data;
  }

  ngOnInit() {
  }

  setBaseCurrency(event) {
    this.baseCurrency = event.target.value;
    this.exchangeService.subscribe(this.baseCurrency, this.targetCurrency);
    this.updatedValue();
  }
  setTargetCurrency(event) {
    this.targetCurrency = event.target.value;
    this.exchangeService.subscribe(this.baseCurrency, this.targetCurrency);
    this.updatedValue();
  }

  updatedValue() {
    return this.updatedCurrency = this.exchangeService.getUpdatedValue();
  }
}
