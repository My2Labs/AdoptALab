import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommentsService } from 'src/app/comments.service';
import { Randomdog, RandomdogService } from '../../randomdog.service';

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
  randomdog = '';

  post() {
    this.postComment.push(this.comment);
    this.comment = '';
  }

  submit() {
    this.postComment.push(this.comment);
    this.comment = '';
  }

  constructor(private randomdogService: RandomdogService) {}

  ngOnInit() {
    this.randomdogService.listRandomdog().forEach((response: any) => {
      console.log(response);
      this.randomdog =
        response.message[Math.floor(Math.random() * response.message.length)];
    });
  }

  // addComment(newComment: Comment) {
  //   this['commentsService']
  //     .addComment(newComment)
  //     .subscribe((response: { comment: any }) => {
  //       this['comments'] = [response.comment];
  //       console.log(response);
  //     });
  // }
}
