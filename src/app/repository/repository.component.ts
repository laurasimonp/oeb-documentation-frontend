import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
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
  topicFilter: string;
  expanded: boolean = false;

  //pagination properties
  currentPage: number;
  itemsPerPage: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<string[]>('http://localhost:8080/github-docs-backend/topics').subscribe(data => {
      this.topics = data;
    });
    this.http.get<Repository[]>('http://localhost:8080/github-docs-backend/repositories').subscribe(data => {
      this.repos = data;
      this.reposFiltered = this.repos;
    });

    this.itemsPerPage = 10;
    this.currentPage = 1;
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

  filter() {
    this.reposFiltered = this.repos.filter(repo => {
      let topicValid: boolean = false;
      for (let topic of repo.topics) {
        if (this.topicFilter) {
          if (topic.toLowerCase().indexOf(this.topicFilter.toLowerCase()) != -1) {
            topicValid = true;
          }
        } else {
          topicValid = true;
        }
      }

      return topicValid;
    })
  }

  filter2(): Repository[] {
    for (let topic of this.topics) {
      for (let repo of this.repos) {
        for (let topicRepo of repo.topics) {
          if (topic.toLowerCase() == topicRepo.toLowerCase()) {
            this.reposFiltered = this.repos;
          }
        }
      }
    }
    return this.reposFiltered;
  }

  filter3() {
    for (let topic of this.topics) {
      this.http.get<Repository[]>('http://localhost:8080/github-docs-backend/repositories?t=' + topic).subscribe(data => {
        this.reposFiltered = data;
      });
    }
  }

  viewRepo(repo: Repository) {
    this.http.get<Repository>('http://localhost:8080/github-docs-backend/repository/' + repo.name).subscribe(data => {
      this.repoSelected = data;
    });
  }

  generateHtmlFromReadme() {
    let html: HTMLElement;
    let body = html.getElementsByTagName("body");
    for (let repo of this.repos) {
      repo.readme = "";
    }
  }
}
