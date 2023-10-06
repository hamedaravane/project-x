import {
  AnimationTriggerMetadata,
  animate,
  group,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const listAnimation: AnimationTriggerMetadata = trigger('listAnimation', [
  transition(':enter', [
    query(':self', style({overflow: 'hidden'})),
    query('app-filter-sort', style({opacity: 0, transform: 'translateY(-20px)'})),
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
