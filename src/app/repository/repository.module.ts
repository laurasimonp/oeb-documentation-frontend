import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RepositoryRoutingModule, AllRepositoryRoutingComponents } from '../repository/repository-routing.module';

import { RepositoryComponent } from './repository.component';
import { RepositoryService } from '../services/repository.service';

@NgModule({
  declarations: [
    RepositoryComponent,
    AllRepositoryRoutingComponents,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RepositoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [RepositoryService],
  bootstrap: [RepositoryComponent],
  exports: [],
  entryComponents: []
})
export class RepositoryModule { }
