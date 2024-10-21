import { Component } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

Chart.register(...registerables);

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'], // Corrected from styleUrl to styleUrls
})
export class PieChartComponent {
  // Define the datasets with the correct structure
  datasets = [
    {
      data: [350, 450, 120], // Use the data array directly here
      backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
      borderColor: '#111',
    },
  ];

  pieChartLabels: string[] = [
    'XYZ Logistics',
    'Main St Bakery',
    'Acme Hosting',
  ];

  pieChartType: ChartType = 'doughnut';
}
