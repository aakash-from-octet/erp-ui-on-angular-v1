import { Component } from '@angular/core';

@Component({
  selector: 'app-vetter-view',
  templateUrl: './vetter-view.component.html',
  styleUrls: ['./vetter-view.component.scss'],
})
export class VetterViewComponent {
  radioValue = 'A';
  preventContextMenu: boolean = true;
  englishContent: string = ` <p>Select the cube that can be formed by folding the given sheet along the lines.</p><img src="../../../assets/images/q1.png" /><br/><br/>
  <p>Select the cube that can be formed by folding the given sheet along the lines.</p>`;
  hindiContent: string = ` <p>उस घन का चयन करें जो दी गई शीट को रेखाओं के अनुदिश मोड़कर बनाया जा सकता है।</p> <br/> 
  <img src="../../../assets/images/q1.png" />
  <br/> <br/>
  <p>उस घन का चयन करें जो दी गई शीट को रेखाओं के अनुदिश मोड़कर बनाया जा सकता है।</p>`;
  punjabiContent: string = `<p>ਉਹ ਘਣ ਚੁਣੋ ਜੋ ਦਿੱਤੀ ਗਈ ਸ਼ੀਟ ਨੂੰ ਲਾਈਨਾਂ ਦੇ ਨਾਲ ਫੋਲਡ ਕਰਕੇ ਬਣਾਇਆ ਜਾ ਸਕਦਾ ਹੈ।</p>
  <br/> <br/>
  <img src="../../../assets/images/q1.png" />
  <br/> <br/>
  <p>ਉਹ ਘਣ ਚੁਣੋ ਜੋ ਦਿੱਤੀ ਗਈ ਸ਼ੀਟ ਨੂੰ ਲਾਈਨਾਂ ਦੇ ਨਾਲ ਫੋਲਡ ਕਰਕੇ ਬਣਾਇਆ ਜਾ ਸਕਦਾ ਹੈ।</p>`;
}
