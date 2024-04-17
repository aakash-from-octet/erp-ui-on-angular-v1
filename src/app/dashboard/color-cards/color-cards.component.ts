import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-color-cards',
  templateUrl: './color-cards.component.html',
  styleUrls: ['./color-cards.component.scss'],
})
export class ColorCardsComponent {
  constructor(private sharedService: SharedService) {
    this.userValue = this.sharedService.getInputValue();
  }
  userValue: string = '';
}
