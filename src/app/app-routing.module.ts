import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
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
    path: 'evaluate',
    loadChildren: () => import('./pages/evaluate/evaluate.module').then( m => m.EvaluatePageModule)
  },

  {
    path: 'feedback-detail/:id',
    loadChildren: () => import('./pages/feedback-detail/feedback-detail.module').then( m => m.FeedbackDetailPageModule)
  },
  
  {
    path: 'feedbacks',
    loadChildren: () => import('./pages/feedbacks/feedbacks.module').then( m => m.FeedbacksPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
