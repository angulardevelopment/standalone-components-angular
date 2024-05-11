import { Component, OnInit } from '@angular/core';
import { DummyComponent } from '../dummy/dummy.component';
// import {MatButtonModule} from '@angular/material/button';

@Component({
  standalone: true,


  selector: 'app-standalone-demo',

  // imports: [DummyComponent],

  // imports: [MatButtonModule],

  templateUrl: './standalone-demo.component.html',
  styleUrls: ['./standalone-demo.component.scss']
})
export class StandaloneDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
