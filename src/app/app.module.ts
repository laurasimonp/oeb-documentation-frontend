import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ScientificComponent } from './scientific/scientific.component';
import { TechnicalComponent } from './technical/technical.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OebComponent } from './oeb/oeb.component';

const appRoutes: Routes = [
  { path: 'oeb', component: OebComponent},
  { path: 'scientific', component: ScientificComponent},
  { path: 'technical', component: TechnicalComponent},
  { path: '', redirectTo: '/oeb', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ScientificComponent,
    TechnicalComponent,
    PageNotFoundComponent,
    OebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
