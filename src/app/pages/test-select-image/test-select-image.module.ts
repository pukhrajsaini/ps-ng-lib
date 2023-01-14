import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './components/view/view.component';
import { TestSelectImageRoutingModule } from './test-select-image-routing.module';



@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    TestSelectImageRoutingModule
  ]
})
export class TestSelectImageModule { }
