import { Injectable } from "@angular/core";

import { Repository } from "../model/Repository";

import { HttpClient } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";

import { Observable } from "rxjs";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class RepositoryService {
  private topicsUrl = environment.TOPICS;
  private reposUrl = environment.REPOSITORIES;
  private repoUrl = environment.REPOSITORY;
  public topics: Observable<string[]>;
  public repos: Observable<Repository[]>;
  public filteredRepos: Observable<Repository[]>;
  public repo: Observable<Repository>;

  constructor(private http: HttpClient) { }

  getTopics(): Observable<string[]> {
    this.topics = this.http.get<string[]>(this.topicsUrl);
    return this.topics;
  }

  getRepos(): Observable<Repository[]> {
    this.repos = this.http.get<Repository[]>(this.reposUrl);
    return this.repos;
  }

  getFilteredRepos(topicsArray: string[]): Observable<Repository[]> {
    const options = topicsArray
      ? {
        params: new HttpParams({
          fromObject: { t: topicsArray },
        }),
      }
      : {};

    this.filteredRepos = this.http.get<Repository[]>(this.reposUrl, options);
    return this.filteredRepos;
  }

  getRepoDataByName(name: string): Observable<Repository> {
    this.repo = this.http.get<Repository>(this.repoUrl + name);
    return this.repo;
  }
}
