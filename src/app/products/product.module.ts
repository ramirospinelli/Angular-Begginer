import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetail } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'products', component: ProductListComponent},
            {path: 'products/:id', canActivate:[ProductDetailGuard], component: ProductDetail}
          ]),
          SharedModule
    ],
    declarations: [
        ProductListComponent,
        ProductDetail,
        ConvertToSpacesPipe
    ]
})

export class ProductModule {}