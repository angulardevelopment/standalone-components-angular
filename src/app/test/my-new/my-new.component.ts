import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new',
  templateUrl: './my-new.component.html',
  styleUrls: ['./my-new.component.scss'],
    standalone: true,

  imports: [

    CommonModule

  ],

  exportAs: 'my-comp'
})
export class MyNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

