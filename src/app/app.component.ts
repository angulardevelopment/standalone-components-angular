import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent {
  totalMarks = 1000;
  name = '';
  get percentage() {
    return this.totalMarks / 600;
  }

  @ViewChild('formComponent', { read: ViewContainerRef })
  formComponent!: ViewContainerRef;

  constructor() {}
  // lazy-load-component-angular-without-routing
  async loadForm() {
    const { LazyFormComponent } = await import(
      './lazy-form/lazy-form.component'
    );
    this.formComponent.clear();
    this.formComponent.createComponent(LazyFormComponent);
  }

  ngAfterViewInit() {
    this.loadForm();
  }



  UserKind = UserKind; // expose the enum on `this.`



}

enum UserKind{

}

// function MyCheckbox({
//   isChecked = model(false),
// }) {

//   function toggle() {
//     isChecked.update(c => !c);
//   }

//   return ng`
//     <input
//       checked={isChecked}
//       on:click={toggle()} >
//   `;
// }

// <script>
//   const isChecked =
//     model(false);

//   function toggle() {
//     isChecked.update(c => !c);
//   }
// </script>

// <input
//   checked={isChecked}
//   on:click={toggle()} >


//   @Component
//   class MyCheckbox {
//     constructor(
//       private isChecked = model(false)
//     ) {}

//     toggle() {
//       this.isChecked.update(c => !c);
//     }

//     template = ng`
//   <input
//         checked={this.isChecked}
//         on:click={this.toggle()} >`;
//   }



