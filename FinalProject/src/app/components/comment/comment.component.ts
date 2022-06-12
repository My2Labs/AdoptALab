import { Component, OnInit } from '@angular/core';
import { RandomdogService } from '../../randomdog.service';
import { Input } from '@angular/core';

type Comment = {
  name: string;
  email: string;
  comment: string;
};

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments: Comment[] = [];
  [x: string]: any;
  postComment: string[] = [];
  name = '';
  email = '';
  comment = '';
  randomdog = '';

  post() {
    this.postComment.push(this.comment);
  }

  // post() {
  //   this.comments.push({ name: '', email: '', comment: '' });
  //   console.log(this.comments);
  // }

  constructor(private randomdogService: RandomdogService) {}

  ngOnInit() {
    this.randomdogService.listRandomdog().forEach((response: any) => {
      console.log(response);
      this.randomdog =
        response.message[Math.floor(Math.random() * response.message.length)];
    });

    // addComment(newComment: Comment) {
    //   this['commentsService']
    //     .addComment(newComment)
    //     .subscribe((response: { comment: any }) => {
    //       this['comments'] = [response.comment];
    //       console.log(response);
    //     });
    // }
  }
}
