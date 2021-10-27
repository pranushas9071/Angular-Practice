import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { DirectivePracticeComponent } from './directive-practice/directive-practice.component';
import { DogPipe } from './dog.pipe';
import { DogsComponent } from './dogs/dogs.component';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { MyPipe } from './myPipe.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegistrationComponent } from './registration/registration.component';
import { SecondComponent } from './second/second.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TemplatePracticeComponent } from './template-practice/template-practice.component';
import { ThirdComponent } from './third/third.component';
import { UnsavedChangesGuard } from './unsaved-changes.guard';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VoterComponent } from './voter/voter.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { InternationalizationComponent } from './internationalization/internationalization.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FileUploadComponent } from './file-upload/file-upload.component';

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
    LoginComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    RegistrationComponent,
    InternationalizationComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [AuthGuard,UnsavedChangesGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
