import { Component, OnInit } from '@angular/core';
import { RandomdogService } from '../../randomdog.service';
import { CommentsService } from 'src/app/comments.service';
import { Router } from '@angular/router';

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
    private commentService: CommentsService,
    private router: Router
  ) {}

  // getNewComment(comment: Comment) {
  //   this.router.navigate(['/Comment']);
  // }

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
