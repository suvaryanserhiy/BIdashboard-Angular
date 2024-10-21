import { Component } from '@angular/core';
import { BarChartComponent } from "../../charts/bar-chart/bar-chart.component";
import { PieChartComponent } from "../../charts/pie-chart/pie-chart.component";
import { LineChartComponent } from "../../charts/line-chart/line-chart.component";

@Component({
  selector: 'app-section-sales',
  standalone: true,
  imports: [BarChartComponent, PieChartComponent, LineChartComponent],
  templateUrl: './section-sales.component.html',
  styleUrl: './section-sales.component.css'
})
export class SectionSalesComponent {

}
