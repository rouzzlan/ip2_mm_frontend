import { Pipe, PipeTransform } from '@angular/core';
import {Instrument} from "../../model/instrument";

@Pipe({
  name: 'filterInstruments'
})
export class FilterInstrumentsPipe implements PipeTransform {


  transform(items: any[], filter: Instrument): any {
    if (!items || !filter) {
      return items;
    }

    return items.filter(item =>{
    const a = item.name.toLowerCase().includes(filter.name.toLowerCase())
    const b = item.sort.toLowerCase().includes(filter.sort.toLowerCase())
      const c = item.version.toLowerCase().includes(filter.version.toLowerCase())
      const d = item.type.toLowerCase().includes(filter.type.toLowerCase())

      return (a + b + c +d);
  })


}
}
