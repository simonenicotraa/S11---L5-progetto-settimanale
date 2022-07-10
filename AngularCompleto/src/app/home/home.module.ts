import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatSidenavModule
  ]
})
export class HomeModule { }
