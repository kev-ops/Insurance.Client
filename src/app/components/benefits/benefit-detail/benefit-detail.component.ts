import { Component, Input, OnInit } from '@angular/core';
import { BenefitsDetail } from 'src/app/models/benefits';

@Component({
  selector: 'app-benefit-detail',
  templateUrl: './benefit-detail.component.html',
  styleUrls: ['./benefit-detail.component.css']
})
export class BenefitDetailComponent implements OnInit {

  @Input() benefits: BenefitsDetail[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
