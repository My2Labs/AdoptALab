import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

export type CommentResponse = {
  comments: Comment[];
};

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  deleteComment(id: any, postId: string | undefined) {
    throw new Error('Method not implemented.');
  }
  getCommentUpdateListener() {
    throw new Error('Method not implemented.');
  }
  getComments(postId: string | undefined) {
    throw new Error('Method not implemented.');
  }
  fetchComments() {
    throw new Error('Method not implemented.');
  }
  comments: Comment[] = [];

  constructor(private http: HttpClient) {}

  addComment(comment: Comment) {
    return this.http.post<CommentResponse>(
      `${environment.commentsEndpoint}/comments`,
      comment
    );
  }
}
