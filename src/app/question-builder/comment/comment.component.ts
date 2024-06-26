import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  showCommentBox = false;
  constructor() {}
  onCommentClick() {
    this.showCommentBox = !this.showCommentBox;
  }
  submitComment(): void {
    console.log('Comment submitted!');
    this.showCommentBox = false;
  }
}
