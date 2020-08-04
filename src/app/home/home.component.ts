import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
    topics : [];

    constructor(private httpService: HttpService){}

    getTopics(){
        this.httpService.postData().subscribe((data: any) => {
          this.topics = data.results
        })
    }

    ngOnInit(): void {
      this.getTopics()
    }

}
