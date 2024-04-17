import { Component } from '@angular/core';

@Component({
  selector: 'app-student-emulator',
  templateUrl: './student-emulator.component.html',
  styleUrls: ['./student-emulator.component.scss'],
})
export class StudentEmulatorComponent {
  radioValue = 'A';
  numbersArray = Array.from({ length: 25 }, (_, index) => index + 1);

  getRandomColorClass(): string {
    const colors = ['obj-red', 'obj-green', 'obj-blue', 'obj-grey'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
}
