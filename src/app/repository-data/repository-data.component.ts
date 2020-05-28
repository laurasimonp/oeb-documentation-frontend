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
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
}
