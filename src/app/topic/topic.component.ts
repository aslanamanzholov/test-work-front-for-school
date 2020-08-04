import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../http.service";

export class Topic {
  constructor(
    public name_of_topic: string,
    public description_of_topic: string
  ) {}
}


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})

export class TopicComponent implements OnInit {

  topic = new Topic('','');

    constructor(private http: HttpClient){ }

    postData(topic){

        return this.http.post('http://localhost:8000/ru/api/v1/topic/', topic).subscribe(data => console.log(data));
    }

  ngOnInit() {}

}
