import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormAppRoutingModule } from './form-app-routing.module';
import { FormAppComponent } from './form-app.component';


@NgModule({
  declarations: [
    FormAppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormAppRoutingModule
  ]
})
export class FormAppModule { }
