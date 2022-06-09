import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommentsService } from '../../comments.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService;
    //     .fetchComments()
    //     .subscribe((comments: Comment[]) => (this.comments = comments));
    //       // .subscribe((response: { comments: Comment[] }) => {
    //       // this.comments = response.comments;
    //     };
    // }

    // addComment(newComment: Comment) {
    //   this.commentsService.addComment(newComment).subscribe((response) => {
    //     this.comments = [response.comments, ...this.comments];
    //   });
    // }
  }
}
