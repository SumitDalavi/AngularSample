import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestQuestionsComponent } from './test-questions/test-questions.component';
import { TestFinishComponent } from './test-finish/test-finish.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestQuestionsComponent,
    TestFinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
