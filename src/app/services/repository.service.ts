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
  public tmpRepos: Observable<Repository[]>;
  public filteredRepos: Observable<Repository[]>;
  public repo: Observable<Repository>;
  findRepo: boolean;
  labelPos = "all";

  constructor(private http: HttpClient) { }

  getTopics(): Observable<string[]> {
    const options =
      {
        params: new HttpParams({
          fromObject: { s: this.labelPos },
        }),
      };
    this.topics = this.http.get<string[]>(this.topicsUrl, options);
    return this.topics;
  }

  getRepos(): Observable<Repository[]> {
    this.repos = this.http.get<Repository[]>(this.reposUrl);
    console.log(this.repos);
    return this.repos;
  }

  getFilteredRepos(topicsArray: string[], labelPosition: string): Observable<Repository[]> {
    const options = topicsArray
      ? {
        params: new HttpParams({
          fromObject: { t: topicsArray, s: labelPosition },
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
