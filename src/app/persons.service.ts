import { Injectable } from '@angular/core';
import Person  from '../app/models/Person';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private url: string = "http://127.0.0.1:8000/api/"

  constructor(private http: HttpClient) { }

  //getPerson
  getPerson(): Observable<Person[]>{
    return this.http.get<Person[]>(this.url+'personas');
  }

  //getPersonById
  getPersonById(id: number): Observable<Person>{
    return this.http.get<Person>(this.url+'personas/'+id);
  }

  //addPerson
  addPerson(person: Person): Observable<Person>{
    return this.http.post<Person>(this.url+'personas/', person);
  }

  //updatePerson
  updatePerson(id: number, person: Person): Observable<Person>{
    return this.http.put<Person>(this.url+'personas/'+id, person);
  }

  //deletePersonById
  deletePersonById(id: number): Observable<Person>{
    return this.http.delete<Person>(this.url+'personas/'+id);
    }


}
