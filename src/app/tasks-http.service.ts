import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksHttpService {

  constructor(private http: HttpClient){}


  getTasks() {
    // TODO: обойти CORS
    return this.http.get('http://62.113.111.13/data.json');
  }
}
