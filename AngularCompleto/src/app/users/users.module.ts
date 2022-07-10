import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPage } from './users/users.page';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';


const routes: Routes = [
  {
    path: '',
    component: UsersPage,
  },
];

@NgModule({
  declarations: [UsersPage],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UsersModule {}
