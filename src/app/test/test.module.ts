import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from './my/my.component';
import { MyNewComponent } from './my-new/my-new.component';

@NgModule({
       declarations: [

           MyComponent
    
         ],
    
         exports: [ // Anything in this array allows us to use in other modules
    
           MyComponent
    
         ],
  imports: [
    CommonModule, /* This is an Angular Module that allows what is 

    //                      exported form this module to be used 
    
    //                      in other modules */
    MyNewComponent // To use it from a legacy module you could do this
  ]
})
export class TestModule { }

