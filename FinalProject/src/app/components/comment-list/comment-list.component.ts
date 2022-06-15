import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentsService } from '../../comments.service';
import { Comment } from '../models/Comments';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent implements OnInit {
  @Input() name!: string;
  @Input() email!: string;
  @Input() comment!: string;
  commentService: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    return this.name, this.email, this.comment;
  }

  addComment(newComment: Comment) {
    this.commentService.addComment(newComment).subscribe((response: any) => {
      this.router.navigateByUrl('/Comment');
    });
    console.log(newComment.name, newComment.comment);
  }
}
