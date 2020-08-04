import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    postData(){
        return this.http.get('http://localhost:8000/ru/api/v1/topic/');
    }

}
