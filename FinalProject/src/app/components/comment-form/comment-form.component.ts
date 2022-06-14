import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../comments.service';
import { Comment } from '../models/Comments';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentsService) {}

  ngOnInit(): void {}

  addComment(newComment: Comment) {
    const comment: Comment = {
      comment: newComment.comment,
      name: newComment.name,
      email: newComment.email,
    };
    this.commentService.addComment(comment).subscribe((response) => {
      console.log(response.comment);
      this.comments = [...this.comments, response.comment];
    });
    console.log(newComment);
  }
}
