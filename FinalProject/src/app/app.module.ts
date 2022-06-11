import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { VideosComponent } from './components/videos/videos.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortraitsComponent } from './components/portraits/portraits.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GalleryModule } from 'ng-gallery';
import { GALLERY_CONFIG } from 'ng-gallery';
import { MatDividerModule } from '@angular/material/divider';
import { CoverphotoComponent } from './components/coverphoto/coverphoto.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FooterdataComponent } from './components/footerdata/footerdata.component';
import { FormsModule } from '@angular/forms';
import { AdoptionComponent } from './components/adoption/adoption.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { SearchformComponent } from './components/searchform/searchform.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AllaboutComponent } from './components/allabout/allabout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NavigationComponent,
    MainpageComponent,
    VideosComponent,
    NewsletterComponent,
    PortraitsComponent,
    SlideshowComponent,
    CoverphotoComponent,
    FooterdataComponent,
    AdoptionComponent,
    ErrorpageComponent,
    SearchformComponent,
    SearchresultsComponent,
    CommentsComponent,
    AllaboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MdbCarouselModule,
    MatPaginatorModule,
    GalleryModule,
    MatDividerModule,
    MatStepperModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: 'cover',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
