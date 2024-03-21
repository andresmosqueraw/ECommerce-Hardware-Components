import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from './pages/home/components/components.module';
import { FiltersComponent } from './pages/home/components/filters/filters.component';

const routes: Routes = [
  { path: '',
  redirectTo: '/login',
  pathMatch: 'full'
  },
  {
    path: 'filters',
    component:FiltersComponent
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
