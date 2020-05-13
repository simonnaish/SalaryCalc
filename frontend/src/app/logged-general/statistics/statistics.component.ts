import { Component, OnInit } from '@angular/core';


import { DAILY_PROGRESS } from 'src/app/reuseable/constants'

// import * as Chart from 'chart.js';
// import * as CanvasJS from '../canvasjs.min.js'
import { Color, Label } from 'ng2-charts';
import { AppComponent } from 'src/app/app.component.js';
import { ActivatedRoute } from '@angular/router';
import {ProgressDay} from 'src/app/reuseable/constants'


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

  fetchedData: any;

  minIncome;
  maxIncome;
  minProgress;
  maxProgress;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { days: any }) => this.fetchedData = data.days)
    this.setUpMinMax(this.fetchedData);

    this.ChartLabels = this.generateLabels(this.fetchedData);

    this.drawCharts();
  }
  setUpMinMax(DAILY_PROGRESS: ProgressDay[]) {
    let minMaxList = this.findMaxAndMin(DAILY_PROGRESS);
    this.minIncome = minMaxList[0];
    this.maxIncome = minMaxList[1];
    this.minProgress = minMaxList[2];
    this.maxProgress = minMaxList[3];
  }

  drawCharts() {
    let dataPoints = this.generateDataPoints(this.fetchedData)
    this.dailyIncomeAndProgressChartData = [
      { data: dataPoints[0], label: "Earned" },
      { data: dataPoints[1], label: "Progress" }
    ];
    this.totalIncomeAndProgressChartData = [
      { data: dataPoints[2], label: "Total earnings" },
      { data: dataPoints[3], label: "Total progress" }
    ]
  }

  generateLabels(list: ProgressDay[]): string[] {
    let labels = []
    for (let el of list) {
      labels.push(el.date.toString());
    }
    return labels;
  }


  generateDataPoints(list: any[]): {}[] {
    let currentDate;

    let income = [];
    let progress = [];

    let earned = [];
    let currentIncome = 0;

    let totalProgress = []
    let currentProgress = 0;

    for (var el of list.keys()) {
      currentDate = list[el].date;
      income.push({ label: currentDate, y: list[el].income })
      progress.push({ label: currentDate, y: list[el].progress })
      currentIncome += list[el].income;
      currentProgress += list[el].progress;
      earned.push({ label: currentDate, y: currentIncome })
      totalProgress.push({ label: currentDate, y: currentProgress })

    }
    return [income, progress, earned, totalProgress];
  }

  findMaxAndMin(list: ProgressDay[]): any[] {
    let incomeMinValue: number = 9999;
    let incomeMaxValue: number = 0;
    let incomeMin: string | Date;
    let incomeMax: string | Date;

    let progressMinValue: number = 9999;
    let progressMaxValue: number = 0;
    let progressMin: string | Date;
    let progressMax: string | Date;

    for (let el of list) {
      if (incomeMinValue > el.income) {
        incomeMinValue = el.income;
        incomeMin = el.date;
      }
      if (incomeMaxValue < el.income) {
        incomeMaxValue = el.income;
        incomeMax = el.date;
      }
      if (progressMinValue > el.progress) {
        progressMinValue = el.progress;
        progressMin = el.date;
      }
      if (progressMaxValue < el.progress) {
        progressMaxValue = el.progress;
        progressMax = el.date;
      }
    }
    return [{ 'id': incomeMin, 'value': incomeMinValue }, { 'id': incomeMax, 'value': incomeMaxValue },
    { 'id': progressMin, 'value': progressMinValue }, { 'id': progressMax, 'value': progressMaxValue }];
  }



}
