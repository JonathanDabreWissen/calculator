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
  interestRate : string = "9%";
  tenureInput : number = 0;
  amountInput : number = 0;
  emi: number = 0;

  tenureMax: number = 30;

  amountMin:number = 500000;
  amountMax:number = 10000000;
  
  handleSubmit(event:Event): void {
    event.preventDefault(); // Prevents page reload
    console.log("Form submitted without reload!");
  }
  
  updateLimits(event:Event) : void{
    //let loanType = document.getElementById("loanType").value;
    // let interestRate = document.getElementById("interestRate");
    // let tenureInput = document.getElementById("tenure");
    // let amountInput = document.getElementById("amount");

    this.loanType = (event.target as HTMLSelectElement).value
    if (this.loanType === "home") {
        this.interestRate = "9%";
        this.tenureMax= 30;
        this.tenureInput = 1;
        this.amountMin = 500000;
        this.amountMax = 10000000;
        this.amountInput = 500000;
    } else if (this.loanType === "car") {
        this.interestRate = "11%";
        this.tenureMax = 7;
        this.tenureInput = 1;
        this.amountMin= 100000;
        this.amountMax= 1500000;
        this.amountInput = 100000;
    } else {
        this.interestRate = "15%";
        this.tenureMax= 5;
        this.tenureInput = 1;
        this.amountMin = 10000;
        this.amountMax = 500000;
        this.amountInput = 10000;
    }
  }

  
  calculateEMI() :void {
    // let loanType = document.getElementById("loanType").value;
    let interestRates: { [key: string]: number } = { 
      home: 9, 
      car: 11, 
      personal: 15 
    };
    // let principal = parseFloat(document.getElementById("amount").value);
    let principal = this.amountInput;
    // let tenure = parseInt(document.getElementById("tenure").value) * 12;
    let tenure = this.tenureInput*12;
    let rate = interestRates[this.loanType] / 12 / 100; // Monthly interest rate

    if (rate === 0 || tenure === 0) {
      this.emi = 0;
      return;
    }

    let emiValue = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
    this.emi = parseFloat(emiValue.toFixed(2)); 
    // document.getElementById("emi").textContent = emi ? emi.toFixed(2) : "0";
  }
  

}
