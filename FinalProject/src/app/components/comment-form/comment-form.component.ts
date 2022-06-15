import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../comments.service';
import { Comment } from '../models/Comments';
import { Router } from '@angular/router';

const comment = {
  name: '',
  email: '',
  comment: '',
};

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
  comments: any;

  comment = {
    name: '',
    email: '',
    comment: '',
  };
  router: any;

  constructor(private commentService: CommentsService) {}

  ngOnInit(): void {}

  getNewComment(comment: Comment) {
    this.router.navigate(['/comments']);
  }

  addComment(newComment: Comment) {
    this.commentService.addComment(newComment).subscribe((response) => {});
    console.log(newComment.name, newComment.comment);
  }

  deleteComment(comment: Comment) {
    this.commentService.deleteComment(comment).subscribe((response) => {});
  }
}
