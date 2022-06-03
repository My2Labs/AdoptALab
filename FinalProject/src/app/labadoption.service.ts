import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

export type Labrador = {
  name: string;
  breed: string;
  sex: string;
  age: string;
  imageUrl?: {
    imageUrl: string;
  };
};

type LabradorResponse = {
  labradors: Labrador[];
};

const labradorsEndpoint = environment.labradorsEndpoint;

@Injectable({
  providedIn: 'root',
})
export class LabadoptionService {
  constructor(private http: HttpClient) {}

  listLabrador() {
    return this.http.get<LabradorResponse>(labradorsEndpoint);
  }
}
