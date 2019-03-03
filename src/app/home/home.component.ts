import { Component, OnInit } from '@angular/core';
import { InterviewApiService } from '../services/interview-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  testsObject:any;
  testsArray:any[]=[];
  constructor(
    private interviewApiService:InterviewApiService,
    private router: Router
    ) { }

  ngOnInit() {
  this.interviewApiService.getTests().subscribe(res =>
    {
      console.log('API response is'+res);
      this.testsObject = res;
      console.log('API mapping is'+this.testsObject.tests);
      this.testsArray = this.testsObject.tests;
      console.log('Array mapping is'+this.testsArray);
      });
  }

  getTestQuestions(id,questionId) {
    this.router.navigate(['/test-questions', id, questionId]);
  }
}
