import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss'],
})
export class AnnotationComponent implements OnDestroy {
  showDiv = false;
  private subscription: Subscription;

  constructor(
    private sharedService: SharedService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.subscription = this.sharedService.showCommentBubble$.subscribe(
      (value) => {
        this.showDiv = value;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  @ViewChild('container', { static: true }) container!: ElementRef;

  points: { x: number; y: number; text: string; isEditable: boolean }[] = [];

  activePoint: {
    x: number;
    y: number;
    text: string;
    isEditable: boolean;
  } | null = null;

  showCustomPopup: boolean = false;
  customPopupX: number = 0;
  customPopupY: number = 0;
  mouseX: number = 0;
  mouseY: number = 0;

  @Input() preventContextMenu: boolean = false;

  createPopup(event: MouseEvent): void {
    if (this.preventContextMenu) {
      event.preventDefault();
      this.sharedService.updateShowCommentBubble(true);
      const containerRect =
        this.container.nativeElement.getBoundingClientRect();
      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;

      const existingPointIndex = this.points.findIndex(
        (point) => point.x === x && point.y === y
      );

      if (existingPointIndex !== -1) {
        const updatedText = prompt(
          'Update the text for this point:',
          this.points[existingPointIndex].text
        );
        if (updatedText) {
          this.points[existingPointIndex].text = updatedText;
        }
      } else {
        this.customPopupX = x;
        this.customPopupY = y;
        this.showCustomPopup = true;
      }
    }
  }

  saveCustomText(updatedText: string): void {
    if (updatedText) {
      this.points.push({
        x: this.customPopupX,
        y: this.customPopupY,
        text: updatedText,
        isEditable: true,
      });
    }

    this.showCustomPopup = false;
    this.activePoint = null;
  }

  trackMousePosition(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    for (const point of this.points) {
      const distance = Math.sqrt(
        Math.pow(this.mouseX - point.x, 2) + Math.pow(this.mouseY - point.y, 2)
      );

      if (distance <= 16 && point.isEditable) {
        this.activePoint = point;
        return;
      }
    }

    this.activePoint = null;
  }

  activateEditing(point: {
    x: number;
    y: number;
    text: string;
    isEditable: boolean;
  }): void {
    if (point.isEditable) {
      this.activePoint = point;
      console.log('activating');
    }
  }

  deactivateEditing(): void {
    this.activePoint = null;
  }

  saveEditedText(event: any): void {
    if (event.key === 'Enter' && this.activePoint) {
      this.activePoint.isEditable = false;
      this.activePoint = null;
    }
  }
}
