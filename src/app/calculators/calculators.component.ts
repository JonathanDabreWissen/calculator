import { Component } from '@angular/core';
import { LoanCalculatorComponent } from "./loan-calculator/loan-calculator.component";
import { DepositCalculatorComponent } from "./deposit-calculator/deposit-calculator.component";

@Component({
  selector: 'app-calculators',
  imports: [LoanCalculatorComponent, DepositCalculatorComponent],
  templateUrl: './calculators.component.html',
  styleUrl: './calculators.component.css'
})
export class CalculatorsComponent {

}
