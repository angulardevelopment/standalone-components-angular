import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { ROUTES } from './app.routes';



@NgModule({
  declarations: [
    // DummyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),

  ]
})
export class AppRoutingModule { }
