import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Repository } from '../model/Repository';
import { Contributor } from '../model/Contributor';

@Component({
  selector: 'app-repository-data',
  templateUrl: './repository-data.component.html',
  styleUrls: ['./repository-data.component.css']
})
export class RepositoryDataComponent implements OnInit {

  //attributes
  @Input() repo: Repository;
  conts: Contributor;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (!this.repo) {
      this.http.get<Repository>('http://localhost:8080/github-docs-backend/repository/benchmarking-data-model').subscribe(data => {
        this.repo = data;
      });
      this.http.get<Contributor>('http://localhost:8080/github-docs-backend/contributors/benchmarking-data-model').subscribe(data => {
        this.conts = data;
      });
    }
  }
}
