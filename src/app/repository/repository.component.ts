import { Component, OnInit, ViewChild } from "@angular/core";
import { Repository } from "../model/Repository";

import { RepositoryService } from "../services/repository.service";
import { Topic } from "../model/Topic";
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {RepositoryDataComponent} from '../repository-data/repository-data.component';
@Component({
  selector: "app-repository",
  templateUrl: "./repository.component.html",
  styleUrls: ["./repository.component.css"],
})
export class RepositoryComponent implements OnInit {
  allRepos: Repository[] = [];
  page = 0;
  size = 8;

  // attributes
  topics: string[] = [];
  repos: Repository[] = [];
  dataSource = null;
  // filter properties
  nameFilter = "";
  selectedTopics: Topic[] = [];
  filteredRepos: Repository[] = [];

  // pagination properties
  disableSelect = new FormControl(false);
  currentPage: number;
  itemsPerPage: number;
  classBoolean:boolean = false;
  initialClass: any;
  id: any;
  checked: boolean;
  isShown: boolean = false ; // hidden by default
  identifier: any;
  labelPosition: 'inclusive' | 'exclusive' = 'inclusive';

  routeQueryParams$: Subscription;

  constructor(private route: ActivatedRoute, private repoService: RepositoryService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.checked = true;
    this.getSelectedTopics();
    this.repoService.getTopics().subscribe((data) => {
      this.topics = data;
    });
    this.repoService.getRepos().subscribe((data) => {
      this.repos = data;
      this.filteredRepos = this.repos;

      this.getData({pageIndex: this.page, pageSize: this.size}, this.filteredRepos);
    });
  }

  getData(obj, filteredRepos) {
    let index=0,
        startingIndex=obj.pageIndex * obj.pageSize,
        endingIndex=startingIndex + obj.pageSize;
    
    this.allRepos = filteredRepos.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

  getSelectedTopics() {
    const filterTopics: string[] = [];
    this.topics.forEach((elt, i) => {
      this.selectedTopics.forEach((eltSelected, iSelected) => {
        if (elt["name"] == eltSelected) {
          filterTopics.push(elt["url"].toString());
        }
      });
    });
    this.repoService.getFilteredRepos(filterTopics, this.labelPosition).subscribe((data) => {
      this.filteredRepos = data;
      this.getData({pageIndex: this.page, pageSize: this.size}, this.filteredRepos);
    });
  }

  filter() {
    this.allRepos = [];

    this.filteredRepos = this.repos.filter((repository) => {
      let nameValid = false;
      for (let topic of repository.topics) {
        if (repository.name.toLowerCase().indexOf(
          this.nameFilter.toLowerCase()) != -1) {
          nameValid = true;
        } else if (repository.description.toLowerCase().indexOf(
          this.nameFilter.toLowerCase()) != -1) {
          nameValid = true;
        } else if (topic.toLowerCase().indexOf(
          this.nameFilter.toLowerCase()) != -1) {
          nameValid = true;
        }
        if (nameValid) {
          this.allRepos.indexOf(repository) === -1 ? this.allRepos.push(repository) : console.log("This item already exists");
        }
      }
      return nameValid;
    });
  }

  addClass(id: any, repo) {
    this.id = id;
    this.identifier = id;
    this.isShown = true;
  }
  removeClass(id: any) {
    this.id = false;
    this.identifier = 99999999;
    this.isShown = false;
  }

  repositoryClick(id: any, repo) : void {
    this.id = id;
    this.dialog.open(RepositoryDataComponent, {
      data: {name: repo["name"], allRepos: this.repos, allTopics: this.topics}
    });
  }
}
