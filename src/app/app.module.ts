import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {SubscriptComponent} from './modules/subscript/subscript.component';

import {HttpClientModule} from '@angular/common/http';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {UserComponent} from './modules/user/user.component';
import {AuthorizationComponent} from './modules/navbar/authorization/authorization.component';
import {NavbarComponent} from './modules/navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { JumbotronComponent } from './modules/jumbotron/jumbotron.component';
import { ProfileComponent } from './modules/profile/profile.component';
import {PaginationModule, TabsModule} from 'ngx-bootstrap';
import { BillingAccountComponent } from './modules/billing-account/billing-account.component';
import { RegistrationComponent } from './modules/navbar/registration/registration.component';
import { AddSubscriptComponent } from './modules/profile/add-subscript/add-subscript.component';

const routes: Routes = [
  {path: '', redirectTo: 'jumbotron', pathMatch: 'full'},
  {path: 'jumbotron', component: JumbotronComponent},
  {path: 'subscripts', component: SubscriptComponent},
  {path: 'users', component: UserComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'billing-accounts', component: BillingAccountComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SubscriptComponent,
    UserComponent,
    AuthorizationComponent,
    NavbarComponent,
    JumbotronComponent,
    ProfileComponent,
    BillingAccountComponent,
    RegistrationComponent,
    AddSubscriptComponent
  ],

  exports: [RouterModule],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(routes),
    TabsModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
