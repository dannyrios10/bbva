import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(public http: HttpClient) { 
  }
  getData(){
    return this.http.get('assets/data/data.json');
  }

  getFiles(){
    return this.http.get('https://bbva-proyecto.firebaseio.com/files.json');
  }
}

