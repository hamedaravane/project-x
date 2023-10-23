import {
  AnimationTriggerMetadata,
  animate,
  group,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const listAnimation: AnimationTriggerMetadata = trigger('listAnimation', [
  transition(':enter', [
    query(':self', style({overflow: 'hidden'})),
    query('app-filter-sort', style({opacity: 0, transform: 'translateY(-20px)'}), {optional: true}),
    query('li', style({opacity: 0, transform: 'translateX(-20px)'})),

    group([
      query(
        'app-filter-sort',
        animate(
          '300ms 200ms ease-out',
          style({
            opacity: 1,
            transform: 'none',
          }),
        ),
        {optional: true},
      ),
      query(
        'li',
        stagger(30, [
          animate(
            '200ms 200ms ease-out',
            style({
              opacity: 1,
              transform: 'none',
            }),
          ),
        ]),
      ),
    ]),
  ]),
]);

export const feeDetailAnimation: AnimationTriggerMetadata = trigger('feeDetailAnimation', [
  transition(':enter', [
    query(':self', style({overflow: 'hidden'})),
    query('#fee-detail', style({opacity: 0, transform: 'translateY(20px)'})),
    query(
      '#fee-detail',
      stagger(200, [
        animate(
          '300ms 400ms ease-out',
          style({
            opacity: 1,
            transform: 'none',
          }),
        ),
      ]),
    ),
  ]),
]);

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
