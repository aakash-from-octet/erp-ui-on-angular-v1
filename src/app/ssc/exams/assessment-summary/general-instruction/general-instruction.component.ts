import { Component } from '@angular/core';

@Component({
  selector: 'app-general-instruction',
  templateUrl: './general-instruction.component.html',
  styleUrls: ['./general-instruction.component.scss'],
})
export class GeneralInstructionComponent {
  visible: boolean = false;
  divOpen() {
    this.visible = !this.visible;
  }
}
