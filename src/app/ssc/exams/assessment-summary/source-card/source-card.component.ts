import { Component } from '@angular/core';

@Component({
  selector: 'app-source-card',
  templateUrl: './source-card.component.html',
  styleUrls: ['./source-card.component.scss'],
})
export class SourceCardComponent {
  visible: boolean = false;
  divOpen() {
    this.visible = !this.visible;
  }
}
