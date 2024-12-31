import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber',
  standalone: true
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number | null | undefined, decimals: number = 2): string {
    if (value === null || value === undefined) {
      return '';
    }

    const numberValue = parseFloat(value.toString());
    if (isNaN(numberValue)) {
      return '';
    }
    const formattedValue = numberValue.toFixed(decimals);
    return formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
