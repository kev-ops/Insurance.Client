import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Setup } from 'src/app/models/setup';
import { SetupService } from 'src/app/services/setup.service';

@Component({
  selector: 'app-setup-detail',
  templateUrl: './setup-detail.component.html',
  styleUrls: ['./setup-detail.component.css']
})
export class SetupDetailComponent implements OnInit {

  @Input() setupDetail = new Setup();
  @Input() action: string;

  constructor(
    private setupService: SetupService,
    private changeRef: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    switch (this.action) {
      case 'Update':
        this.onUpdate();
        break;
      case 'Delete':
        this.onDelete();
        break;
      default:
        break;


    }
  }
  onDelete(): void {

    let id = this.setupDetail.insuranceSetupId;
    this.setupService.deleteSetup(id)
      .subscribe(response => {
        this.changeRef.detectChanges();
        console.log(response)
      })
  }
  onUpdate(): void {
    this.setupService.updateSetup(this.setupDetail)
      .subscribe(response => {
        this.changeRef.detectChanges();
        console.log(response);
      });
  }
}
