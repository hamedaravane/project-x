import {AnimationTriggerMetadata, animate, style, transition, trigger} from '@angular/animations';

export const opacityAnimation: AnimationTriggerMetadata = trigger('opacityAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(
      '50ms 30ms ease-out',
      style({
        opacity: 1,
      }),
    ),
  ]),
  transition(':leave', [
    style({
      opacity: 1,
    }),
    animate(
      '50ms 30ms ease-out',
      style({
        opacity: 0,
      }),
    ),
  ]),
]);

export const transferToRightAnimation: AnimationTriggerMetadata = trigger('transferToRightAnimation', [
  transition(':enter', [
    style({
      transfer: 'translateX(-100%)',
    }),
    animate(
      '50ms 50ms ease-out',
      style({
        transfer: 'translateX(none)',
      }),
    ),
  ]),
  transition(':leave', [
    style({
      transfer: 'translateX(none)',
    }),
    animate(
      '50ms 50ms ease-out',
      style({
        transfer: 'translateX(-100%)',
      }),
    ),
  ]),
]);
