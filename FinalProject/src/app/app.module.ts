import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { PuppypicturesComponent } from './components/puppypictures/puppypictures.component';
import { ActionpicturesComponent } from './components/actionpictures/actionpictures.component';
import { VideosComponent } from './components/videos/videos.component';
import { FunnypicturesComponent } from './components/funnypictures/funnypictures.component';
import { WaterpicturesComponent } from './components/waterpictures/waterpictures.component';
import { CampingpicturesComponent } from './components/campingpictures/campingpictures.component';
import { MainsectionComponent } from './components/mainsection/mainsection.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PupsleepComponent } from './components/pupsleep/pupsleep.component';
import { PortraitsComponent } from './components/portraits/portraits.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NavigationComponent,
    MainpageComponent,
    PuppypicturesComponent,
    ActionpicturesComponent,
    VideosComponent,
    FunnypicturesComponent,
    WaterpicturesComponent,
    CampingpicturesComponent,
    MainsectionComponent,
    PupsleepComponent,
    PortraitsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
