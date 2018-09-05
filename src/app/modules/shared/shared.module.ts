import { ReactiveFormsModule } from '@angular/forms';
import { CustMaterialModule } from './../cust-material/cust-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CustMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  declarations: [SideBarComponent],
  exports: [SideBarComponent]
})
export class SharedModule { }
