import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddSetupComponent } from './components/setup/add-setup/add-setup.component';
import { SetupListComponent } from './components/setup/setup-list/setup-list/setup-list.component';
import { PreviewAddConsumerComponent } from './components/consumer/preview-add-consumer/preview-add-consumer.component';
import { ConsumerListComponent } from './components/consumer/consumer-list/consumer-list/consumer-list.component';

const routes: Routes = [
  { path: 'add-setup', component: AddSetupComponent },
  { path: 'setup/list', component: SetupListComponent },
  { path: 'consumer/preview', component: PreviewAddConsumerComponent },
  { path: 'consumer/preview/:id', component: PreviewAddConsumerComponent },
  { path: 'consumer/list', component: ConsumerListComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
