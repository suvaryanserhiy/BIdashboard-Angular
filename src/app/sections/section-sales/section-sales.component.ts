import { Component } from '@angular/core';
import { BarChartComponent } from "../../charts/bar-chart/bar-chart.component";

@Component({
  selector: 'app-section-sales',
  standalone: true,
  imports: [BarChartComponent],
  templateUrl: './section-sales.component.html',
  styleUrl: './section-sales.component.css'
})
export class SectionSalesComponent {

}
