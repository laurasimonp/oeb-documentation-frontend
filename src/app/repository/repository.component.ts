import { Component, OnInit } from '@angular/core';;

import { Repository } from '../model/Repository';

import { RepositoryService } from '../services/repository.service';

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

  constructor(private repoService: RepositoryService) { }

  ngOnInit(): void {
    this.repoService.getTopics().subscribe(data => {
      this.topics = data;
    });
    this.repoService.getRepos().subscribe(data => {
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
      this.repoService.getFilteredRepos().subscribe(data => {
        this.reposFiltered = data;
      });
  }

  viewRepo(repo: Repository) {
    this.repoService.getRepoData(repo).subscribe(data => {
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
