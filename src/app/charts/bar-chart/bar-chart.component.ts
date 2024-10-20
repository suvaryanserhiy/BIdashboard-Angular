import { Component } from '@angular/core';
import { Chart, ChartData, ChartType, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

Chart.register(...registerables);

const SAMPLE_BARCHAR_DATA: any[] = [
  { data: [34, 34, 64, 45, 42, 32, 12], label: 'Q3 Sales' },
  { data: [76, 43, 65, 35, 73, 93, 65], label: 'Q4 Sales' },
];
const SAMPLE_BARCHAR_LABELS: string[] = [
  'W1',
  'W2',
  'W3',
  'W4',
  'W5',
  'W6',
  'W7',
];
@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css',
})
export class BarChartComponent {
  public barChartData: any[] = SAMPLE_BARCHAR_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHAR_LABELS;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
}
