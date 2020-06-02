import { Component, OnInit, Input } from "@angular/core";

import { Repository } from "../model/Repository";
import { ActivatedRoute, Router } from "@angular/router";
import { RepositoryService } from "../services/repository.service";

@Component({
  selector: "app-repository-data",
  templateUrl: "./repository-data.component.html",
  styleUrls: ["./repository-data.component.css"],
})
export class RepositoryDataComponent implements OnInit {
  //attributes
  repo: Repository;

  name: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private repoService: RepositoryService
  ) {}

  ngOnInit(): void {
    this.viewRepo(this.getParam("name"));
  }

  /**
   * Get param from url
   */
  public getParam(param: string): string {
    return this.route.snapshot.paramMap.get(param);
  }

  viewRepo(name: string) {
    this.repoService.getRepoDataByName(name).subscribe((data) => {
      this.repo = data;
      console.log(data);
    });
  }
}
