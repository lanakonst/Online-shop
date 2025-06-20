import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProdPageComponent } from './product/prod-page/prod-page.component';
import { CatalogueComponent } from './product/catalogue/catalogue.component';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { OrderService } from './services/order.service';
import { CartService } from './services/cart.service';
import { CartComponent } from './auth/cart/cart.component';
import { OrderHistoryComponent } from './auth/order-history/order-history.component';
import { OrderPageComponent } from './auth/order-page/order-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProdPageComponent,
    CatalogueComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    OrderHistoryComponent,
    OrderPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [ProductService, UserService, OrderService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
