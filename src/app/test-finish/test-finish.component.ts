import { Component, OnInit } from '@angular/core';
import { InterviewApiService } from '../services/interview-api.service';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Tests } from '../models/tests';
@Component({
  selector: 'app-test-finish',
  templateUrl: './test-finish.component.html',
  styleUrls: ['./test-finish.component.css']
})
export class TestFinishComponent implements OnInit {
  correctCount:number = 0;
  wrongCount:number = 0;
  testsObject:any;
  testsArray:any[]=[];
  testDetails:any;
  tmpOutput:any;
  testDetailsFetched:Tests;
  unAttempted:number =0;
  constructor(
    private interviewApiService:InterviewApiService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.correctCount = +this.route.snapshot.paramMap.get('correctCount');
    this.wrongCount = +this.route.snapshot.paramMap.get('wrongCount');
    this.interviewApiService.getTests().subscribe(res =>
      {
        console.log('API response is'+res);
        this.testsObject = res;
        console.log('API mapping is'+this.testsObject.tests);
        this.testsArray = this.testsObject.tests;
        console.log('Array mapping is'+this.testsArray);
        var json = [];
        this.testDetails = this.testsArray;
        const id = this.route.snapshot.paramMap.get('id');
        console.log("fetch Test Details from Param"+id);
        for (var key in this.testDetails) {
          if (this.testDetails[key]._id === id) {
            json.push(this.testDetails[key]);
          }
        }
        this.tmpOutput= json;
        this.testDetailsFetched = this.tmpOutput;
        this.unAttempted = this.testDetailsFetched[0].questions.length -(this.correctCount+this.wrongCount);
        });
  }

}
