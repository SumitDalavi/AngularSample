import { Component, OnInit } from '@angular/core';
import { InterviewApiService } from '../services/interview-api.service';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Tests } from '../models/tests';
@Component({
  selector: 'app-test-questions',
  templateUrl: './test-questions.component.html',
  styleUrls: ['./test-questions.component.css']
})
export class TestQuestionsComponent implements OnInit {
  questionId:number = 0;
  correctCount:number = 0;
  wrongCount:number = 0;
  testsObject:any;
  testsArray:any[];
  paramID: number;
  tmpString: any;
  testDetails:any;
  tmpOutput:any;
  testDetailsFetched:Tests;
  disableNext:boolean=false;
  disableRadio:boolean=false;
  constructor(
    private interviewApiService:InterviewApiService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.questionId = +this.route.snapshot.paramMap.get('questionId');
    this.interviewApiService.getTests().subscribe(res =>
      {
        console.log('API response is'+res);
        this.testsObject = res;
        console.log('API mapping is'+this.testsObject.tests);
        this.testsArray = this.testsObject.tests;
        console.log('Array mapping is'+this.testsArray);
        //console.log(this.testsArray.questions[this.questionId].questionText)
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
        console.log("fetched Test Details from Param"+this.testDetailsFetched[0].name);

        });
    }
  
    getNextQuestion(nextQuestionId) {
      if(nextQuestionId <= this.testDetailsFetched[0].questions.length ){
        this.questionId= nextQuestionId+1;
        this.disableNext=false;
      }else{
        this.disableNext=false;
      }
      this.disableRadio=false;
    }

    getTestFinish(id) {
      console.log("Correct: "+this.correctCount + "Wrong: "+this.wrongCount)
      this.router.navigate(['/test-finish', id, this.correctCount, this.wrongCount]);
    }

    changedOption(optionSelected){
      let lengthOfArray = this.testDetailsFetched[0].questions.length
      console.log("Answer Selected"+optionSelected);
      console.log("For Question"+this.testDetailsFetched[0].questions[this.questionId].questionText);
      if(optionSelected == this.testDetailsFetched[0].questions[this.questionId].correctOptionIndex){
        this.correctCount = this.correctCount+1;
      }else{
        this.wrongCount = this.wrongCount+1;
      }
      this.disableRadio=true;
      if(this.questionId+1 == lengthOfArray){
        this.disableNext=false;
      }else{
        this.disableNext=true;
      }
    }
}
