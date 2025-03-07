import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MoneyPipe } from '../money.pipe'; // Import the MoneyPipe

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css',
  imports: [CommonModule, MoneyPipe],
})
export class CurrencyConverterComponent  {
  @Input() inr: number = 0;

}
