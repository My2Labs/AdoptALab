import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Labrador = {
  name: string;
  breed: string;
  sex: string;
  age: string;
  imageUrl?: {
    imageUrl: string;
  };
};

export type LabradorResponse = {
  results: Labrador[];
};

@Injectable({
  providedIn: 'root',
})
export class LabadoptionService {
  constructor(private http: HttpClient) {}

  listLabrador() {
    return this.http.get<Labrador[]>(
      'https://labadoption.herokuapp.com/api/adoption/'
    );
  }
  getLabrador(name: string) {
    return this.http.get<Labrador>(
      'https://labadoption.herokuapp.com/api/adoption/${name}'
    );
  }
}
