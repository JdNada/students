import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private  readonly apiUrl = 'http://127.0.0.1:5000/students';

  constructor(private readonly http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addStudent(student: any): Observable<any> {
    return this.http.post(this.apiUrl, student);
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
