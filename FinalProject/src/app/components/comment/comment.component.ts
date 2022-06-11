import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommentsService } from 'src/app/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  [x: string]: any;
  postComment: string[] = [];
  name = '';
  email = '';
  comment = '';

  post() {
    this.postComment.push(this.comment);
    this.comment = '';
  }

  submit() {
    this.postComment.push(this.comment);
    this.comment = '';
  }

  constructor() {}

  ngOnInit(): void {}

  // addComment(newComment: Comment) {
  //   this['commentsService']
  //     .addComment(newComment)
  //     .subscribe((response: { comment: any }) => {
  //       this['comments'] = [response.comment];
  //       console.log(response);
  //     });
  // }
}
