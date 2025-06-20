import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CatalogueComponent } from './product/catalogue/catalogue.component';
import { ProdPageComponent } from './product/prod-page/prod-page.component';
import { CartComponent } from './auth/cart/cart.component';
import { ProfileComponent } from './auth/profile/profile.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'catalogue/:id', component: ProdPageComponent }, //dynamic route to every product
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
