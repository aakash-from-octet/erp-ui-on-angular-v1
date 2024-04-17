import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ExamsListService {
  private examsUrl = '../assets/data/exams-list.json';
  private shiftUrl = '../assets/data/shift-list.json';
  private userUrl = '../assets/data/user-list.json';
  constructor(private http: HttpClient) {}
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.examsUrl);
  }
  getShiftData(): Observable<any[]> {
    return this.http.get<any[]>(this.shiftUrl);
  }
  getUserData(): Observable<any[]> {
    return this.http.get<any[]>(this.userUrl);
  }
  getDataById(id: string): Observable<any> {
    return this.getData().pipe(
      map((exams: any[]) => exams.find((exam) => exam.id === id))
    );
  }
}
