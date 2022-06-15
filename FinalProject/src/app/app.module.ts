import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainpageComponent } from './components/main-page/mainpage.component';
import { VideosComponent } from './components/videos/videos.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GalleryModule } from 'ng-gallery';
import { GALLERY_CONFIG } from 'ng-gallery';
import { MatDividerModule } from '@angular/material/divider';
import { CoverphotoComponent } from './components/cover-photo/coverphoto.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FooterdataComponent } from './components/footer-data/footerdata.component';
import { FormsModule } from '@angular/forms';
import { AdoptionComponent } from './components/adoption/adoption.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorpageComponent } from './components/error-page/errorpage.component';
import { SearchformComponent } from './components/search-form/searchform.component';
import { SearchresultsComponent } from './components/search-results/searchresults.component';
import { AllaboutComponent } from './components/allabout/allabout.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentsService } from './comments.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NavigationComponent,
    MainpageComponent,
    VideosComponent,
    NewsletterComponent,
    SlideshowComponent,
    CoverphotoComponent,
    FooterdataComponent,
    AdoptionComponent,
    ErrorpageComponent,
    SearchformComponent,
    SearchresultsComponent,
    AllaboutComponent,
    CommentComponent,
    CommentFormComponent,
    CommentListComponent,
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
    [CommentsService],
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
