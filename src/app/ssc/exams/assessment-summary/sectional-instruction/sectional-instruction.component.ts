import { Component } from '@angular/core';

@Component({
  selector: 'app-sectional-instruction',
  templateUrl: './sectional-instruction.component.html',
  styleUrls: ['./sectional-instruction.component.scss'],
})
export class SectionalInstructionComponent {
  visible: boolean = false;
  divOpen() {
    this.visible = !this.visible;
  }
  fileData: any = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
}
