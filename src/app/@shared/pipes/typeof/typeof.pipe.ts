import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeof',
})
export class TypeofPipe implements PipeTransform {
  transform(value: any, type?: string): string | boolean {
    if (type) {
      console.log(typeof value === type);

      return typeof value === type;
    }

    return typeof value;
  }
}
