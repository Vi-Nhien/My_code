import { AddComponent } from './information/add/add.component';
import { ListInformationComponent } from './list-information/list-information.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'list-information', component : ListInformationComponent
  },
  {
    path: 'add-information', component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
