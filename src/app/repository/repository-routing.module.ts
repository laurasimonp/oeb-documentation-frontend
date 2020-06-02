import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryComponent } from '../repository/repository.component';
import { RepositoryDataComponent } from '../repository-data/repository-data.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: RepositoryComponent },
      { path: ':name', component: RepositoryDataComponent }
    ],
  },

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RepositoryRoutingModule { }
export const AllRepositoryRoutingComponents = [RepositoryComponent, RepositoryDataComponent];
