import { importProvidersFrom, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
const routes: Route[] = [

    {

      path: 'my-feature',

      loadChildren: () => import('./my-feature.routes').then(m => m.MY_FEATURE_ROUTES),

      providers: [

        importProvidersFrom(

  //         StoreModule.forFeature('my-feature', featureReducer)

        )

      ]

    }

  ];


@NgModule({
  declarations: [
    OneComponent,
    TwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class MyfeatureModule { }
