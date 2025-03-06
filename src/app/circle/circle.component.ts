import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.css'
})
export class CircleComponent implements OnChanges {
  @Input() radius: number = 10;

  diameter: number = 0;
  perimeter: number = 0;
  area: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['radius']) {
      this.diameter = this.radius * 2;
      this.perimeter = 2 * Math.PI * this.radius;
      this.area = Math.PI * this.radius * this.radius;
    }
  }
}
