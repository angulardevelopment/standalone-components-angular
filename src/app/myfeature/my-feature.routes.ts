import { Route } from '@angular/router';

export const MY_FEATURE_ROUTES: Route[] = [

  {

    path: 'comp-one',

    loadComponent: () => import('./components/one/one.component').then(c => c.OneComponent)

  },

  {

    path: '',

    loadComponent: () => import('./components/two/two.component').then(c => c.TwoComponent),

//     pathMatch: 'full'

  }

];

