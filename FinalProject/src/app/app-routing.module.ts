import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { VideosComponent } from './components/videos/videos.component';
import { MainsectionComponent } from './components/mainsection/mainsection.component';

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
    path: 'Newsletter',
    component: MainsectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
