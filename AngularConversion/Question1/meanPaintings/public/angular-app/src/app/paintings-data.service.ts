import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Painting } from './paintings-list/paintings-list.component';


@Injectable({
  providedIn: 'root'
})
export class PaintingDataService {

  private apiBaseUrl: string = "http://localhost:5050/api"

  constructor(private http: HttpClient) { }

  public getPaintings(): Promise<Painting[]> {
    const url: string = this.apiBaseUrl + "/paintings";
    return this.http.get(url).toPromise()
      .then(response => response as Painting[])
      .catch(this.handleError);
  }
  public addPainting(value: JSON): Promise<Painting[]> {
    const url: string = this.apiBaseUrl + "/paintings";
    return this.http.post(url, value).toPromise()
      .then(response => response as Painting[])
      .catch(this.handleError);
  }

  public getPainting(paintingId: string): Promise<Painting> {
    const url: string = this.apiBaseUrl + "/paintings/" + paintingId;
    return this.http.get(url).toPromise()
      .then(response => response as Painting)
      .catch(this.handleError);
  }
  public deletePainting(paintingId: string): Promise<Painting> {
    const url: string = this.apiBaseUrl + "/paintings/" + paintingId;
    return this.http.delete(url).toPromise()
      .then(response => response as Painting)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.log("Something went wrong", error);
    return Promise.reject(error.message || error);

  }
}
