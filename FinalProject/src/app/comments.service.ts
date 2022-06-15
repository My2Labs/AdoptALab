import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

type CommentsResponse = {
  comments: Comment[];
};

type CommentResponse = {
  comment: Comment;
};

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  comments: Comment[] = [];
  findAll: any;

  constructor(private http: HttpClient) {}

  fetchComments() {
    return this.http.get<CommentsResponse>(`${environment.commentsEndpoint}/`);
  }
  addComment(comment: Comment) {
    return this.http.post<CommentResponse>(
      `${environment.commentsEndpoint}/`,
      comment
    );
  }
}
