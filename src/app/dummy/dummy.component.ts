import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_CONFIG } from '../app.config';
// import { AppService } from '../app.service';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
providers: [{ provide: 'APP_CONFIG', useValue: APP_CONFIG },]

})
export class DummyComponent implements OnInit {
  demo = 'next';
  constructor(@Inject('APP_CONFIG') public config: string) {
    console.log(config)

  }
// private userService: AppService, 
  ngOnInit(): void {
    console.log(this)
    // console.log(this.config)
    // console.log(this.userService.getText())

  }
}
