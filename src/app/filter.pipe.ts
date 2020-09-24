import { Pipe, PipeTransform } from '@angular/core';
import { PRODUCTS } from './products';
import { Product } from './product';


@Pipe({
  name: 'searchFilter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], searchText: string): Product[] {
    if (!products) {
      return [];
    }
    if (!searchText) {
      return products;
    }
    searchText = searchText.toLocaleLowerCase();

    return products.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }
}
