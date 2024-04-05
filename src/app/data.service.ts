import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://localhost:44376/api/Client';

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateData(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
