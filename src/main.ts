import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { DummyComponent } from './app/dummy/dummy.component';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideRouter, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTES } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

  bootstrapApplication(

    AppComponent,

    {

       providers: [

         importProvidersFrom(

           




           HttpClientModule,

           BrowserAnimationsModule

         ),
  provideRouter(ROUTES)

      ]

    }

  )



