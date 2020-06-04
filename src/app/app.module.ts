import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { OebComponent } from './oeb/oeb.component';
import { ScientificComponent } from './scientific/scientific.component';
import { TechnicalComponent } from './technical/technical.component';
import { TopicComponent } from './topic/topic.component';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryDataComponent } from './repository-data/repository-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MarkedPipe } from './marked.pipe';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    OebComponent,
    ScientificComponent,
    TechnicalComponent,
    TopicComponent,
    RepositoryComponent,
    RepositoryDataComponent,
    PageNotFoundComponent,
    MarkedPipe,
    TopMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
