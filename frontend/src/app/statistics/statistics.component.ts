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


  minIncome: {};
  maxIncome: {};
  minProgress:{};
  maxProgress:{};

  constructor() { }

  ngOnInit(): void {
    this.setUpMinMax(DAILY_PROGRESS);

    this.ChartLabels = this.generateLabels(DAILY_PROGRESS);

    this.drawCharts();
  }
  setUpMinMax(DAILY_PROGRESS: { day: number; date: string; income: number; total: number; progress: number; }[]) {
    let minMaxList=this.findMaxAndMin(DAILY_PROGRESS);
    this.minIncome=minMaxList[0];
    this.maxIncome=minMaxList[1];
    this.minProgress=minMaxList[2];
    this.maxProgress=minMaxList[3];
  }

  drawCharts() {
    let dataPoints = this.generateDataPoints(DAILY_PROGRESS)
    this.dailyIncomeAndProgressChartData = [
      { data: dataPoints[0], label: "Earned" },
      { data: dataPoints[1], label: "Progress" }
    ];
    this.totalIncomeAndProgressChartData = [
      { data: dataPoints[2], label: "Total earnings" },
      { data: dataPoints[3], label: "Total progress" }
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

    let earned = [];
    let currentIncome = 0;

    let totalProgress = []
    let currentProgress = 0;

    for (var el of list.keys()) {
      currentDay = list[el].day;
      income.push({ label: currentDay, y: list[el].income })
      progress.push({ label: currentDay, y: list[el].progress })
      currentIncome += list[el].income;
      currentProgress += list[el].progress;
      earned.push({ label: currentDay, y: currentIncome })
      totalProgress.push({ label: currentDay.day, y: currentProgress })

    }
    return [income, progress, earned, totalProgress];
  }

  findMaxAndMin(list: any[]): {}[] {
    let incomeMinValue: number = 9999;
    let incomeMaxValue: number = 0;
    let incomeMin: number;
    let incomeMax: number;

    let progressMinValue: number = 9999;
    let progressMaxValue: number = 0;
    let progressMin: number;
    let progressMax: number;

    for (let el of list.keys()) {
      if (incomeMinValue > list[el].income) {
        incomeMinValue = list[el].income;
        incomeMin = el;
      }
      if (incomeMaxValue < list[el].income) {
        incomeMaxValue = list[el].income;
        incomeMax = el;
      }
      if (progressMinValue > list[el].progress) {
        progressMinValue = list[el].progress;
        progressMin = el;
      }
      if (progressMaxValue < list[el].progress) {
        progressMaxValue = list[el].progress;
        progressMax = el;
      }
    }
    console.log(incomeMin, incomeMax);
    return [{ 'id': incomeMin, 'value': incomeMinValue }, { 'id': incomeMax, 'value': incomeMaxValue }, 
    { 'id': progressMin, 'value': progressMinValue }, { 'id': progressMax, 'value': progressMaxValue }];
  }


}
