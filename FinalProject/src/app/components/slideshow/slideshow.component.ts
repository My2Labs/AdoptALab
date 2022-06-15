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
    IMAGES.forEach((item) => {
      this.images = [
        ...this.images,
        new ImageItem({ src: item.imageUrl, thumb: item.imageUrl }),
      ];
    });
  }
}
