import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-form',
  templateUrl: './lazy-form.component.html',
  styleUrls: ['./lazy-form.component.css']
})
export class LazyFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('loaded')
  }

}