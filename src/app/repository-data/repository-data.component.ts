import { Component, OnInit, Input } from '@angular/core';

import { Repository } from '../model/Repository';

@Component({
  selector: 'app-repository-data',
  templateUrl: './repository-data.component.html',
  styleUrls: ['./repository-data.component.css']
})
export class RepositoryDataComponent implements OnInit {

  //attributes
  @Input() repo: Repository;
  
  constructor() { }

  ngOnInit(): void {

  }
}
