import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })

export class Apispaceservice {
    private REST_API = "https://api.spacexdata.com/v3/launches"


  constructor(private httpClient: HttpClient) {}

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API).pipe(retry(3))
  }
  
}