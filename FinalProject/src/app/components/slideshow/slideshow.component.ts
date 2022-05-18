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
