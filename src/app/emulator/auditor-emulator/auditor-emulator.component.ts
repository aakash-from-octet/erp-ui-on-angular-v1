import { Component } from '@angular/core';

@Component({
  selector: 'app-auditor-emulator',
  templateUrl: './auditor-emulator.component.html',
  styleUrls: ['./auditor-emulator.component.scss'],
})
export class AuditorEmulatorComponent {
  radioValue = 'A';
  numbersArray = Array.from({ length: 100 }, (_, index) => index + 1);

  getRandomColorClass(): string {
    const colors = ['obj-red', 'obj-green', 'obj-blue', 'obj-grey'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false,
    },
  ];
  checkOptionsOne = [
    { label: 'Y', value: '1', checked: true },
    { label: 'N', value: '2' },
  ];
}
