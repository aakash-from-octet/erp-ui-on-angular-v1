import { Component } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-row-card',
  templateUrl: './row-card.component.html',
  styleUrls: ['./row-card.component.scss'],
})
export class RowCardComponent {
  chartData: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['Active', '%'],
      ['High', 62],
      ['Medium', 13],
      ['Low', 23],
    ],
    options: {
      title: '',
      pieHole: 0.5,
      pieSliceText: 'none',
      colors: ['#8079FF', '#F0835D', '#F6C454'],

      width: 120,
      height: 120,
      chartArea: {
        left: 10,
        top: 10,
        width: 100,
        height: 100,
      },

      legend: 'none',
    },
  };
  subjectData: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['Active', '%'],
      ['Math', 62],
      ['Quant', 13],
      ['Analytics', 55],
      ['GK', 40],
      ['Analytics', 78],
    ],
    options: {
      title: '',
      pieHole: 0.5,
      pieSliceText: 'none',
      colors: ['#8079FF', '#F6C454', '#F0835D', '#4DAAF8', '#4D7DF8'],

      width: 120,
      height: 120,
      chartArea: {
        left: 10,
        top: 10,
        width: 100,
        height: 100,
      },

      legend: 'none',
    },
  };
}
