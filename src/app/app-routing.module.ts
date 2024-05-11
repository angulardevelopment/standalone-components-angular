import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

export const ROUTES: Route[] = [

  {
  // path: 'admin', 
  path: '', 

  loadComponent: () => import('./dummy/dummy.component').then(mod => mod.DummyComponent)},
  // ...
];

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
