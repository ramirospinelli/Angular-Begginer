import { Component, OnInit } from '@angular/core';
import { IProduct} from './product';

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})

export class ProductDetail implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;

    constructor() {}

    ngOnInit(){}
}