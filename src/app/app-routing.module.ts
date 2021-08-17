import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DirectivePracticeComponent } from './directive-practice/directive-practice.component';
import { DogsComponent } from './dogs/dogs.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TemplatePracticeComponent } from './template-practice/template-practice.component';
import { ThirdComponent } from './third/third.component';
import { UnsavedChangesGuard } from './unsaved-changes.guard';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VotetakerComponent } from './votetaker/votetaker.component';

const routes: Routes = [
  { path: 'directive', component: DirectivePracticeComponent },
  {
    path: 'template',
    component: TemplatePracticeComponent,
    canActivate: [AuthGuard],
  },
  { path: 'service', component: DogsComponent },
  { path: 'component', component: VersionParentComponent },
  { path: 'encapsulate', component: ThirdComponent },
  { path: 'childToParent', component: VotetakerComponent },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [UnsavedChangesGuard],
  },
  { path: 'profile', component: ReactiveFormComponent },
  {path:'signin',component:TemplateDrivenFormComponent},
  { path: '', redirectTo: '/service', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
