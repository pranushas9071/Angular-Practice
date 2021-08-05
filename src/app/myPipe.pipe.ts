import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myPipe' })
export class MyPipe implements PipeTransform {
  transform(value: number, exponent:number): number {
    return Math.pow(value, exponent);
  }
}
