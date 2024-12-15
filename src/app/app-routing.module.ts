import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

export const ROUTES: Route[] = [

  {
  // path: 'admin', 
  path: '', 

  loadComponent: () => import('./dummy/dummy.component').then(mod => mod.DummyComponent)
},
  {

      'path': 'my-feature',
  
      loadChildren: () => import('./myfeature/myfeature.module').then(m => m.MyfeatureModule)
  
    },
    {

        'path': '',
    
        redirectTo: 'my-feature'
    
      }
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
