import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss'],
})
export class ConditionsComponent {
  checked1: boolean = false;
  radioValue = 'A';

  conditions = [{ type: '1' }];
  addCondition() {
    this.conditions.push({ type: '1' });
  }
  removeCondition(index: number) {
    this.conditions.splice(index, 1);
  }
 
}
