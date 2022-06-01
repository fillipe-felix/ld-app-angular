import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {UsersComponent} from "./users.component";
import {HeaderModule} from "../header/header.module";


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HeaderModule
  ]
})
export class UsersModule { }
