import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termsAndConditions'
})
export class TermsAndConditionsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
