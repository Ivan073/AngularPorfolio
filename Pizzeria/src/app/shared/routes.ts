import {Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {MenuComponent} from "../menu/menu.component";
import {ContactComponent} from "../contact/contact.component";
import {AboutComponent} from "../about/about.component";
import {PizzaDetailComponent} from "../pizza-detail/pizza-detail.component";
import {PlaceOrderComponent} from "../place-order/place-order.component";


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'pizza-detail/:id',
    component: PizzaDetailComponent
  }
  ,
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path: 'order',
    component: PlaceOrderComponent
  }
]
