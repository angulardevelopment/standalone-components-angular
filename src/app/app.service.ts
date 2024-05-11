import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }

  getText(){
    return 'hello';
  }

}