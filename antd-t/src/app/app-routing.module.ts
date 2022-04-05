import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DanhsachComponent } from './danhsach/danhsach.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanComponent } from './kanban/kanban.component';

const routes: Routes = [
  {
    path:'', redirectTo: '/to-do', pathMatch:'full'
  },
  {
    path: 'danh-sach', component: DanhsachComponent
  },
  {
    path: 'to-do', component: KanbanComponent
  },
  {
    path:'**', component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
