import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sing-up',
    loadChildren: () => import('./pages/sing-up/sing-up.module').then( m => m.SingUpPageModule)
  },
  {
    path: 'feedbacks',
    loadChildren: () => import('./pages/feedbacks/feedbacks.module').then( m => m.FeedbacksPageModule)
  },
  {
    path: 'evaluate',
    loadChildren: () => import('./pages/evaluate/evaluate.module').then( m => m.EvaluatePageModule)
  },
  {
    path: 'register-school',
    loadChildren: () => import('./pages/register-school/register-school.module').then( m => m.RegisterSchoolPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'feedbacks-school',
    loadChildren: () => import('./pages/feedbacks-school/feedbacks-school.module').then( m => m.FeedbacksSchoolPageModule)
  },
  {
    path: 'feedback-detail',
    loadChildren: () => import('./pages/feedback-detail/feedback-detail.module').then( m => m.FeedbackDetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
