import { Component, OnInit } from '@angular/core';


import { DAILY_PROGRESS } from 'src/app/reuseable/constants'

import * as Chart from 'chart.js';
import * as CanvasJS from '../canvasjs.min.js'
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {


  //general charts options
  ChartLabels;

  ChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  ChartType = 'line';
  ChartColors: Color[] = [

    {
      borderColor: '#f79e02',
      pointHoverBackgroundColor: 'white',
    },
    {
      borderColor: 'rebeccapurple',
      pointHoverBackgroundColor: 'white',
    }
  ];
  ChartLegend = true;

  //daily progress chart
  dailyIncomeAndProgressChartData;

  //total statistics chart

  totalIncomeAndProgressChartData;

  constructor() { }

  ngOnInit(): void {
    this.ChartLabels = this.generateLabels(DAILY_PROGRESS);
    
    this.drawCharts();
  }

  drawCharts() {
    let dataPoints = this.generateDataPoints(DAILY_PROGRESS)
    this.dailyIncomeAndProgressChartData = [
      { data: dataPoints[0], label: "Earned" },
      { data: dataPoints[1], label: "Progress" }
     ];
     this.totalIncomeAndProgressChartData=[
       {data:dataPoints[1], label:"Total earnings"},
       {data:dataPoints[2], label:"Total progress"}
     ]
  }

  generateLabels(list: any[]): string[] {
    let labels = []
    for (let el of list.keys()) {
      labels.push(el.toString());
    }
    return labels;
  }


  generateDataPoints(list: any[]): any[] {
    let currentDay;

    let income = [];
    let progress = [];
   
    let earned=[];
    let currentIncome=0;
   
    let totalProgress=[]
    let currentProgress=0;
    
    for (var el of list.keys()) {
      currentDay=list[el].day;
      income.push({ label: currentDay, y: list[el].income })
      progress.push({ label: currentDay, y: list[el].progress })
      currentIncome+=list[el].income;
      currentProgress+=list[el].progress;
      earned.push({label:currentDay, y: currentIncome})
      totalProgress.push({label:currentDay.day,y:currentProgress})

    }
    return [income, progress, earned, totalProgress];
  }

  findMaxAndMin(list: any[]): number[] {
    let minValue: number = 9999;
    let maxValue: number = 0;
    let min: number;
    let max: number;
    for (let el of list.keys()) {
      if (minValue > list[el].income) {
        minValue = list[el].income;
        min = el;
      }
      if (maxValue < list[el].income) {
        maxValue = list[el].income;
        max = el;
      }
    }
    console.log(min, max);
    return [min, max];
  }


}
