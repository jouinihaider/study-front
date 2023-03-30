import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { UsersComponent } from './users.component';





@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    TooltipModule,
  ],
  declarations: [
    UsersComponent,
    ShowComponent,
    AddComponent,
  ]
})
export class UsersModule { }
