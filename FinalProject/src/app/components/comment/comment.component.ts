import { Component, OnInit } from '@angular/core';
import { RandomdogService } from '../../randomdog.service';
import { CommentsService } from '../../comments.service';
import { Input } from '@angular/core';
import { Comment } from '../models/Comments';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() comments: Comment[] = [];

  [x: string]: any;
  postComment: string[] = [];
  name = '';
  email = '';
  comment = '';
  randomdog = '';

  post() {
    this.postComment.push(this.comment);
  }

  addComment(newComment: Comment) {
    // Emit event
  }

  constructor(private randomdogService: RandomdogService) {}

  ngOnInit() {
    this.randomdogService.listRandomdog().forEach((response: any) => {
      console.log(response.message);
      this.randomdog = response.message;
    });
  }

  // ngOnInit() {
  //   this.randomdogService.listRandomdog().forEach((response: any) => {
  //     console.log(response.message);
  //     this.randomdog =
  //       response.message[Math.floor(Math.random() * response.message.length)];
  //   });
  // }
}
