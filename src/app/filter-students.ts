import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
  })
export class FilterStudents implements PipeTransform{
    transform(items: any[], searchText: string) {
        if(!items) return [];
        if(!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter( (item) => item['name'].toLowerCase().includes(searchText));
    }
}
