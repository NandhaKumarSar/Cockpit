import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
  chartExample5,
  chartExample6,
  chartExample7,
  chartExample8,
  chartExample9
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public machineLoad;
  public standStill;
  public operatingTime;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  constructor() { }

  ngOnInit() {

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'pie',
			options: chartExample1.options,
			data: chartExample1.data
    });

    

    var toolUsage = document.getElementById('tool-usage');

    var ordersChart = new Chart(toolUsage, {
      type: 'bar',
      options: chartExample3.options,
      data: chartExample3.data
    });

    var toolChangeDistributionUsage = document.getElementById('tool-change-distribution');

    var toolChangeDistibutionChart = new Chart(toolChangeDistributionUsage, {
      type: 'bar',
      options: chartExample4.options,
      data: chartExample4.data
    });

    var machineLoad = document.getElementById('machine-load');

    this.machineLoad = new Chart(machineLoad, {
      type: 'pie',
      options: chartExample5.options,
      data: chartExample5.data
    });

    var standStill = document.getElementById('stand-still');

    this.standStill = new Chart(standStill, {
      type: 'pie',
      options: chartExample6.options,
      data: chartExample6.data
    });


    var operatingTime = document.getElementById('operating-time');

    this.operatingTime = new Chart(operatingTime, {
      type: 'pie',
      options: chartExample7.options,
      data: chartExample7.data
    });

    var meanToolLifetimeperPieceCounter = document.getElementById('tool-per-piece-counter');

    var perPieceCouterChart = new Chart(meanToolLifetimeperPieceCounter, {
      type: 'bar',
      options: chartExample8.options,
      data: chartExample8.data
    });

    var meanToolLifetimeperProcessingTime = document.getElementById('tool-per-processing-time');

    var perProcessingTimeChart = new Chart(meanToolLifetimeperProcessingTime, {
      type: 'bar',
      options: chartExample9.options,
      data: chartExample9.data
    });

    }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

  public showDetaisPieceCounter(){
   var modelPopup =  document.getElementById('modalBoxDiv');
   document.getElementById('modalBoxDiv').setAttribute
   
  }

}
