import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

export type Randomdog = {
  message: string;
};

export type RandomdogResponse = {
  randomdogs: Randomdog[];
};

const randomdogsEndpoint = environment.randomdogsEndpoint;

@Injectable({
  providedIn: 'root',
})
export class RandomdogService {
  constructor(private http: HttpClient) {}

  listRandomdog() {
    return this.http.get<Randomdog>(randomdogsEndpoint);
  }
}
