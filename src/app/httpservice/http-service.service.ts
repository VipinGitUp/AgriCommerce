import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":"*",
    
  }

  postRequest(url:string, data:any) {
    return this.http.post(url,data, { headers: this.headers });
  }

  getRequest(url:string) {
    return this.http.get(url);
  }


}
