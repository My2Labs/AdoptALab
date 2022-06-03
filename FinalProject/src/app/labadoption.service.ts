import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const labradorsEndpoint = environment.labradorsEndpoint;

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

@Injectable({
  providedIn: 'root',
})
export class LabadoptionService {
  constructor(public http: HttpClient) {}

  listLabrador() {
    return this.http.get<LabradorResponse>(
      'https://labadoption.herokuapp.com/labadoptions'
    );
  }
}
