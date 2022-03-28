import { DetailPodcastComponent } from './podcast/detail-podcast/detail-podcast.component';
import { PodcastComponent } from './podcast/podcast.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'home',component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'podcast', component: PodcastComponent
  },
  {
    path: 'podcast/:id', component : DetailPodcastComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
