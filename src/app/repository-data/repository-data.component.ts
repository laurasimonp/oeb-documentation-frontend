import { Component, OnInit } from "@angular/core";

import { Repository } from "../model/Repository";

import { RepositoryService } from "../services/repository.service";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-repository-data",
  templateUrl: "./repository-data.component.html",
  styleUrls: ["./repository-data.component.css"],
})
export class RepositoryDataComponent implements OnInit {
  //attributes
  repo: Repository;

  constructor(
    private repoService: RepositoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.viewRepoData(this.getParam("name"));
  }

  /**
   * Get param from url
   */
  public getParam(param: string): string {
    return this.route.snapshot.paramMap.get(param);
  }

  viewRepoData(name: string) {
    this.repoService.getRepoDataByName(name).subscribe((data) => {
      this.repo = data;
    });
  }
}
