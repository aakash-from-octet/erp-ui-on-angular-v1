import { Component } from '@angular/core';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss']
})
export class SourceComponent {
  addAuthorActive: boolean = false;
  isVisible = false;
  onAuthorClick(){
    this.isVisible = true;
    this.addAuthorActive = true;
  }
}
