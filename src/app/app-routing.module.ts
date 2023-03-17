import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {path: 'admin', loadComponent: () => import('./dummy/dummy.component').then(mod => mod.DummyComponent)},
  // ...
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
