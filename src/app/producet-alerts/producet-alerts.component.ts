import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-product-alerts',
    templateUrl: './producet-alerts.component.html',
    styleUrls: ['./producet-alerts.component.scss']
})

export class ProductAlertsComponent implements OnInit{
    @Input() product;
    @Output() notify = new EventEmitter();

    constructor(){}

    ngOnInit(){
        
    }
}