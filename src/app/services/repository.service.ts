import { Injectable } from '@angular/core';

import { Repository } from '../model/Repository';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  public topics: Observable<string[]>;
  public repos: Observable<Repository[]>;
  public repo: Observable<Repository>;
  public filteredRepos: Observable<Repository[]>;
  private topicsUrl = environment.TOPICS;
  private reposUrl = environment.REPOSITORIES;
  private repoUrl = environment.REPOSITORY;

  constructor(private http: HttpClient) { }

  getTopics(): Observable<string[]> {
    this.topics = this.http.get<string[]>(this.topicsUrl);
    return this.topics;
  }

  getRepos(): Observable<Repository[]> {
    this.repos = this.http.get<Repository[]>(this.reposUrl);
    return this.repos;
  }

  getRepoData(repo: Repository): Observable<Repository> {
    this.repo = this.http.get<Repository>(this.repoUrl + repo.name);
    return this.repo;
  }

  getFilteredRepos(): Observable<Repository[]> {
    let topics = this.getTopics();
    /*for (let topic of topics {
      this.filteredRepos = this.http.get<Repository[]>(this.reposUrl + '?t=' + topic);
    }*/
    return this.filteredRepos;
  }
}
