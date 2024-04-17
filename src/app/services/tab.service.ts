import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  private activeTabSubject = new BehaviorSubject<string>('Assessment');
  activeTab$ = this.activeTabSubject.asObservable();

  setActiveTab(tab: string) {
    this.activeTabSubject.next(tab);
  }

  private selectedTabSubject = new BehaviorSubject<string>('system-policy');
  selectedTab$ = this.selectedTabSubject.asObservable();

  setSelectedTab(tab: string) {
    this.selectedTabSubject.next(tab);
  }
  getSelectedTab(): string {
    return this.selectedTabSubject.value;
  }
}
