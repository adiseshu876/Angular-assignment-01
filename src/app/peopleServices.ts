import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) { }
   getPeopleData():Observable<any>{
console.log('from service')
    return this.http.get("http://localhost:3000/peopleData")
   }
}
