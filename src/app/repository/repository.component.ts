import { Component, OnInit } from "@angular/core";

import { Repository } from "../model/Repository";

import { RepositoryService } from "../services/repository.service";
import { Topic } from "../model/Topic";

@Component({
  selector: "app-repository",
  templateUrl: "./repository.component.html",
  styleUrls: ["./repository.component.css"],
})
export class RepositoryComponent implements OnInit {
  // attributes
  topics: string[] = [];
  repos: Repository[] = [];

  // filter properties
  nameFilter = "";
  selectedTopics: Topic[] = [];
  filteredRepos: Repository[] = [];

  // pagination properties
  currentPage: number;
  itemsPerPage: number;

  constructor(private repoService: RepositoryService) { }

  ngOnInit(): void {
    this.repoService.getTopics().subscribe((data) => {
      this.topics = data;
    });
    this.repoService.getRepos().subscribe((data) => {
      this.repos = data;
      this.filteredRepos = this.repos;
    });

    this.itemsPerPage = 10;
    this.currentPage = 1;
  }

  getSelectedTopics() {
    const filterTopics: string[] = [];
    this.selectedTopics
      ? this.selectedTopics.forEach((element) => {
        filterTopics.push(element.url.toString());
      })
      : "";

    this.repoService.getFilteredRepos(filterTopics).subscribe((data) => {
      this.filteredRepos = data;
    });
  }

  filter() {
    this.filteredRepos = this.repos.filter((repository) => {
      let nameValid = false;

      if (this.nameFilter && this.nameFilter != "") {
        if (repository.name
          .toLowerCase()
          .indexOf(this.nameFilter.toLowerCase()) != -1) {
          nameValid = true;
        }
      } else {
        nameValid = true;
      }

      return nameValid;
    });
  }
}
