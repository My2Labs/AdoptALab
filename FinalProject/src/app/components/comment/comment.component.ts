import { Component, OnInit } from '@angular/core';
import { RandomdogService } from '../../randomdog.service';
import { CommentsService } from 'src/app/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  postComment: string[] = [];
  comments: any;
  name = '';
  email = '';
  comment = '';
  randomdog = '';

  post() {
    this.postComment.push(this.comment);
  }

  constructor(
    private randomdogService: RandomdogService,
    private commentService: CommentsService
  ) {}

  ngOnInit() {
    this.randomdogService.listRandomdog().forEach((response: any) => {
      console.log(response.message);
      this.randomdog = response.message;
    });
    this.commentService.fetchComments().subscribe((theresponse: any) => {
      console.log(theresponse.comments);
      this.comments = theresponse.comments;
    });
  }
}
