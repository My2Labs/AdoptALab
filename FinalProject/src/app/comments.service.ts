import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

type CommentResponse = {
  comments: Comment[];
};

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  fetchComments() {
    throw new Error('Method not implemented.');
  }
  comments: Comment[] = [];

  constructor(private http: HttpClient) {}

  addComment(comment: Comment) {
    return this.http.post<CommentResponse>(
      `${environment.randomdogsEndpoint}/comments`,
      comment
    );
  }
}
