import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BenefitsDetail } from 'src/app/models/benefits';
import { Consumer } from 'src/app/models/consumer';
import { Setup } from 'src/app/models/setup';
import { ConsumerService } from 'src/app/services/consumer/consumer.service';
import { SetupService } from 'src/app/services/setup.service';
import { MessagingService } from 'src/app/shared/messaging.service';

@Component({
  selector: 'app-preview-add-consumer',
  templateUrl: './preview-add-consumer.component.html',
  styleUrls: ['./preview-add-consumer.component.css']
})
export class PreviewAddConsumerComponent implements OnInit {

  consumer: Consumer = new Consumer();
  setupSource: Setup[];
  benefits: BenefitsDetail[] = [];
  action: string = 'add';

  constructor(
    private setupService: SetupService,
    private consumerService: ConsumerService,
    private router: Router,
    private route: ActivatedRoute,
    private _messaging: MessagingService
  ) { }

  ngOnInit(): void {
    this.loadSetupSource();

    let id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

    if (id)
      this.getConsumerToUpdate(id);

  }
  getConsumerToUpdate(id: number) {

    this.action = 'update';

    return this.consumerService.getConsumerWithDetails(id)
      .subscribe(result => {
        this.consumer = result;
        this.benefits = this.consumer.benefitsDetails ?? [];

      });


  }
  loadSetupSource(): void {
    this.setupService.getAllSetup()
      .subscribe(response => {
        this.setupSource = response.data;
      });
  }

  onPreviewClick(): void {
    this.consumerService.getPreviewBenefit(this.consumer)
      .subscribe(response => {
        this.benefits = response.data;
      });
  }
  addConsumer(): void {
    this.consumerService.addConsumer(this.consumer)
      .subscribe(response => {
        if (response.success) {

          this._messaging.showOkMessage();

          this.router.navigate(['/consumer/list'])
        }
      });
  }
  updateConsumer(): void {
    this.consumerService.updateConsumer(this.consumer)
      .subscribe(response => {
        if (response.success) {
          this._messaging.showOkMessage();

          this.router.navigate(['/consumer/list'])
        }
      });
  }
  onSubmit(): void {
    if (this.action == 'add')
      this.addConsumer();
    else
      this.updateConsumer();
  }
}
