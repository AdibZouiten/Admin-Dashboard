import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiUrl: string = 'http://localhost:3000/service';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getService(id:any = ''): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

    // Delete
    deleteService(id: any): Observable<any> {
      var API_URL = `${this.apiUrl}/${id}`;
      return this.http.delete(API_URL)
    }

      
    // Update
    update(id: any, data: any): Observable<any> {
      let API_URL = `${this.apiUrl}/${id}`;
      return this.http.put(API_URL, data, { headers: this.headers })
    }

    // Create
    create(data: any): Observable<any> {
      let API_URL = `${this.apiUrl}`;
      return this.http.post(API_URL, data)
    }

}
