import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StandaloneDemoComponent } from './standalone-demo/standalone-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestModule } from './test/test.module';
import { AppRoutingModule } from './app-routing.module';
import { DummyComponent } from './dummy/dummy.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,

    // DummyComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    
    StandaloneDemoComponent,
    TestModule,
  
    
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
