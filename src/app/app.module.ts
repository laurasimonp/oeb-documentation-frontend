import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
//angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort'
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { OebComponent } from "./oeb/oeb.component";
import { ScientificComponent } from "./scientific/scientific.component";
import { TechnicalComponent } from "./technical/technical.component";
import { TopicComponent } from "./topic/topic.component";
import { RepositoryComponent } from "./repository/repository.component";
import { RepositoryDataComponent } from "./repository-data/repository-data.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { MarkedPipe } from "./marked.pipe";
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { APIsComponent } from './apis/apis.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {ChartModule} from 'primeng/chart';
import {PanelModule} from 'primeng/panel';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    NgSelectModule,
    MatSliderModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule,
    MatTabsModule,
    ChartModule,
    MatRadioModule,
    PanelModule
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
    TopMenuComponent,
    APIsComponent
  ],
  providers: [
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
