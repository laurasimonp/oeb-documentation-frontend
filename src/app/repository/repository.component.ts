import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Repository } from '../model/Repository';
import { Topic } from '../model/Topic';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  //attributes
  topics: string[] = [];
  repos: Repository[] = [];
  reposFiltered: Repository[] = [];
  repoSelected: Repository;

  //filter properties
  topicFilter: Topic;
  expanded: boolean = false;

  //pagination properties
  currentPage: number;
  itemsPerPage: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<string[]>('http://localhost:8080/github-docs-backend/topics').subscribe(data => {
      this.topics = data;
    });
    this.http.get<Repository[]>('http://localhost:8080/github-docs-backend/repos').subscribe(data => {
      this.repos = data;
      this.reposFiltered = data;
    });
    
    this.itemsPerPage = 10;
    this.currentPage = 1;
  }

  filter() {
    this.reposFiltered = this.repos.filter(repo => {
      let topicValid: boolean = false;
      for (let repo of this.repos) {
        for (let topic of repo.topics) {
          topicValid = (topic <= this.topicFilter.name);
        }
      }

      return topicValid;
    })
  }

  onClick(repo: Repository) {
    this.repoSelected = repo;
  }

  showCheckboxes() {
    let checkboxes = document.getElementById("checkboxes");
    if (!this.expanded) {
      checkboxes.style.display = "block";
      this.expanded = true;
    } else {
      checkboxes.style.display = "none";
      this.expanded = false;
    }
  }
}
