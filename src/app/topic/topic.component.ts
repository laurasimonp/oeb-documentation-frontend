import { Component, OnInit } from '@angular/core';

import { Topic } from '../model/Topic';

import { TopicService } from "../services/topic.service";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  //attributes
  topics: Topic[];

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.topicService.getTopics().subscribe(data => {
      this.topics = data;
    });
  }
}
