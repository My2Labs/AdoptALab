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

  addComment(comments: Comment) {
    this.commentService.findAll().subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
    console.log(comments);
  }
}