import { Route } from "@angular/router";
import { OneComponent } from "./components/one/one.component";
import { TwoComponent } from "./components/two/two.component";

export const routes: Route[] = [

  {

    path: 'comp-one',

    component: OneComponent

  },

  {

    path: '',

    component: TwoComponent,

    pathMatch: 'full'

  }

];



export class FeatureOne{}
