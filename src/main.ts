import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { DummyComponent } from './app/dummy/dummy.component';
import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// bootstrapApplication(DummyComponent);
Old Way

main.ts

platformBrowserDynamic()

.bootstrapModule(AppModule)

.catch((err) =>  console.error(err));

app.module.ts

const routes: Route[] = [

  {

    'path': 'my-feature',

    'loadChildren': () => import('./my-feature/my-feature.module').then(m => m.MyModule)

  },

  {

    'path': '',

    redirectTo: 'my-feature'

  }

];

@NgModule({

  imports: [

    RouterModule.forRoot(routes),

    StoreModule.forRoot({})

  ]

})

export class AppModule{}

my-feature.ts

const routes: Route[] = [

  {

    path: 'comp-one',

    component: ComponentOne

  },

  {

    path: '',

    component: ComponentTwo,

    pathMatch: 'full'

  }

];

@NgModule({

  imports: [

    CommonModule,

    RouterModule.forFeature(routes),

    StoreModule.forFeature('my-feature', featureReducer)

  ]

})

export class FeatureOne{}

New Way

my-feature.routes.ts

const MY_FEATURE_ROUTES: Route[] = [

  {

    path: 'comp-one',

    loadComponent: () => import('./components/comp-one.component.ts').then(c => c.ComponentOne)

  },

  {

    path: '',

    loadComponent: () => import('./components/comp-two.component.ts’).then(c => c.ComponentTwo),

    pathMatch: 'full'

  }

];
const routes: Route[] = [

    {

      path: 'my-feature',

      loadChildren: () => import('./my-feature.routes.ts').then(m => m.MY_FEATURE_ROUTES),

      providers: [

        importProvidersFrom(

          StoreModule.forFeature('my-feature', featureReducer)

        )

      ]

    }

  ];

  bootstrapApplication(

    AppComponent,

    {

       providers: [

         importProvidersFrom(

           RouterModule.forRoot(routes),

           StoreModule.forRoot({}),

           EffectsModule.forRoot([]),

           StoreDevtoolsModule.instrument({}),

           HttpClientModule,

           BrowserAnimationsModule

         )

      ]

    }

  )

  Old Way

  @NgModule({

     imports: [

       CommonModule /* This is an Angular Module that allows what is 

                     exported form this module to be used 

                     in other modules */

     ],

     declarations: [

       MyComponent

     ],

     exports: [ // Anything in this array allows us to use in other modules

       MyComponent

     ]

   })

   export class MyModule(){}

    @Component({

       selector: 'my-comp',

       template: `<div></div>`,

       styleUrls: ['./my-component.component.scss']

    })

    export class MyComponent{}

To use it in a new different feature you would do:

  @NgModule({

     imports: [

       CommonModule,

       MyModule

     ]

   })

   export class NewModule{}

New Way

@Component({

  selector: 'my-comp',

  template: '<div></div>',

  styleUrls: ['./my-component.component.scss'],

  standalone: 'true',

  imports: [

    CommonModule

  ],

  exportAs: 'my-comp'

})

export class MyComponent(){}

To use it from a legacy module you could do:

@NgModule({

  imports: [

    CommonModule,

    MyComponent

  ]

})

export class NewModule{}
