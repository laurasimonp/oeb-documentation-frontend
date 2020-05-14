import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OebComponent } from './oeb/oeb.component';
import { ScientificComponent } from './scientific/scientific.component';
import { TechnicalComponent } from './technical/technical.component';
import { TopicComponent } from './topic/topic.component';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryDataComponent } from './repository-data/repository-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'oeb', component: OebComponent },
  { path: 'scientific', component: ScientificComponent },
  { path: 'technical', component: TechnicalComponent },
  { path: 'topics', component: TopicComponent },
  { path: 'repositories', component: RepositoryComponent },
  { path: 'repository', component: RepositoryDataComponent },
  { path: '', redirectTo: '/oeb', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}