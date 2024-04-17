import { Component } from '@angular/core';
import { ExamsListService } from 'src/app/services/exams-list.service';
import { TabService } from 'src/app/services/tab.service';

@Component({
  selector: 'app-drawer-content',
  templateUrl: './drawer-content.component.html',
  styleUrls: ['./drawer-content.component.scss'],
})
export class DrawerContentComponent {
  constructor(
    private examsListService: ExamsListService,
    private tabService: TabService
  ) {}
  shiftData: any = [];
  activeTab: string = '';
  ngOnInit() {
    this.examsListService.getShiftData().subscribe((data: any[]) => {
      this.shiftData = data;
    });
    this.tabService.activeTab$.subscribe((activeTab) => {
      this.activeTab = activeTab;
      console.log(this.activeTab);
    });
  }
}
