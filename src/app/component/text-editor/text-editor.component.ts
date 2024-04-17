import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
})
export class TextEditorComponent {
  @Input() defaultHtmlContent: string = '';

  constructor(private sharedService: SharedService) {}
  editorConfig: any = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ align: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ direction: 'rtl' }],
      ['image', 'formula'],
      ['clean'],
    ],
  };
}
