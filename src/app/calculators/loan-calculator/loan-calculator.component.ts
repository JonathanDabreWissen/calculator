import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan-calculator',
  imports: [FormsModule],
  templateUrl: './loan-calculator.component.html',
  styleUrl: './loan-calculator.component.css'
})
export class LoanCalculatorComponent {
  loanType: string ="" ;
  interestRate : number = 0;
  tenureInput : number = 0;
  amountInput : number = 0;

  tenureMin:number = 1;
  tenureMax: number = 30;

  amountMin:number = 500000;
  amountMax:number = 10000000;
  
  handleSubmit(event:Event): void {
    event.preventDefault(); // Prevents page reload
    console.log("Form submitted without reload!");
  }
  
  updateLimits() : void{
    //let loanType = document.getElementById("loanType").value;
    // let interestRate = document.getElementById("interestRate");
    // let tenureInput = document.getElementById("tenure");
    // let amountInput = document.getElementById("amount");


    if (this.loanType === "home") {
        this.interestRate.textContent = "9%";
        this.tenureInput.max = 30;
        this.tenureInput.value = 1;
        this.amountInput.min = 500000;
        this.amountInput.max = 10000000;
        this.amountInput.value = 500000;
    } else if (loanType === "car") {
        interestRate.textContent = "11%";
        tenureInput.max = 7;
        tenureInput.value = 1;
        amountInput.min = 100000;
        amountInput.max = 1500000;
        amountInput.value = 100000;
    } else {
        interestRate.textContent = "15%";
        tenureInput.max = 5;
        tenureInput.value = 1;
        amountInput.min = 10000;
        amountInput.max = 500000;
        amountInput.value = 10000;
    }
  }

  /*
  function calculateEMI() {
    let loanType = document.getElementById("loanType").value;
    let interestRates = { home: 9, car: 11, personal: 15 };
    let principal = parseFloat(document.getElementById("amount").value);
    let tenure = parseInt(document.getElementById("tenure").value) * 12;
    let rate = interestRates[loanType] / 12 / 100; // Monthly interest rate

    let emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
    document.getElementById("emi").textContent = emi ? emi.toFixed(2) : "0";
  }
  */

}
