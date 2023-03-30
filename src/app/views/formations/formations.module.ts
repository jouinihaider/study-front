import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationsRoutingModule } from './formations-routing.module';
import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormationsComponent } from './formations.component';





@NgModule({
  imports: [
    CommonModule,
    FormationsRoutingModule,
    FormsModule,
    TooltipModule
  ],
  declarations: [
    FormationsComponent,
    ShowComponent,
    AddComponent,
  ]
})
export class FormationsModule { }
