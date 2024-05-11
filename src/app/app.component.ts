import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newfeaturesangular';
//   totalMarks  = 1000
  
// get percentage() {
//     return this.totalMarks / 600;
// }

@ViewChild("formComponent", { read: ViewContainerRef })
  formComponent!: ViewContainerRef;

  constructor() {}
// lazy-load-component-angular-without-routing
  async loadForm() {
    const { LazyFormComponent } = await import("./lazy-form/lazy-form.component");
    this.formComponent.clear();
    this.formComponent.createComponent(LazyFormComponent);
  }

  ngAfterViewInit(){
    this.loadForm();
  }
}
