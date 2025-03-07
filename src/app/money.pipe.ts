import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {
  transform(value: number, currency: string): number | null {
    let inr: number = value;
    let converterValue: number = 0;

    // Conversion logic
    switch (currency) {
      case 'USD':
        converterValue = inr * 0.011;
        break;
      case 'JPY':
        converterValue = inr * 1.70;
        break;
      case 'SAR':
        converterValue = inr * 0.043;
        break;
      case 'EUR':
        converterValue = inr * 0.011;
        break;
      case 'AUD':
        converterValue = inr * 0.018;
        break;
      default:
        return null;
    }

    return converterValue;
  }
}
