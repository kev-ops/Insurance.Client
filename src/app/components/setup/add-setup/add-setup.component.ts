import { Component, OnInit } from '@angular/core';
import { Setup } from 'src/app/models/setup';
import { SetupService } from 'src/app/services/setup.service';

@Component({
  selector: 'app-add-setup',
  templateUrl: './add-setup.component.html',
  styleUrls: ['./add-setup.component.css']
})
export class AddSetupComponent implements OnInit {

  setup: Setup = new Setup();

  constructor(private setupService: SetupService) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.setupService.addSetup(this.setup)
    .subscribe(response => {
      console.log(response);
    });
  }
}
