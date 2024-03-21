import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FiltersComponent } from './filters/filters.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [  FiltersComponent,
  ProductBoxComponent,
  ProductsHeaderComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,

    MatExpansionModule,
    MatIconModule
  ],
  exports: [FiltersComponent,
    ProductBoxComponent,
    ProductsHeaderComponent]
})
export class ComponentsModule { }
