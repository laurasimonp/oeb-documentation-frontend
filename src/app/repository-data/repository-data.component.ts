import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Repository } from "../model/Repository";
import { Topic } from "../model/Topic";

import { RepositoryService } from "../services/repository.service";

import { ActivatedRoute } from "@angular/router";


import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_venn from "@amcharts/amcharts4/plugins/venn"; 
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as Highcharts from 'highcharts';

@Component({
  selector: "app-repository-data",
  templateUrl: "./repository-data.component.html",
  styleUrls: ["./repository-data.component.css"],
})
export class RepositoryDataComponent implements OnInit {
  //attributes
  repo: Repository;
  repos: Array<Repository>;
  topics: Array<Topic>;
  topicName: String;
  countTopics: [] = [];
  topicsLabel: any = [];
  topicNumbers: any = [];
  clickedRepo; differentTopics: any;
  employeeJIRAHoursData;
  numeros = [1,2,3,4];

  constructor(
    private repoService: RepositoryService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public repository: any,
  ) { }

  ngOnInit(): void {

    //the view of the dialog
    this.viewRepoData(this.repository["name"]);

    //get the other parameters
    this.repos = this.repository["allRepos"];
    this.topics = this.repository["allTopics"];

    console.log(this.repository);
    //get the clickedRepo
    this.clickedRepo = this.repos.filter(repo => repo.name === this.repository["name"]);
    console.log(this.clickedRepo);
    for (let i = 0; i < this.clickedRepo[0]["topics"].length; i++) {
      for (let j = 0; j < this.repos.length; j++) {
        for(let z = 0; z < this.repos[j]["topics"].length; z++) {
          if (this.repos[j]["topics"][z] == this.clickedRepo[0]["topics"][i]) {
            this.topicName = this.clickedRepo[0]["topics"][i];
            //if exist
            if(this.countTopics[this.topicName.toString()] != undefined ) {
              this.countTopics[this.topicName.toString()] = this.countTopics[this.topicName.toString()]+1;
            } else {
              this.countTopics[this.topicName.toString()] = 1;
            }
          }
        }
      }
    }

    for (let key in this.countTopics) {
      this.topicsLabel.push(key); 
      this.topicNumbers.push(this.countTopics[key]);
    }

    this.differentTopics = {
      labels: this.topicsLabel,
      datasets: [
        {
          data: this.topicNumbers,
          backgroundColor: ['#FF5733', '#7EFF33', '#338AFF', '#33FFC1', '#5D33FF', '#AC33FF', '#FF33EE', '#FF3354', '#FB0000', '#56D9CC', '#5C1C90', '#062EAA']
        }
      ]
    
    }
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
