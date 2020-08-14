import { Component, OnInit } from '@angular/core';
import { IProduct} from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetail implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;

    constructor(private route: ActivatedRoute, private router: Router, private service: ProductService) {}

    ngOnInit(){
        let id = +this.route.snapshot.paramMap.get('id');

        this.service.getProducts().subscribe({
            next: products => {
              this.product = products.find(product => product.productId === id);
              console.log(this.product);
            }});
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }
}