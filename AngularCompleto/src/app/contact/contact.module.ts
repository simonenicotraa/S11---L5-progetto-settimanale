import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page';
import {MatGridListModule} from '@angular/material/grid-list'

@NgModule({
  declarations: [
    ContactPage
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,MatGridListModule

  ]
})
export class ContactModule { }
