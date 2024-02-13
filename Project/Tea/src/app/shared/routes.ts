import {TeaListComponent} from "../tea-list/tea-list.component";
import {Routes} from "@angular/router";
import {MainPageComponent} from "../main-page/main-page.component";
import {TeaInfoComponent} from "../tea-info/tea-info.component";


export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'tea-list',
    component: TeaListComponent
  },
  {
    path: 'tea-info/:id',
    component: TeaInfoComponent
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  }
]
