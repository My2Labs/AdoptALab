import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { VideosComponent } from './components/videos/videos.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { AdoptionComponent } from './components/adoption/adoption.component';

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,
  },
  {
    path: 'Videos',
    component: VideosComponent,
  },
  {
    path: 'Adoption',
    component: AdoptionComponent,
  },

  {
    path: 'Newsletter',
    component: NewsletterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
