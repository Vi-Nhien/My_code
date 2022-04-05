
import { HeaderComponent } from './header/header.component';
import { NgZorroArtdModule } from './ng-zorro-artd/ng-zorro-artd.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbComponent } from './header/breadcrumb/breadcrumb.component';
import { DanhsachComponent } from './danhsach/danhsach.component';
import { ModalOptionComponent } from './danhsach/modal-option/modal-option.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { KanbanComponent } from './kanban/kanban.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ModalFormAddComponent } from './kanban/modal-form-add/modal-form-add.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbComponent,
    DanhsachComponent,
    ModalOptionComponent,
    PagenotfoundComponent,
    KanbanComponent,
    ModalFormAddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroArtdModule,
    DragDropModule,
    ReactiveFormsModule

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
