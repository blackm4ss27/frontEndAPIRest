import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BlankComponent } from './blank/blank.component';



@NgModule({
  declarations: [
    SidebarComponent,
    BlankComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
