import { Pipe, PipeTransform } from '@angular/core';
import {Instrument} from "../../../model/instrument";

@Pipe({
  name: 'filterInstruments'
})
export class FilterInstrumentPipe implements PipeTransform {


  transform(items: Instrument[], filter: string): any {
    if (!items || !filter) {
      return items;
    }

    return items.filter((item: Instrument) => this.applyFilter(item, filter));
  }



  applyFilter(mp: Instrument, filter: string): boolean{
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
