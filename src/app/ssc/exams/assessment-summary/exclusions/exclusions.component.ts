import { Component } from '@angular/core';

@Component({
  selector: 'app-exclusions',
  templateUrl: './exclusions.component.html',
  styleUrls: ['./exclusions.component.scss'],
})
export class ExclusionsComponent {
  visible: boolean = false;
  divOpen() {
    this.visible = !this.visible;
  }
}
