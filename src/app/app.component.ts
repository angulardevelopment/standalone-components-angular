import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newfeaturesangular';
  totalMarks  = 1000
get percentage() {
    return this.totalMarks / 600;
}
}
