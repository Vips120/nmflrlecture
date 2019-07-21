import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service/service.component';
import {RouterModule} from '@angular/router';
import { serviceroute } from './service.routes';


@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(serviceroute)
  ]
})
export class ServiceModule { }
