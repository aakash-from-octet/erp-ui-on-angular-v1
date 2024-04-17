import { Component } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss'],
})
export class Section1Component {
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

      width: 100,
      height: 100,
      chartArea: {
        left: 10,
        top: 10,
        width: 80,
        height: 80,
      },

      legend: 'none',
    },
  };
  visible: boolean = false;
  divOpen() {
    this.visible = !this.visible;
  }
}
