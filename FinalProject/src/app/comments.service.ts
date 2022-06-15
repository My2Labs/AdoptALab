import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

type CommentsResponse = {
  comments: Comment[];
};

export type Comment = {
  id: number;
  name: string;
  email: string;
  comment: string;
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
    return this.http.post<Comment>(`${environment.commentsEndpoint}/`, comment);
  }
  deleteComment(comment: Comment) {
    return this.http.delete(`${environment.commentsEndpoint}/${comment.id}`);
  }
}
