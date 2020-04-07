import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { ScientificComponent } from './scientific/scientific.component';
import { TechnicalComponent } from './technical/technical.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OebComponent } from './oeb/oeb.component';
import { TopicComponent } from './topic/topic.component';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryDataComponent } from './repository-data/repository-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ScientificComponent,
    TechnicalComponent,
    PageNotFoundComponent,
    OebComponent,
    TopicComponent,
    RepositoryComponent,
    RepositoryDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) { }
}
