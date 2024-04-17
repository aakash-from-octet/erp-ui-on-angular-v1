import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { SharedService } from '../services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question-builder',
  templateUrl: './question-builder.component.html',
  styleUrls: ['./question-builder.component.scss'],
})
export class QuestionBuilderComponent {
  // shadow reveal
  shadowDiv = false;
  private subscription: Subscription;
  constructor(
    private msg: NzMessageService,
    private sharedService: SharedService
  ) {
    this.userValue = this.sharedService.getInputValue();
    this.subscription = this.sharedService.showCommentBubble$.subscribe(
      (value) => {
        this.showCommentBubble = value;
      }
    );
  }

  // user manage
  userValue: string = '';

  // question type
  questionType: string | null = null;
  selectQuestionType(type: string): void {
    this.questionType = type;
    this.sharedService.setQuestionType(type);
    // console.log('Selected Question Type:', this.questionType);
  }

  // textlist
  radioValue = 'A';
  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }

  // answerlist
  answer1: string = 'ax2 + bx + c = 0';
  answerValue = 'C';

  //right div manage
  activeTab: string = 'comments';
  toggleTab(tab: string) {
    this.activeTab = tab;
  }

  tanswer1: string = '';
  tanswer2: string = '';
  tanswer3: string = '';
  tanswer4: string = '';
  editorConfig: any = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ script: 'sub' }, { script: 'super' }],
      ['clean'],
    ],
  };

  preventContextMenu: boolean = false;
  defaultHtmlContent: string = `
  <ul data-checked="false">
  <li>Select the cube that can be formed by folding the given sheet along the lines.</li>
  <li><img src="../../../assets/images/q1.png" /></li>
  <li>Select the cube that can be formed by folding the given sheet along the lines.</li>
  </ul>`;

  translate: boolean = true;
  onCommentClick(): void {}

  //show comment
  showCommentBubble = false;

  toggleCommentBubble() {
    this.showCommentBubble = !this.showCommentBubble;
    this.sharedService.updateShowCommentBubble(this.showCommentBubble);
  }
}
