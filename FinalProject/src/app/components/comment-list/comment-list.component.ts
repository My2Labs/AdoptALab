import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent implements OnInit {
  @Input() name!: string;
  @Input() email!: string;
  @Input() comment!: string;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    return this.name, this.email, this.comment;
    console.log(this.name, this.comment);
  }
}
