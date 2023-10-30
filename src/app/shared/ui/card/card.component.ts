import {Component} from '@angular/core';

@Component({
  standalone: true,
  selector: 'card',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {}
