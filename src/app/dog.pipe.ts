import { Pipe, PipeTransform } from '@angular/core';

// Not used Just tried
@Pipe({ name: 'dogPipe' })
export class DogPipe implements PipeTransform {
  transform(value: any, args: string[]): any {
    let keys = [];
    for (let key in value) {
      keys.push({ key: key, value: value[key] });
    }
    return keys;
  }
}
