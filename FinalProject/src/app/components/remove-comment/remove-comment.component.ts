import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../comments.service';
import { Comment } from '../models/Comments';

@Component({
  selector: 'app-remove-comment',
  templateUrl: './remove-comment.component.html',
  styleUrls: ['./remove-comment.component.css'],

  template: ` Id: <input type="text" [(ngModel)]="id" /> `,
})
export class RemoveCommentComponent implements OnInit {
  comments: any;
  constructor(private commentService: CommentsService) {}

  ngOnInit(): void {}

  deleteComment(comment: Comment) {
    this.commentService.deleteComment(comment).subscribe((response) => {});
  }

  updateComment(comment: Comment) {
    this.commentService.updateComment(comment).subscribe((response) => {
      this.comments = [response.comment];
    });
  }
}
