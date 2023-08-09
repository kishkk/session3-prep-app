import { Injectable } from '@angular/core';
import { Observable, catchError, filter, forkJoin, map, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../interfaces/IPost';

interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  constructor(private http: HttpClient) { }

  readonly apiUrl = 'https://jsonplaceholder.typicode.com/';
  
  getUsers() {
    return this.http.get<IPost[]>(`${this.apiUrl}posts`).pipe(
       retry(3),
      //  map(response => response.map(item => ({
      //    id: item.id,
      //    title: item.title, 
      //    body: item.body    
      //  })))
      )
  }
}
