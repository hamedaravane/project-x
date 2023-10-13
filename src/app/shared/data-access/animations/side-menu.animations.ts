import {AnimationTriggerMetadata, animate, group, query, style, transition, trigger} from '@angular/animations';

export const sideMenuAnimations: AnimationTriggerMetadata = trigger('sideMenuAnimations', [
  transition(':enter', [
    query('#background', [
      style({
        opacity: 0,
      }),
    ]),
    query('#side-menu', [
      style({
        transform: 'translateX(16rem)',
      }),
    ]),
    group([
      query('#background', [
        animate(
          '100ms 30ms ease-out',
          style({
            opacity: 1,
          }),
        ),
      ]),
      query('#side-menu', [
        animate(
          '100ms 30ms ease-in',
          style({
            transform: 'translateX(0)',
          }),
        ),
      ]),
    ]),
  ]),
  transition(':leave', [
    query('#background', [
      style({
        opacity: 1,
      }),
    ]),
    query('#side-menu', [
      style({
        transform: 'translateX(0)',
      }),
    ]),
    group([
      query('#background', [
        animate(
          '100ms 30ms ease-out',
          style({
            opacity: 0,
          }),
        ),
      ]),
      query('#side-menu', [
        animate(
          '100ms 30ms ease-out',
          style({
            transform: 'translateX(16rem)',
          }),
        ),
      ]),
    ]),
  ]),
]);
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
export const transformToRightAnimation: AnimationTriggerMetadata = trigger('transformToRightAnimation', [
  transition(':enter', [
    style({
      transform: 'translateX(-100%)',
    }),
    animate(
      '3000ms 1000ms ease-in',
      style({
        transform: 'translateX(none)',
      }),
    ),
  ]),
  transition(':leave', [
    style({
      transform: 'translateX(none)',
    }),
    animate(
      '3000ms 1000ms ease-out',
      style({
        transform: 'translateX(-100%)',
      }),
    ),
  ]),
]);
