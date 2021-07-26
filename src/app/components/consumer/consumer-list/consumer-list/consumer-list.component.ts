import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BenefitsDetail } from 'src/app/models/benefits';
import { Consumer } from 'src/app/models/consumer';
import { ConsumerService } from 'src/app/services/consumer/consumer.service';

@Component({
  selector: 'app-consumer-list',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.css']
})
export class ConsumerListComponent implements OnInit {

  consumers: Consumer[];
  benefitDetail: BenefitsDetail[] = [];
  activeRecord: Consumer = new Consumer();
  currentIndex: number;

  constructor(
    private consumerService: ConsumerService
  
  ) { }

  ngOnInit(): void {
    this.getAllConsumers();
  }

  getAllConsumers(): void {
    this.consumerService.getAllConsumer()
      .subscribe(response => {
        this.consumers = response.data;
      })
  }
  setActiveRecord(active: Consumer, idx: number): void {
    this.activeRecord = active;
    this.currentIndex = idx;

    this.loadBenefitDetail();
  }
  loadBenefitDetail(): void {
    let id = this.activeRecord.consumerId;
    this.consumerService.getBenefitDetails(id)
      .subscribe(result => {
        this.benefitDetail = result;
      });
  }
  onDeleteConsumer(): void {
    let id = this.activeRecord.consumerId;

    if (confirm('Are you sure you want to delete this record?')) {

      this.consumerService.deleteConsumer(id)
        .subscribe(result => {
          if (result.success) {
            alert('record successfully deleted');

      
          }
        })
    }

  }
}
