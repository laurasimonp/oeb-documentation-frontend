import { Component, OnInit, ViewChild } from '@angular/core';

import { Topic } from '../model/Topic';

import { TopicService } from "../services/topic.service";

import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  //attributes
  datos: Topic[] = [];
  topics: Topic[];
  dataSource = null;
  displayedColumns: string[] = ["name", "description"];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.topicService.getTopics().subscribe(data => {
      this.topics = data;
      this.dataSource = new MatTableDataSource<Topic>(this.topics);
    });
  }
}
