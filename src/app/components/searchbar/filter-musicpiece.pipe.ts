import { Pipe, PipeTransform } from '@angular/core';
import {musicpiece} from "../../model/musicpiece";

@Pipe({
  name: 'filterMusicpiece'
})
export class FilterMusicpiecePipe implements PipeTransform {

  transform(items: any[], filter: musicpiece): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item =>{
      const a = item.title.toLowerCase().includes(filter.title.toLowerCase())
      const b = item.artist.toLowerCase().includes(filter.artist.toLowerCase())
      const c = item.instrumentType.toLowerCase().includes(filter.instrumentType.toLowerCase())
      const d = item.theme.toLowerCase().includes(filter.theme.toLowerCase())
      const e = item.genre.toLowerCase().includes(filter.genre.toLowerCase())
      const f = item.language.toLowerCase().includes(filter.language.toLowerCase())

      return (a + b + c +d + e + f);
    })  }

}
