import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestQuestionsComponent } from './test-questions/test-questions.component';
import { TestFinishComponent } from './test-finish/test-finish.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'test-questions/:id/:questionId', component: TestQuestionsComponent },
  { path: 'test-finish/:id/:correctCount/:wrongCount', component: TestFinishComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
