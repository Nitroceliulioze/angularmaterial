import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonComponent } from './button/button.component';
import { FlexboxComponent } from './flexbox/flexbox.component';


@NgModule({
  declarations: [
    ButtonComponent,
    FlexboxComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
