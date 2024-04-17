import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss'],
})
export class ExamListComponent {
  constructor(private router: Router) {}
  isVendor: boolean = false;
  isDistribution: boolean = false;
  isGeneration: boolean = false;
  isCancel: boolean = false;
  isVendorTable: boolean = false;
  panels = [
    {
      active: true,
      name: '2023',
      panelData: [
        {
          id: '1',
          examName: 'CGL',
          examMonth: 'June',
          isCancelled: false,
        },
        {
          id: '2',
          examName: 'SSC',
          examMonth: 'June',
          isCancelled: false,
        },
        {
          id: '3',
          examName: 'GATE',
          examMonth: 'June',
          isCancelled: true,
        },
      ],
    },
    {
      active: false,
      name: '2024',
      panelData: [
        {
          id: '1',
          examName: 'GATE',
          examMonth: 'June',
          isCancelled: false,
        },
      ],
    },
    {
      active: false,
      name: '2025',
      panelData: [
        {
          id: '1',
          examName: 'CGL',
          examMonth: 'June',
          isCancelled: false,
        },
        {
          id: '2',
          examName: 'SSC',
          examMonth: 'June',
          isCancelled: true,
        },
      ],
    },
  ];
  checkOptionsOne = [
    { label: 'Q1', value: 'Q1', checked: true },
    { label: 'Q2', value: 'Q2' },
    { label: 'Q3', value: 'Q3' },
    { label: 'Q4', value: 'Q4' },
  ];

  createAssessment() {
    this.router.navigate(['ssc/exams/create-assessment']);
  }
  assessmentSummary() {
    this.router.navigate(['ssc/exams/assessment-summary']);
  }
  showVendorAllocation() {
    this.isVendor = true;
  }
  showDistribution() {
    this.isDistribution = true;
  }
  showGeneration() {
    this.isGeneration = true;
  }
  handleCancel() {
    this.isVendor = false;
    this.isDistribution = false;
    this.isGeneration = false;
    this.isCancel = false;
    this.isVendorTable = false;
  }

  shiftck = [
    { label: 'Shift 1', value: 'Shift', checked: true },
    { label: 'Shift 2', value: 'Shift' },
    { label: 'Shift 3', value: 'Shift' },
  ];
  handleGenerationCancel() {
    this.isGeneration = false;
    this.isCancel = true;
  }
  showVendorTable() {
    this.isVendorTable = true;
  }
}
