import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'removeString'
})

export class RemoveString implements PipeTransform {
  transform(value: string): string {
    let result = value
     result = result.replace(/&quot;/g, '');
     result = result.replace(/&#039;/g, "'");
    return result  
  }
}


