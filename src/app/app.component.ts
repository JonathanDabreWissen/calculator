import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorsComponent } from "./calculators/calculators.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculatorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
}
