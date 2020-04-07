import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Repository } from '../model/Repository';
import { Topic } from '../model/Topic';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  //attributes
  topics: Topic[] = [];
  repos: Repository[] = [];
  reposFiltered: Repository[] = [];
  repoSelected: Repository;

  //filter properties
  topicFilter: any;

  //pagination properties
  currentPage: number;
  itemsPerPage: number;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.http.get<Topic[]>('http://localhost:8080/github-docs-backend/topics').subscribe(data => {
      this.topics = data;
    });
    this.http.get<Repository[]>('http://localhost:8080/github-docs-backend/repositories?t=openebench&t=inab').subscribe(data => {
      this.repos = data;
    });
    
    this.reposFiltered = this.repos;
    this.itemsPerPage = 10;
    this.currentPage = 1;
  }

  filter() {
    this.reposFiltered = this.repos.filter(repo => {
      let topicValid: boolean = false;

      topicValid = (repo.topics <= this.topicFilter);

      return topicValid;
    })
  }

  onClick(repo: Repository) {
    this.repoSelected = repo;
  }
}
