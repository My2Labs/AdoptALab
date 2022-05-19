// import { Component, OnInit } from '@angular/core';
// import { photos } from '../../../pup-pictures';

// @Component({
//   selector: 'app-slideshow',
//   templateUrl: './slideshow.component.html',
//   styleUrls: ['./slideshow.component.css'],
// })
// export class SlideshowComponent implements OnInit {
//   photos = photos;

//   constructor() {}

//   ngOnInit(): void {}
// }
import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { IMAGES } from '../../../puppies';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  template: ` <gallery [items]="images"></gallery> `,
})
export class SlideshowComponent implements OnInit {
  images: GalleryItem[] = [];

  ngOnInit() {
    // Set gallery items array
    IMAGES.forEach((item) => {
      this.images = [
        ...this.images,
        new ImageItem({ src: item.imageUrl, thumb: item.imageUrl }),
      ];
    });
  }
}
