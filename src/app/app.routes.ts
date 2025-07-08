import { Route } from '@angular/router';

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
    
        redirectTo: 'my-feature',
        pathMatch: 'full'
    
      }
];