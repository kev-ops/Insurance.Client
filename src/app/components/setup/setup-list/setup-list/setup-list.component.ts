import { Component, OnInit } from '@angular/core';
import { Setup } from 'src/app/models/setup';
import { SetupService } from 'src/app/services/setup.service';

@Component({
  selector: 'app-setup-list',
  templateUrl: './setup-list.component.html',
  styleUrls: ['./setup-list.component.css']
})
export class SetupListComponent implements OnInit {

  setups: Setup[] = [];
  activeRecord: Setup = new Setup();
  currentIndex: number;
  hasAction: boolean;
  action: string;

  constructor(private setupService: SetupService) { }

  ngOnInit(): void {
    this.setupService.getAllSetup()
      .subscribe(result => {
        this.setups = result.data;
      });
  }

  setActiveRecord(setup: Setup, idx: number): void {
    this.activeRecord = setup;
    this.currentIndex = idx;
    this.hasAction = false;
  }
  setAction(action: string): void {
    this.hasAction = true;
    this.action = action;

  }


}
