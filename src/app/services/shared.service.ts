import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private assessmentUrl = '../assets/data/assessment-list.json';
  constructor(private router: Router, private http: HttpClient) {
    this.userValue = localStorage.getItem(this.storageKey) || '';
  }

  private questionTypeSubject = new BehaviorSubject<string>('text');
  questionType$ = this.questionTypeSubject.asObservable();

  setQuestionType(questionType: string) {
    this.questionTypeSubject.next(questionType);
  }

  // user management
  private storageKey = 'userState';
  private userValue: string = '';

  setInputValue(value: string) {
    if (value === 'evaluator' || value === 'e1') {
      this.userValue = 'e1';
      this.router.navigate(['/dashboard']);
    } else if (value === 'translator' || value === 't1') {
      this.userValue = 't1';
      this.router.navigate(['/dashboard']);
    } else if (value === 'translation-evaluator' || value === 'te1') {
      this.userValue = 'te1';
      this.router.navigate(['/dashboard']);
    } else if (value === 'vetter' || value === 'v1') {
      this.userValue = 'v1';
      this.router.navigate(['/dashboard']);
    } else if (value === 'a1' || value === 'agency') {
      this.userValue = 'a1';
    } else if (value === 's1' || value === 'ssc') {
      this.userValue = 's1';
      this.router.navigate(['/ssc']);
    } else if (value === 'em1' || value === 'emulator') {
      this.userValue = 'em1';
      this.router.navigate(['/emulator']);
    } else {
      this.userValue = value;
      this.router.navigate(['/get-started']);
    }

    localStorage.setItem(this.storageKey, this.userValue);
  }
  getInputValue() {
    return this.userValue;
  }
  logout() {
    this.userValue = '';
    localStorage.removeItem(this.storageKey);
  }

  // examdata hide show
  private isExamDataFromService = new BehaviorSubject<boolean>(false);
  examDataStatus = this.isExamDataFromService.asObservable();

  getExamDataStatus(): boolean {
    return this.isExamDataFromService.value;
  }
  setExamDataStatus(value: boolean): void {
    this.isExamDataFromService.next(value);
  }
  // add comment shadow
  // private isCommentShadow = new Subject<void>();
  // CommentShadow = this.isCommentShadow.asObservable();
  // emitShadow(): void {
  //   this.isCommentShadow.next();
  // }

  //bubble hide show
  private _showCommentBubbleSource = new BehaviorSubject<boolean>(false);
  showCommentBubble$ = this._showCommentBubbleSource.asObservable();

  updateShowCommentBubble(value: boolean): void {
    this._showCommentBubbleSource.next(value);
  }

  //ssc user
  getAssessmentData(): Observable<any[]> {
    return this.http.get<any[]>(this.assessmentUrl);
  }
}
