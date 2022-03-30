import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListInformationComponent } from './list-information/list-information.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from './information/add/add.component';
import { EditComponent } from './information/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListInformationComponent,
    HeaderNavbarComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
