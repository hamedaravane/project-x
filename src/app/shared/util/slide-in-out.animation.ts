import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOut', [
  state('next', style({transform: 'translateX(-150%)', opacity: 0})),
  state('prev', style({transform: 'translateX(150%)', opacity: 0})),

  transition('* => next', [animate('300ms ease-in')]),

  transition('* => prev', [animate('300ms ease-in')]),
]);
