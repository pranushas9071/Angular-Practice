import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { FirstComponent } from './first/first.component';
import { MyPipe } from './myPipe.pipe';
import { SecondComponent } from './second/second.component';
import { TemplatePracticeComponent } from './template-practice/template-practice.component';
import { ThirdComponent } from './third/third.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VoterComponent } from './voter/voter.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { DogPipe } from './dog.pipe';
import { DirectivePracticeComponent } from './directive-practice/directive-practice.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    VersionParentComponent,
    VersionChildComponent,
    VotetakerComponent,
    VoterComponent,
    TemplatePracticeComponent,
    MyPipe,
    DogsComponent,
    DogPipe,
    DirectivePracticeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
