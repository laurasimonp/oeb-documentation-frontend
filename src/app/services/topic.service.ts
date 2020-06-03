import { Injectable } from '@angular/core';

import { Topic } from "../model/Topic";

import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private topicsUrl = environment.TOPICS;
  public topics: Observable<Topic[]>;

  constructor(private http: HttpClient) { }

  getTopics(): Observable<Topic[]> {
    this.topics = this.http.get<Topic[]>(this.topicsUrl);
    return this.topics;
  }
}
