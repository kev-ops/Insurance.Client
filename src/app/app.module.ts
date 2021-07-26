import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddSetupComponent } from './components/setup/add-setup/add-setup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SetupListComponent } from './components/setup/setup-list/setup-list/setup-list.component';
import { SetupDetailComponent } from './components/setup/setup-detail/setup-detail/setup-detail.component';
import { PreviewAddConsumerComponent } from './components/consumer/preview-add-consumer/preview-add-consumer.component';
import { BenefitDetailComponent } from './components/benefits/benefit-detail/benefit-detail.component';
import { ConsumerListComponent } from './components/consumer/consumer-list/consumer-list/consumer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSetupComponent,
    SetupListComponent,
    SetupDetailComponent,
    PreviewAddConsumerComponent,
    BenefitDetailComponent,
    ConsumerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
