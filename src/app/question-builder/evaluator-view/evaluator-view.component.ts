import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluator-view',
  templateUrl: './evaluator-view.component.html',
  styleUrls: ['./evaluator-view.component.scss'],
})
export class EvaluatorViewComponent {
  constructor() {}
  // answerlist
  answer1: string = 'ax2 + bx + c = 0';
  answerValue = 'C';
  preventContextMenu: boolean = true;
  defaultHtmlContent: string = `
  <p>Select the cube that can be formed by folding the given sheet along the lines.</p><img src="../../../assets/images/q1.png" /><br/><br/>
  <p>Select the cube that can be formed by folding the given sheet along the lines.</p>
  `;
}
