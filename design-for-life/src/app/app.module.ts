import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



// ng-bootstrap
import { NgbAlertModule, NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Form-Module
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import all component
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { ListSttComponent } from './home/list-stt/list-stt.component';
import { AboutComponent } from './about/about.component';
import { PerfaceComponent } from './about/perface/perface.component';
import { PodcastComponent } from './podcast/podcast.component';
import { TitlePodcastComponent } from './podcast/title-podcast/title-podcast.component';
import { ListPodcastComponent } from './podcast/list-podcast/list-podcast.component';
import { DetailPodcastComponent } from './podcast/detail-podcast/detail-podcast.component';


// setup angular
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    ListSttComponent,
    AboutComponent,
    PerfaceComponent,
    PodcastComponent,
    TitlePodcastComponent,
    ListPodcastComponent,
    DetailPodcastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
