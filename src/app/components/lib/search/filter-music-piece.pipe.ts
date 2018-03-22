import { Pipe, PipeTransform } from '@angular/core';
import {musicpiece} from "../../../model/musicpiece";

@Pipe({
  name: 'filterMusicpiece'
})
export class FilterMusicPiecePipe implements PipeTransform {

  transform(items: musicpiece[], filter: string): any {
    if (!items || !filter) {
      return items;
    }

    return items.filter((item: musicpiece) => this.applyFilter(item, filter));
  }



    applyFilter(mp: musicpiece, filter: string): boolean{
    for(let field in mp){
      if(mp[field]){
        if(typeof mp[field] === 'string') {
          if(mp[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1){
            return false;
          }else if (typeof mp[field] ==='number' ) {
            if(mp[field].toString() !== filter){
              return false;
            }
          }
        }
      }
    }
    return true;
    }

}
