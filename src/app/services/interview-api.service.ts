
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewApiService {
  url = "http://interviewapi.stgbuild.com/getQuizData/";
  constructor(
    private http: HttpClient,
  ) { }

  getTests(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
  }
}
