import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { NavbarComponent } from './navbar/navbar.component';
import { SearchformComponent } from './searchform/searchform.component';
import { DatePipe } from './date.pipe';
import { HightlightDirective } from './hightlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,

    NavbarComponent,
    SearchformComponent,
    DatePipe,
    HightlightDirective,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
