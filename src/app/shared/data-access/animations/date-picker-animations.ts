import {
  AnimationTriggerMetadata,
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const itemsAnimation: AnimationTriggerMetadata = trigger('itemsAnimation', [
  transition(':enter', [
    query(':self', style({overflow: 'hidden'})),
    query('div', style({opacity: 0, transform: 'translateY(20px)'})),
    query(
      'div',
      stagger(20, [
        animate(
          '50ms 30ms ease-out',
          style({
            opacity: 1,
            transform: 'none',
          }),
        ),
      ]),
    ),
  ]),
]);

export const openClose: AnimationTriggerMetadata = trigger('openClose', [
  state(
    'open',
    style({
      opacity: 1,
      height: '*',
    }),
  ),
  state(
    'closed',
    style({
      opacity: 0,
      height: 0,
    }),
  ),
  transition('open <=> closed', [animate('300ms cubic-bezier(0.35, 0, 0.25, 1)')]),
]);
