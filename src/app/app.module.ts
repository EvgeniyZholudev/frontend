import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {SubscriptComponent} from './subscript/subscript.component';

import {HttpClientModule} from '@angular/common/http';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {UserComponent} from './user/user.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { AuthorizedUserComponent } from './authorized-user/authorized-user.component';
import {PaginationModule, TabsModule} from 'ngx-bootstrap';
import { BillingAccountComponent } from './billing-account/billing-account.component';

const routes: Routes = [
  {path: '', redirectTo: 'jumbotron', pathMatch: 'full'},
  {path: 'jumbotron', component: JumbotronComponent},
  {path: 'subscripts', component: SubscriptComponent},
  {path: 'users', component: UserComponent},
  {path: 'profile', component: AuthorizedUserComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SubscriptComponent,
    UserComponent,
    AuthorizationComponent,
    NavbarComponent,
    JumbotronComponent,
    AuthorizedUserComponent,
    BillingAccountComponent
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
