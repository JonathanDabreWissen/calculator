import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorsComponent } from "./calculators/calculators.component";
import { CircleComponent } from "./circle/circle.component";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CurrencyConverterComponent } from "./currency-converter/currency-converter.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculatorsComponent, CircleComponent, FormsModule, CurrencyConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
  radiusValue: number = 10;
  inrValue: number = 0;

}
