import { Component, OnInit } from '@angular/core';
import { photos } from '../../../pup-pictures';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit {
  photos = photos;

  constructor() {}

  ngOnInit(): void {}
}

// import { GalleryItem, ImageItem } from 'ng-gallery';

// @Component({
//   selector: 'app-slideshow',
//   templateUrl: './slideshow.component.html',
//   styleUrls: ['./slideshow.component.css'],
//   template:
//   `
//     <gallery [items]="images"></gallery>
//   `
// })
// export class AppComponent implements OnInit {

//   images: GalleryItem[];

//   ngOnInit() {
//     // Set gallery items array
//     this.images = [
//       new ImageItem({ src: 'IMAGE_SRC_URL', thumb: 'IMAGE_THUMBNAIL_URL' })),
//       // ... more items
//     ];
//   }
// }
