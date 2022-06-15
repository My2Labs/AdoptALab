import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/main-page/mainpage.component';
import { AdoptionComponent } from './components/adoption/adoption.component';
import { ErrorpageComponent } from './components/error-page/errorpage.component';
import { SearchresultsComponent } from './components/search-results/searchresults.component';
import { AllaboutComponent } from './components/all-about/allabout.component';
import { CommentComponent } from './components/comment/comment.component';

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,
  },
  {
    path: 'AllAbout',
    component: AllaboutComponent,
  },
  {
    path: 'Adoption',
    component: AdoptionComponent,
  },
  { path: 'create', component: ErrorpageComponent },
  { path: 'edit/:postID', component: ErrorpageComponent },

  {
    path: 'Comment',
    component: CommentComponent,
  },
  {
    path: 'Errorpage',
    component: ErrorpageComponent,
  },
  {
    path: 'results',
    component: SearchresultsComponent,
  },
  {
    path: '**',
    component: ErrorpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
