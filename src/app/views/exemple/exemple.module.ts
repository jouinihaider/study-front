import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExempleRoutingModule } from './exemple-routing.module';
import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ExempleComponent } from './exemple.component';





@NgModule({
  imports: [
    CommonModule,
    ExempleRoutingModule,
    FormsModule,
    TooltipModule
  ],
  declarations: [
    ExempleComponent,
    ShowComponent,
    AddComponent,
  ]
})
export class ExempleModule { }
