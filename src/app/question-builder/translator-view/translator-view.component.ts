import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-translator-view',
  templateUrl: './translator-view.component.html',
  styleUrls: ['./translator-view.component.scss'],
})
export class TranslatorViewComponent {
  constructor(private sharedService: SharedService) {
    this.userValue = this.sharedService.getInputValue();
  }
  // user manage
  userValue: string = '';
  radioValue = 'A';
  editorContent = '<p>Hello, Quill editor!</p>'; // Initial editor content
  editorConfig: any = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ script: 'sub' }, { script: 'super' }],
      ['clean'],
    ],
  };
  answer1 = 'Only conclusion IV follows';
  answer1Punjabi = 'ਸਿਰਫ ਨਤੀਜਾ IV ਨੂੰ ਪਾਲਦਾ ਹੈ।';
  preventContextMenu: boolean = false;
  isPreventContextMenu(): boolean {
    if (this.userValue === 'te1') {
      return true;
    } else {
      return false;
    }
  }
  defaultHtmlContent: string = `
  <p>उस घन का चयन करें जो दी गई शीट को रेखाओं के अनुदिश मोड़कर बनाया जा सकता है।</p> <br/> 
  <img src="../../../assets/images/q1.png" />
  <br/> <br/>
  <p>उस घन का चयन करें जो दी गई शीट को रेखाओं के अनुदिश मोड़कर बनाया जा सकता है।</p>
  `;
  punjabiContent: string = `<p>ਉਹ ਘਣ ਚੁਣੋ ਜੋ ਦਿੱਤੀ ਗਈ ਸ਼ੀਟ ਨੂੰ ਲਾਈਨਾਂ ਦੇ ਨਾਲ ਫੋਲਡ ਕਰਕੇ ਬਣਾਇਆ ਜਾ ਸਕਦਾ ਹੈ।</p>
  <br/> <br/>
  <img src="../../../assets/images/q1.png" />
  <br/> <br/>
  <p>ਉਹ ਘਣ ਚੁਣੋ ਜੋ ਦਿੱਤੀ ਗਈ ਸ਼ੀਟ ਨੂੰ ਲਾਈਨਾਂ ਦੇ ਨਾਲ ਫੋਲਡ ਕਰਕੇ ਬਣਾਇਆ ਜਾ ਸਕਦਾ ਹੈ।</p>`;
}
