import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Repository } from '../model/Repository';

@Component({
  selector: 'app-repository-data',
  templateUrl: './repository-data.component.html',
  styleUrls: ['./repository-data.component.css']
})
export class RepositoryDataComponent implements OnInit {

  //attributes
  @Input() repo: Repository;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    if (!this.repo) {
      this.http.get<Repository>('http://localhost:8080/github-docs-backend/repository/openEBench_vre').subscribe(data => {
        this.repo = data;
      });
    }
    this.repo.owner = "inab";
  }
}
