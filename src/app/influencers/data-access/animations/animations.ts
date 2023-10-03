import {animate, group, query, stagger, style, transition, trigger} from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
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
